import React from 'react'

export const VendorManagement: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Exhibitors</h1>
        <p className="text-gray-600">Track vendor tasks and maintain contact directory</p>
      </div>

      <div className="card">
        <div className="text-center py-16">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">🤝</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Exhibitor Management Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            This section will handle vendor accountability, task verification, and contact management
            to ensure seamless coordination with all service providers.
          </p>

          <button className="btn-primary">
            Add Your First Exhibitor
          </button>
        </div>
      </div>
    </div>
  )
}
