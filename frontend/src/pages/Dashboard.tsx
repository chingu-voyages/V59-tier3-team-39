import NewInterview from "../components/dashboard/NewInterview"
import SessionGrid from "../components/dashboard/SessionGrid"

const Dashboard = () => {
  return (
    <main className="min-h-screen w-full">
      <div className="pt-25">
        <NewInterview />
        <SessionGrid />
      </div>
    </main>
    
  )
}

export default Dashboard
