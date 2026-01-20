import { useEffect, useState } from 'react'
import { db } from '@/services/database'

interface DatabaseStatus {
  isInitialized: boolean
  isLoading: boolean
  error: string | null
  storageInfo: {
    used: number
    quota: number
  }
}

export const useDatabase = () => {
  const [status, setStatus] = useState<DatabaseStatus>({
    isInitialized: false,
    isLoading: true,
    error: null,
    storageInfo: { used: 0, quota: 0 }
  })

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        setStatus(prev => ({ ...prev, isLoading: true, error: null }))
        
        await db.init()
        const storageInfo = await db.getStorageInfo()
        
        setStatus({
          isInitialized: true,
          isLoading: false,
          error: null,
          storageInfo
        })
        
        console.log('Database initialized successfully')
      } catch (error) {
        console.error('Failed to initialize database:', error)
        setStatus({
          isInitialized: false,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown database error',
          storageInfo: { used: 0, quota: 0 }
        })
      }
    }

    initializeDatabase()
  }, [])

  const refreshStorageInfo = async () => {
    try {
      const storageInfo = await db.getStorageInfo()
      setStatus(prev => ({ ...prev, storageInfo }))
    } catch (error) {
      console.error('Failed to refresh storage info:', error)
    }
  }

  return {
    ...status,
    refreshStorageInfo
  }
}