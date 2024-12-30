interface ProgressBarProps {
  progress: number;
  total: number;
  label?: string;
}

const ProgressBar = ({ progress, total, label }: ProgressBarProps) => {
  const percentage = Math.min((progress / total) * 100, 100);
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-500">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
