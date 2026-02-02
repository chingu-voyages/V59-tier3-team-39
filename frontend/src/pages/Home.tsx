import Component1 from '../components/main/Component1'
import Component2 from '../components/main/Component2'
import Chatbot from '../components/main/Chatbot'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="h-[10vh] w-full">
      </section>
      <main className="w-full">
        <div className="w-full px-6 py-8 space-y-4">
          <div className="flex justify-center w-full">
            <Component1 />
          </div>
          <div className="flex justify-center w-full">
            <Component2 />
          </div>
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
