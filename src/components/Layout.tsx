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
    { path: '/', label: 'Dashboard', icon: '📊', gradient: 'gradient-purple' },
    { path: '/guests', label: 'Guests', icon: '👥', gradient: 'gradient-blue' },
    { path: '/operations', label: 'Operations', icon: '⚡', gradient: 'gradient-orange' },
    { path: '/vendors', label: 'Vendors', icon: '🤝', gradient: 'gradient-green' },
    { path: '/media', label: 'Media', icon: '📸', gradient: 'gradient-pink' }
  ]

  return (
    <div className="min-h-screen">
      {/* Offline Indicator */}
      {isOffline && (
        <div className="offline-indicator">
          <div className="flex items-center justify-center">
            <span className="mr-2">📡</span>
            You're offline. Changes will sync when connection is restored.
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <header className={`mobile-header lg:hidden ${isOffline ? 'mt-12' : ''}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <h1 className="text-xl font-bold text-gradient">WCC</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-icon"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{isMobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className={`
          sidebar fixed inset-y-0 left-0 z-50 w-72 transform transition-all duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isOffline ? 'lg:top-12' : 'lg:top-0'}
        `}>
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/20 hidden lg:block">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mr-4 float">
                <span className="text-white font-bold text-xl">💒</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Wedding Command</h1>
                <p className="text-sm text-gray-600">Center</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Items */}
          <div className="p-4 space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item fade-in ${location.pathname === item.path ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={`w-10 h-10 rounded-lg ${item.gradient} flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110`}>
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🎉</div>
              <p className="text-sm text-gray-600 mb-2">Nigerian Wedding</p>
              <p className="text-xs text-gray-500">Operations Hub</p>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
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