import { useState } from 'react'

const ProjectProposal = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    goals: '',
    requiredResources: '',
    timeline: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Submit Project Proposal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Project Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={projectData.title}
            onChange={(e) => setProjectData({...projectData, title: e.target.value})}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={projectData.description}
            onChange={(e) => setProjectData({...projectData, description: e.target.value})}
          />
        </div>
        {/* Add other form fields */}
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Proposal
        </button>
      </form>
    </div>
  )
}

export default ProjectProposal
