import Component1 from '../components/main/Component1'
import Solution from '../components/main/Solution'
import Chatbot from '../components/main/Chatbot'
import TargetedRoles from '../components/tageted-roles/TargetedRoles'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
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
      <div className="w-full h-[10vh]">
      </div>
    </div>
  )
}

export default Home
