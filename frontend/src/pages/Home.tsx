import Chatbot from '../components/main/Chatbot'
import FeatureSection from '../components/main/FeatureSection'
import TargetedRoles from '../components/main/tageted-roles/TargetedRoles'
import { chinguData, solutionData } from '../data/feature'
import CaseStudy from '../components/main/CaseStudy'
import heroBg from '../assets/hero/heroBg.avif'
import Hero from '../components/main/hero/Hero'
import divider from '../assets/divider.svg'

import { MeetOurTeam } from '../components/main/MeetOurTeam'

const Home = () => {

  return (
    <main className="pt-17">
      <div
        className="bg-cover bg-center border-b-4 border-primary-stroke"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <FeatureSection {...solutionData} />
        </div>
        <img
          src={divider}
          className="hidden md:block absolute -bottom-1 h-4 text-[#F6FAFE]"
        />
      </div>
      <div className="bg-primary-bg-gradient-section">
        <div className="max-w-7xl mx-auto">
          <TargetedRoles />
        </div>
      </div>
      <div className='relative'>
        <div className="max-w-7xl mx-auto">
          <MeetOurTeam />
          <svg className="absolute h-4 w-full scale-y-[-1] -top-1 block" viewBox="0 0 1440 14" fill="none" preserveAspectRatio="none">
            <path d="M718.875 0C1272.38 0 1440 10.4262 1440 10.4262V12H0V10.4262C0 10.4262 165.375 0 718.875 0Z" fill="#eaf3fd"/>
            <path d="M718.875 1.50073C1272.38 1.50073 1440 11.596 1440 11.596V13.5007H0V11.596C0 11.596 165.375 1.50073 718.875 1.50073Z" fill="#eaf3fd"/>
          </svg>
        </div>
      </div>
      <div className='bg-case-bg-gradient border-t-4 border-b-4 border-secondary-stroke-tint'>
        <div className="max-w-7xl mx-auto">
          <CaseStudy />
        </div>
      </div>
      
      <div className='bg-primary-bg-gradient-section'>
        <div className='max-w-7xl mx-auto'>
          <FeatureSection {...chinguData} />
        </div>
      </div>

      {/* <section className="flex justify-center w-full">
          <Chatbot />
        </section>     */}
    </main>
  )
}

export default Home
