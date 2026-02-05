import SessionContainer from "./SessionContainer"

const sessions = [
  {
    role: 'Web Developer Interview', 
    date: 'January 30, 2026', 
    score: {earned: 10, total: 10}
  },
  {
    role: 'UX Designer Interview', 
    date: 'January 24, 2026', 
    score: {earned: 9, total: 10}
  },
  {
    role: 'Python Developer Interview', 
    date: 'January 22, 2026', 
    score: {earned: 9, total: 10}
  },
  {
    role: 'Web Developer Interview', 
    date: 'January 21, 2026', 
    score: {earned: 8, total: 10}
  }
]

const SessionGrid = () => {

  return (
    <section className="w-full overflow-hidden">
      <div className="w-13/14 py-12 px-12 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Past Sessions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <SessionContainer key={index} {...session}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SessionGrid