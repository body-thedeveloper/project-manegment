import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        {showHeader && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Header />
          </motion.div>
        )}

        {/* Main Content */}
        <motion.main 
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Breadcrumbs can be added here */}
          
          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {children}
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
            aria-label="Back to top"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </motion.main>

        {/* Footer */}
        {showFooter && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Footer />
          </motion.div>
        )}
      </div>

      {/* Toast Notifications Container */}
      <div className="fixed top-4 right-4 z-50">
        {/* Add your toast notifications here */}
      </div>
    </div>
  )
}

export default Layout
