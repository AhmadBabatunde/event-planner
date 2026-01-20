import React from 'react'

export const Dashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total Sales',
      value: '$58,760.41',
      icon: '💰',
      bgColor: '#FFF3E0',
      iconColor: '#FF9F43'
    },
    {
      label: 'Registrations',
      value: '11480',
      icon: '📋',
      bgColor: '#E8F5E9',
      iconColor: '#4CAF50'
    },
    {
      label: 'Days to Event',
      value: '15',
      icon: '📅',
      bgColor: '#FCE4EC',
      iconColor: '#FF6B9D'
    }
  ]

  const quickActions = [
    { label: 'Exhibitors', icon: '🏢', color: '#4E8FE8' },
    { label: 'Sponsors', icon: '💼', color: '#4E8FE8' },
    { label: 'Agenda', icon: '📋', color: '#4E8FE8' },
    { label: 'Tickets', icon: '🎫', color: '#4E8FE8' },
    { label: 'Promote', icon: '📢', color: '#4E8FE8' },
    { label: 'Event Library', icon: '📚', color: '#4E8FE8' },
    { label: 'Custom Domain', icon: '🌐', color: '#4E8FE8' },
    { label: 'Reports', icon: '📊', color: '#4E8FE8' }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center justify-between">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: stat.bgColor }}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="card">
            <div className="mb-4">
              <div className="flex items-center mb-3">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-3"
                  style={{ backgroundColor: '#E3F2FD' }}
                >
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Quick Actions</h3>
                  <p className="text-xs text-gray-500">Streamline your event experience with shortcuts to our features</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <button key={action.label} className="quick-action-btn text-left p-3">
                  <div
                    className="quick-action-icon"
                    style={{ backgroundColor: `${action.color}15`, color: action.color }}
                  >
                    <span>{action.icon}</span>
                  </div>
                  <div className="text-xs font-medium text-gray-700">{action.label}</div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Registration Trend</h3>
              <button className="text-sm text-blue-600">View more</button>
            </div>

            <div className="relative h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-center">
                <div className="text-6xl mb-3">📈</div>
                <p className="text-sm text-gray-600">Registration chart</p>
                <p className="text-xs text-gray-500">Analytics coming soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Registrations</h3>
            </div>

            <div className="flex items-center justify-center h-48 mb-4">
              <div className="relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    stroke="#E5E7EB"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    stroke="#5B6CE0"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(82 / 100) * 377} 377`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    stroke="#4CAF50"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(18 / 100) * 377} 377`}
                    strokeDashoffset={`-${(82 / 100) * 377}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">82%</div>
                    <div className="text-xs text-gray-500">Capacity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-700">Sold</span>
                </div>
                <span className="text-sm font-medium text-gray-900">11,480 (82%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-700">Available</span>
                </div>
                <span className="text-sm font-medium text-gray-900">2,520 (18%)</span>
              </div>
            </div>

            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700">
              Manage Registrations
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Attendance</h3>
          <div className="flex items-center justify-center h-48">
            <div className="relative">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="50"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="50"
                  stroke="#4CAF50"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(60 / 100) * 314} 314`}
                  strokeLinecap="round"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="50"
                  stroke="#FF9F43"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(40 / 100) * 314} 314`}
                  strokeDashoffset={`-${(60 / 100) * 314}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold">960</div>
                  <div className="text-xs text-gray-500">Total</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Check-in: 960</span>
              <span className="text-green-600">60%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Yet to Check-in</span>
              <span className="text-orange-600">40%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Event website</h3>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🌐</div>
              <p className="text-sm text-white">Website Preview</p>
              <p className="text-xs text-gray-400">View your event site</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Event numbers</h3>
          <div className="space-y-4 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📊</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Sessions</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">👤</span>
                </div>
                <div className="text-xl font-bold text-gray-900">12</div>
                <div className="text-xs text-gray-600">Speakers</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">👥</span>
                </div>
                <div className="text-xl font-bold text-gray-900">4</div>
                <div className="text-xs text-gray-600">Event Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
