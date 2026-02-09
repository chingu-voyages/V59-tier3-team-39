
import Chatbot from '../components/main/Chatbot'
import FeatureSection from '../components/main/FeatureSection'
import TargetedRoles from '../components/tageted-roles/TargetedRoles'
import { chinguData, heroData, solutionData } from '../data/feature'
import CaseStudy from '../components/main/CaseStudy'

const Home = () => {
  return (
    <main>
      <section className='bg-[#f8f8f8]'>
        <div className='max-w-7xl mx-auto'>
          <FeatureSection {...heroData} />
        </div>
      </section>
      <div className='max-w-7xl mx-auto'>
        <section>
          <FeatureSection {...solutionData}/>
        </section>
        <section>
          <TargetedRoles/>
        </section>
        <section>
          <FeatureSection {...chinguData} />
        </section>
        <section className="flex justify-center w-full">
          <CaseStudy />
        </section>
        <section className="flex justify-center w-full">
          <Chatbot />
        </section>    
      </div>
    </main>
  )
}

export default Home
