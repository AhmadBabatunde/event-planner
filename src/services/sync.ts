import { db } from './database'

class SyncService {
  private isOnline: boolean = navigator.onLine
  private syncInProgress: boolean = false
  private syncCallbacks: Array<(status: 'started' | 'completed' | 'failed') => void> = []

  constructor() {
    this.setupEventListeners()
  }

  private setupEventListeners() {
    window.addEventListener('online', () => {
      console.log('Connection restored - triggering sync')
      this.isOnline = true
      this.triggerSync()
    })

    window.addEventListener('offline', () => {
      console.log('Connection lost - entering offline mode')
      this.isOnline = false
    })

    // Listen for service worker messages
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.type === 'SYNC_COMPLETE') {
          console.log('Background sync completed')
          this.notifyCallbacks('completed')
        }
      })
    }
  }

  async triggerSync(): Promise<void> {
    if (this.syncInProgress || !this.isOnline) {
      return
    }

    this.syncInProgress = true
    this.notifyCallbacks('started')

    try {
      console.log('Starting data synchronization...')
      
      // Get all pending sync items
      const syncQueue = await db.getSyncQueue()
      
      if (syncQueue.length === 0) {
        console.log('No pending sync items')
        this.syncInProgress = false
        this.notifyCallbacks('completed')
        return
      }

      console.log(`Syncing ${syncQueue.length} items...`)

      // Process sync queue (this will be implemented when we have API endpoints)
      for (const item of syncQueue) {
        try {
          await this.processSyncItem(item)
        } catch (error) {
          console.error('Failed to sync item:', item.id, error)
          // Increment retry count
          item.retryCount++
          if (item.retryCount < 3) {
            await db.update('syncQueue', item)
          } else {
            // Remove item after 3 failed attempts
            await db.delete('syncQueue', item.id)
          }
        }
      }

      // Clear successfully synced items
      await db.clearSyncQueue()
      
      console.log('Data synchronization completed')
      this.syncInProgress = false
      this.notifyCallbacks('completed')

    } catch (error) {
      console.error('Sync failed:', error)
      this.syncInProgress = false
      this.notifyCallbacks('failed')
    }
  }

  private async processSyncItem(item: any): Promise<void> {
    // This is a placeholder for actual API calls
    // In a real implementation, this would make HTTP requests to sync data
    console.log(`Processing sync item: ${item.operation} on ${item.table}`, item.data)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // For now, just log the operation
    // TODO: Implement actual API calls when backend is ready
  }

  onSyncStatusChange(callback: (status: 'started' | 'completed' | 'failed') => void) {
    this.syncCallbacks.push(callback)
    
    // Return unsubscribe function
    return () => {
      const index = this.syncCallbacks.indexOf(callback)
      if (index > -1) {
        this.syncCallbacks.splice(index, 1)
      }
    }
  }

  private notifyCallbacks(status: 'started' | 'completed' | 'failed') {
    this.syncCallbacks.forEach(callback => callback(status))
  }

  // Queue data for sync when offline
  async queueForSync(operation: 'create' | 'update' | 'delete', table: string, data: any): Promise<void> {
    await db.addToSyncQueue(operation, table, data)
    
    // If online, trigger immediate sync
    if (this.isOnline) {
      this.triggerSync()
    }
  }

  // Manual sync trigger
  async forcSync(): Promise<void> {
    if (this.isOnline) {
      await this.triggerSync()
    } else {
      throw new Error('Cannot sync while offline')
    }
  }

  // Get sync status
  getSyncStatus(): { isOnline: boolean; syncInProgress: boolean } {
    return {
      isOnline: this.isOnline,
      syncInProgress: this.syncInProgress
    }
  }

  // Get pending sync count
  async getPendingSyncCount(): Promise<number> {
    const syncQueue = await db.getSyncQueue()
    return syncQueue.length
  }
}

// Export singleton instance
export const syncService = new SyncService()