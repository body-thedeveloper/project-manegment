import { useState } from 'react'

const VotingSystem = ({ projectId }: { projectId: string }) => {
  const [votes, setVotes] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = async () => {
    if (!hasVoted) {
      // Handle voting logic
      setVotes(prev => prev + 1)
      setHasVoted(true)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Project Voting</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg">Total Votes: {votes}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${(votes / 100) * 100}%` }}
            ></div>
          </div>
        </div>
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`px-4 py-2 rounded ${
            hasVoted 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {hasVoted ? 'Voted' : 'Vote'}
        </button>
      </div>
    </div>
  )
}

export default VotingSystem
