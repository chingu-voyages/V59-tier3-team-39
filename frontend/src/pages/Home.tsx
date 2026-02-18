
import Chatbot from '../components/main/Chatbot'
import FeatureSection from '../components/main/FeatureSection'
import TargetedRoles from '../components/tageted-roles/TargetedRoles'
import { chinguData, solutionData } from '../data/feature'
import CaseStudy from '../components/main/CaseStudy'
import heroBg from '../assets/hero/heroBg.png'
import Hero from '../components/main/Hero'

const Home = () => {
  return (
    <main className='pt-17'>
      <div 
        className='bg-cover bg-center border-b-4 border-primary-stroke' 
        style={{backgroundImage: `url(${heroBg})`}}>
        <div className='max-w-7xl mx-auto'>
          <Hero />
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        
          <FeatureSection {...solutionData}/>
      </div>  
      <div className='bg-primary-bg-gradient-section'>
        <div className='max-w-7xl mx-auto'>
          <TargetedRoles/>
        </div>
      </div>
        
        <section className="flex justify-center w-full">
          <CaseStudy />
        </section>
        <FeatureSection {...chinguData} />
        
        
        {/* <section className="flex justify-center w-full">
          <Chatbot />
        </section>     */}
      
    </main>
  )
}

export default Home
