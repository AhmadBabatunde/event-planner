import React from 'react'

export const VendorManagement: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendor Management</h1>
        <p className="text-gray-600">Track vendor tasks and maintain contact directory</p>
      </div>

      <div className="card">
        <div className="text-center py-12">
          <span className="text-6xl mb-4 block">🤝</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor Management Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            This section will handle vendor accountability and task verification
          </p>
          <button className="btn-primary">
            Add Your First Vendor
          </button>
        </div>
      </div>
    </div>
  )
}