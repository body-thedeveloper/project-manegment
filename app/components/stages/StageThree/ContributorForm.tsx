import { useState } from 'react'

const ContributorForm = () => {
  const [contributionData, setContributionData] = useState({
    type: '',
    description: '',
    availability: '',
    skills: ''
  })

  const contributionTypes = [
    'Financial',
    'Technical',
    'Resources',
    'Marketing',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contribution submission
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Contribute to Project</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Contribution Type</label>
          <select
            className="w-full p-2 border rounded"
            value={contributionData.type}
            onChange={(e) => setContributionData({...contributionData, type: e.target.value})}
          >
            <option value="">Select Type</option>
            {contributionTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {/* Add other form fields */}
        <button 
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit Contribution
        </button>
      </form>
    </div>
  )
}

export default ContributorForm
