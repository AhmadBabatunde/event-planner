import React from 'react'

export const MediaHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Communicate</h1>
        <p className="text-gray-600">Photo sharing, announcements, and content curation</p>
      </div>

      <div className="card">
        <div className="text-center py-16">
          <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">📧</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Hub Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            This section will handle photo sharing, announcements, and content curation
            to keep everyone connected and informed about your special day.
          </p>

          <button className="btn-primary">
            Create Communication Channel
          </button>
        </div>
      </div>
    </div>
  )
}
