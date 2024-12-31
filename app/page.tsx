import Image from "next/image";
import Link from "next/link";
import Layout from '../app/components/layout/Layout'
import { motion } from 'framer-motion'

export default function Home() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <Layout>
      <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bring Your Ideas to Life
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              A platform where ideas meet collaboration. Create, vote, contribute, and implement projects together.
            </p>
            <Link 
              href="/projects/create"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Start a Project
            </Link>
          </motion.div>
        </section>

        {/* Stages Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stage 1 */}
            <motion.div
              variants={itemVariants}
              className="card card-hover p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Express Ideas</h3>
              <p className="text-gray-600">Share your project idea and gather initial support from the community.</p>
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              variants={itemVariants}
              className="card card-hover p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Voting</h3>
              <p className="text-gray-600">Projects are validated through community voting and feedback.</p>
            </motion.div>

            {/* Stage 3 */}
            <motion.div
              variants={itemVariants}
              className="card card-hover p-6 text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contributors</h3>
              <p className="text-gray-600">Connect with contributors who can help bring the project to life.</p>
            </motion.div>

            {/* Stage 4 */}
            <motion.div
              variants={itemVariants}
              className="card card-hover p-6 text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Execute the project with your team of contributors.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link 
              href="/projects"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your project cards here */}
            <div className="card card-hover">
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
                  Stage 1
                </span>
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">
                  Project description goes here. This is a brief overview of what the project aims to achieve.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">12 supporters</span>
                  </div>
                  <button className="btn btn-primary">Support</button>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-50 rounded-2xl">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of innovators and bring your ideas to life.
            </p>
            <div className="space-x-4">
              <Link 
                href="/projects/create"
                className="btn btn-primary"
              >
                Start a Project
              </Link>
              <Link 
                href="/projects"
                className="btn btn-secondary"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
