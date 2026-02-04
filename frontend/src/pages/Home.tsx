import Component1 from '../components/main/Component1'
import Solution from '../components/main/Solution'
import Chatbot from '../components/main/Chatbot'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="h-[10vh] w-full">
      </section>
      <main className="w-full">
        <div className="mt-25">
          <div className="flex justify-center w-full">
            <Component1 />
          </div>
          <div className="flex justify-center w-full">
            <Solution />
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
