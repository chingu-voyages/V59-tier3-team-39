
import Chatbot from '../components/main/Chatbot'
import FeatureSection from '../components/main/FeatureSection'
import TargetedRoles from '../components/tageted-roles/TargetedRoles'
import { chinguData, heroData, solutionData } from '../data/feature'
import CaseStudy from '../components/main/CaseStudy'
import heroBG from '../assets/hero/heroBG.png'
import Hero from '../components/main/Hero'

const Home = () => {
  return (
    <main className='pt-17'>
      <div 
        className='bg-cover bg-center border-b-4 border-primary-stroke' 
        style={{backgroundImage: `url(${heroBG})`}}>
        <div className='max-w-7xl mx-auto'>
          <Hero />
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        
          <FeatureSection {...solutionData}/>
        
        <section>
          <TargetedRoles/>
        </section>
        
        <FeatureSection {...chinguData} />
        
        <section className="flex justify-center w-full">
          <CaseStudy />
        </section>
        {/* <section className="flex justify-center w-full">
          <Chatbot />
        </section>     */}
      </div>
    </main>
  )
}

export default Home
