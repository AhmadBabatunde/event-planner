import { openDB, DBSchema, IDBPDatabase } from 'idb'

// Database schema definition
interface WeddingDB extends DBSchema {
  events: {
    key: string
    value: {
      id: string
      name: string
      date: string
      venue: string
      plannerId: string
      guestCount: number
      status: string
      createdAt: string
      updatedAt: string
    }
  }
  guests: {
    key: string
    value: {
      id: string
      eventId: string
      name: string
      phone: string
      email?: string
      qrCode: string
      zoneId: string
      rsvpStatus: string
      checkInTime?: string
      plusOnes: number
      createdAt: string
    }
    indexes: { 'by-event': string; 'by-qr-code': string }
  }
  vendors: {
    key: string
    value: {
      id: string
      eventId: string
      name: string
      service: string
      phone: string
      email: string
      checkInTime?: string
      tasks: Array<{
        id: string
        description: string
        status: string
        completedAt?: string
        verifiedBy?: string
        verifiedAt?: string
      }>
    }
    indexes: { 'by-event': string }
  }
  timeline: {
    key: string
    value: {
      id: string
      eventId: string
      segments: Array<{
        id: string
        name: string
        scheduledStart: string
        actualStart?: string
        duration: number
        status: string
        dependencies: string[]
      }>
      lastUpdated: string
    }
    indexes: { 'by-event': string }
  }
  media: {
    key: string
    value: {
      id: string
      eventId: string
      uploadedBy: string
      fileName: string
      fileUrl: string
      uploadTime: string
      isSlayOfTheDay: boolean
      tags: string[]
    }
    indexes: { 'by-event': string }
  }
  syncQueue: {
    key: string
    value: {
      id: string
      operation: 'create' | 'update' | 'delete'
      table: string
      data: any
      timestamp: string
      retryCount: number
    }
  }
}

class DatabaseService {
  private db: IDBPDatabase<WeddingDB> | null = null
  private readonly DB_NAME = 'WeddingCommandCenter'
  private readonly DB_VERSION = 1

  async init(): Promise<void> {
    try {
      this.db = await openDB<WeddingDB>(this.DB_NAME, this.DB_VERSION, {
        upgrade(db) {
          // Events store
          if (!db.objectStoreNames.contains('events')) {
            db.createObjectStore('events', { keyPath: 'id' })
          }

          // Guests store with indexes
          if (!db.objectStoreNames.contains('guests')) {
            const guestStore = db.createObjectStore('guests', { keyPath: 'id' })
            guestStore.createIndex('by-event', 'eventId')
            guestStore.createIndex('by-qr-code', 'qrCode', { unique: true })
          }

          // Vendors store
          if (!db.objectStoreNames.contains('vendors')) {
            const vendorStore = db.createObjectStore('vendors', { keyPath: 'id' })
            vendorStore.createIndex('by-event', 'eventId')
          }

          // Timeline store
          if (!db.objectStoreNames.contains('timeline')) {
            const timelineStore = db.createObjectStore('timeline', { keyPath: 'id' })
            timelineStore.createIndex('by-event', 'eventId')
          }

          // Media store
          if (!db.objectStoreNames.contains('media')) {
            const mediaStore = db.createObjectStore('media', { keyPath: 'id' })
            mediaStore.createIndex('by-event', 'eventId')
          }

          // Sync queue store
          if (!db.objectStoreNames.contains('syncQueue')) {
            db.createObjectStore('syncQueue', { keyPath: 'id' })
          }
        }
      })
      console.log('Database initialized successfully')
    } catch (error) {
      console.error('Failed to initialize database:', error)
      throw error
    }
  }

  private ensureDB(): IDBPDatabase<WeddingDB> {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.')
    }
    return this.db
  }

  // Generic CRUD operations
  async create<T extends keyof WeddingDB>(
    storeName: T,
    data: WeddingDB[T]['value']
  ): Promise<void> {
    const db = this.ensureDB()
    await db.add(storeName as any, data)
  }

  async read<T extends keyof WeddingDB>(
    storeName: T,
    id: string
  ): Promise<WeddingDB[T]['value'] | undefined> {
    const db = this.ensureDB()
    return await db.get(storeName as any, id)
  }

  async update<T extends keyof WeddingDB>(
    storeName: T,
    data: WeddingDB[T]['value']
  ): Promise<void> {
    const db = this.ensureDB()
    await db.put(storeName as any, data)
  }

  async delete<T extends keyof WeddingDB>(
    storeName: T,
    id: string
  ): Promise<void> {
    const db = this.ensureDB()
    await db.delete(storeName as any, id)
  }

  async getAll<T extends keyof WeddingDB>(
    storeName: T
  ): Promise<WeddingDB[T]['value'][]> {
    const db = this.ensureDB()
    return await db.getAll(storeName as any)
  }

  // Index-based queries
  async getByIndex<T extends keyof WeddingDB>(
    storeName: T,
    indexName: string,
    value: string
  ): Promise<WeddingDB[T]['value'][]> {
    const db = this.ensureDB()
    // @ts-ignore - IndexedDB type complexity
    return await db.getAllFromIndex(storeName, indexName, value)
  }

  // Sync queue operations
  async addToSyncQueue(operation: 'create' | 'update' | 'delete', table: string, data: any): Promise<void> {
    const queueItem = {
      id: crypto.randomUUID(),
      operation,
      table,
      data,
      timestamp: new Date().toISOString(),
      retryCount: 0
    }
    await this.create('syncQueue', queueItem)
  }

  async getSyncQueue(): Promise<WeddingDB['syncQueue']['value'][]> {
    return await this.getAll('syncQueue')
  }

  async clearSyncQueue(): Promise<void> {
    const db = this.ensureDB()
    const tx = db.transaction('syncQueue', 'readwrite')
    await tx.store.clear()
    await tx.done
  }

  // Utility methods
  async clearAllData(): Promise<void> {
    const db = this.ensureDB()
    const storeNames: (keyof WeddingDB)[] = ['events', 'guests', 'vendors', 'timeline', 'media', 'syncQueue']
    
    for (const storeName of storeNames) {
      const tx = db.transaction(storeName as any, 'readwrite')
      await tx.store.clear()
      await tx.done
    }
  }

  async getStorageInfo(): Promise<{ used: number; quota: number }> {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate()
      return {
        used: estimate.usage || 0,
        quota: estimate.quota || 0
      }
    }
    return { used: 0, quota: 0 }
  }
}

// Export singleton instance
export const db = new DatabaseService()