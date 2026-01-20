import React from 'react'

export const MediaHub: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Media Hub</h1>
        <p className="text-gray-600">Photo sharing and content curation</p>
      </div>

      <div className="card">
        <div className="text-center py-12">
          <span className="text-6xl mb-4 block">📸</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Media Hub Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            This section will handle photo sharing and "Slay-of-the-Day" curation
          </p>
          <button className="btn-primary">
            Create Photo Gallery
          </button>
        </div>
      </div>
    </div>
  )
}