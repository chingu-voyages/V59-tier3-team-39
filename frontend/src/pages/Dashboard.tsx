import NewInterview from "../components/dashboard/NewInterview"
import SessionGrid from "../components/dashboard/SessionGrid"

const Dashboard = () => {
  return (
    <main className="w-full">
      <div className="mt-25">
        <NewInterview />
        <SessionGrid />
      </div>
    </main>
    
  )
}

export default Dashboard
