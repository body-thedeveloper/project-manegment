interface ProjectCardProps {
    project: {
      title: string;
      description: string;
      author: string;
      likes: number;
      createdAt: string;
    }
  }
  
  const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <div className="card hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-500">By {project.author}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Stage 1
          </span>
        </div>
        <p className="mt-4 text-gray-600">{project.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span>{project.likes}</span>
            </button>
          </div>
          <span className="text-sm text-gray-500">{project.createdAt}</span>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  