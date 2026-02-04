import Component1 from '../components/main/Component1'
import Component2 from '../components/main/Component2'
import Chatbot from '../components/main/Chatbot'
import TargetedRoles from '../components/tageted-roles/TargetedRoles'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <main className="w-full">
        <div className="mt-25">
          <section className="flex justify-center w-full">
            <Component1 />
          </section>
          <section className="flex justify-center w-full">
            <Component2 />
          </section>
          <section className="flex justify-center w-full">
            <TargetedRoles/>
          </section>
          <section className="flex justify-center w-full">
            <Chatbot />
          </section>
        </div>
      </main>
      <div className="w-full h-[10vh]">
      </div>
    </div>
  )
}

export default Home
