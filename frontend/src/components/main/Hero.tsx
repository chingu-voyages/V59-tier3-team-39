import Button from "../button/Button"

const Hero = () => (
  <div className="bg-gray-100 py-12">
    <div className="w-13/14 grid md:grid-cols-2 gap-14 mx-auto">
      <div className="space-y-4">
        <div>
          <h1 className="text-[2.75rem] font-bold leading-13">Your first attempt is <br /> rarely your best effort.</h1>
          <p className="text-2xl">Don't make your mistakes in front of a recruiter!</p>
        </div>
      
      <p className="text-xl">
        <span className="font-bold">Debug Your Interview</span> is a gamified practice space where you can simulate real-world interviews, iterate on your delivery, and improve with every session. Why wait for the high-stakes round to find your bugs? Ship a cleaner, more confident version of yourself to your next interview.
      </p>
      <Button className="flex flex-col items-start leading-4 bg-gray-200 py-4 px-6 rounded-lg">
        <span className="font-semibold text-xl">Debut Your Interview!</span>
        <span>start practicing now for free.</span>
      </Button>
    </div>
      <div className="flex flex-col justify-center bg-gray-200 px-8">
        <p className="text-[1.5rem] font-semibold">[Interactive] Demo Question Loop</p>
        <p className="text-xl">
          Answer a question, check your answer, and see the instant, constructive feedback that powers our platform.
        </p>
      </div>
    </div>
  </div>
)

export default Hero
