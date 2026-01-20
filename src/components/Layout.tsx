import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const navigationItems = [
    { path: '/', label: 'Overview', icon: '📊', gradient: 'gradient-purple' },
    { path: '/guests', label: 'Registrations', icon: '👥', gradient: 'gradient-blue' },
    { path: '/operations', label: 'Event-day', icon: '📅', gradient: 'gradient-orange' },
    { path: '/vendors', label: 'Exhibitors', icon: '🤝', gradient: 'gradient-green' },
    { path: '/media', label: 'Communicate', icon: '📧', gradient: 'gradient-pink' }
  ]

  return (
    <div className="min-h-screen">
      {isOffline && (
        <div className="offline-indicator">
          <div className="flex items-center justify-center">
            <span className="mr-2">📡</span>
            You're offline. Changes will sync when connection is restored.
          </div>
        </div>
      )}

      <header className={`mobile-header lg:hidden ${isOffline ? 'mt-12' : ''}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <h1 className="text-xl font-bold text-white">WCC</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-icon"
            aria-label="Toggle menu"
            style={{ background: '#334155', border: 'none', color: '#e2e8f0' }}
          >
            <span className="text-lg">{isMobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>

      <div className="flex">
        <nav className={`
          sidebar fixed inset-y-0 left-0 z-50 w-64 transform transition-all duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isOffline ? 'lg:top-12' : 'lg:top-0'}
        `}>
          <div className="p-6 border-b border-gray-700 hidden lg:block">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Wedding Command</h1>
                <p className="text-xs text-gray-400">Center</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={`w-8 h-8 rounded-lg ${item.gradient} flex items-center justify-center mr-3`}>
                  <span className="text-base">{item.icon}</span>
                </div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-xl mb-2">💒</div>
              <p className="text-xs text-gray-400">Nigerian Wedding</p>
              <p className="text-xs text-gray-500">Operations Hub</p>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <main className={`
          flex-1 min-h-screen
          ${isOffline ? 'pt-12' : ''}
          lg:ml-0
        `}>
          <div className="p-6 fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
