
import Solution from '../components/main/Solution'
import Chatbot from '../components/main/Chatbot'
import TargetedRoles from '../components/tageted-roles/TargetedRoles'
import Hero from '../components/main/Hero'

const Home = () => {
  return (
    <main className="w-full">
      <div className="mt-25">
        <section className="flex justify-center w-full">
          <Hero />
        </section>
        <section className="flex justify-center w-full">
          <Solution />
        </section>
        <section className="flex justify-center w-full">
          <TargetedRoles/>
        </section>
        <div className="flex justify-center w-full">
          <Chatbot />
        </div>
      </div>
    </main>
  )
}

export default Home
