interface VoteButtonProps {
    voted: boolean;
    count: number;
    onVote: () => void;
  }
  
  const VoteButton = ({ voted, count, onVote }: VoteButtonProps) => {
    return (
      <div className="flex flex-col items-center">
        <button
          onClick={onVote}
          disabled={voted}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${voted 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-50 text-primary hover:bg-blue-100'}
          `}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <span className="mt-1 text-sm font-medium text-gray-700">{count}</span>
      </div>
    )
  }
  
  export default VoteButton
  