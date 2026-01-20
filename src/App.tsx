import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Dashboard } from '@/components/Dashboard'
import { GuestManagement } from '@/components/GuestManagement'
import { OperationsBoard } from '@/components/OperationsBoard'
import { VendorManagement } from '@/components/VendorManagement'
import { MediaHub } from '@/components/MediaHub'
import { LoadingScreen } from '@/components/LoadingScreen'
import { useDatabase } from '@/hooks/useDatabase'

function App() {
  const { isInitialized, isLoading, error } = useDatabase()

  if (isLoading) {
    return <LoadingScreen message="Initializing Wedding Command Center..." />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Database Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🔧</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Setup Required</h1>
          <p className="text-gray-600">Please refresh the page to initialize the application.</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/guests" element={<GuestManagement />} />
          <Route path="/operations" element={<OperationsBoard />} />
          <Route path="/vendors" element={<VendorManagement />} />
          <Route path="/media" element={<MediaHub />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App