import React from 'react'

export const Dashboard: React.FC = () => {
  const stats = [
    { 
      label: 'Total Guests', 
      value: '0', 
      icon: '👥', 
      gradient: 'gradient-blue',
      description: 'Invited guests'
    },
    { 
      label: 'Checked In', 
      value: '0', 
      icon: '✅', 
      gradient: 'gradient-green',
      description: 'Present at venue'
    },
    { 
      label: 'Active Vendors', 
      value: '0', 
      icon: '🤝', 
      gradient: 'gradient-orange',
      description: 'Service providers'
    },
    { 
      label: 'Photos Shared', 
      value: '0', 
      icon: '📸', 
      gradient: 'gradient-pink',
      description: 'Guest uploads'
    }
  ]

  const quickActions = [
    { 
      label: 'Add Guests', 
      icon: '👥', 
      gradient: 'gradient-blue',
      description: 'Import guest list'
    },
    { 
      label: 'Scan QR Code', 
      icon: '📱', 
      gradient: 'gradient-purple',
      description: 'Check-in guests'
    },
    { 
      label: 'Update Timeline', 
      icon: '⚡', 
      gradient: 'gradient-orange',
      description: 'Manage schedule'
    },
    { 
      label: 'View Gallery', 
      icon: '📸', 
      gradient: 'gradient-pink',
      description: 'Browse photos'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section - More Compact */}
      <div className="mb-8 fade-in">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mr-4">
            <span className="text-2xl">💒</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
            <p className="text-gray-600">Your wedding operations command center</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className="stat-card scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${stat.gradient} flex items-center justify-center`}>
                <span className="text-lg">{stat.icon}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Quick Actions */}
        <div className="lg:col-span-2">
          <div className="card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center mr-3">
                <span className="text-white text-sm">⚡</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button 
                  key={action.label}
                  className="group relative overflow-hidden bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg ${action.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg">{action.icon}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">{action.label}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="text-3xl mb-3 icon-bounce">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Smart Check-ins</h3>
              <p className="text-xs text-gray-600">QR code scanning prevents gate crashers</p>
            </div>
            
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="text-3xl mb-3 icon-bounce" style={{ animationDelay: '0.2s' }}>⚡</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Real-time Updates</h3>
              <p className="text-xs text-gray-600">Live timeline adjustments</p>
            </div>
            
            <div className="card-gradient rounded-xl p-4 text-center">
              <div className="text-3xl mb-3 icon-bounce" style={{ animationDelay: '0.4s' }}>📱</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Offline Ready</h3>
              <p className="text-xs text-gray-600">Works without internet</p>
            </div>
          </div>
        </div>

        {/* Right Column - Recent Activity */}
        <div className="lg:col-span-1">
          <div className="card fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center mr-3">
                <span className="text-white text-sm">📋</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-4 pulse">
                <span className="text-2xl opacity-50">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No recent activity</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Activity will appear here as you manage your event.
              </p>
              <button className="btn-primary text-sm px-4 py-2">
                Get Started
              </button>
            </div>
          </div>

          {/* Event Status Card */}
          <div className="card mt-6 fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center mr-3">
                <span className="text-white text-sm">🎉</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Event Status</h2>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Planning Phase</span>
                </div>
                <span className="text-xs text-gray-500">Current</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg opacity-50">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Day of Event</span>
                </div>
                <span className="text-xs text-gray-500">Pending</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg opacity-50">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Completed</span>
                </div>
                <span className="text-xs text-gray-500">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}