import Card from '../../../components/common/Card'
import Input from '../../../components/common/Input'
import ProgressBar from '../../../components/common/ProgressBar'
import AnimatedCard from '../../../components/common/AnimatedCard'
import Layout from '../../../components/layout/Layout'

export default function ProjectPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedCard>
            <Card title="Project Details">
              <Input
                label="Project Title"
                placeholder="Enter project title"
              />
              <Input
                label="Description"
                placeholder="Enter project description"
              />
              <ProgressBar
                progress={50}
                total={100}
                label="Project Progress"
              />
            </Card>
          </AnimatedCard>
          
          <AnimatedCard>
            <Card title="Active Projects">
              {/* Add your project list here */}
              <div className="space-y-4">
                <p>No active projects yet</p>
              </div>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </Layout>
  )
}
