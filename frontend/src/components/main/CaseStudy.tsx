import { CaseStudyFigure } from '../case-study/CaseStudyFigure'
import { Header } from '../case-study/Header'
import { ContentBody } from '../case-study/ContentBody'
import { CaseStudyCarousel } from '../case-study/Carousel'
import Button from '../button/Button'
import caseBg from '../../assets/caseStudy/casebg.png'

const CaseStudy = () => {
  return (
    <section className='relative'>
      <div 
        style={{backgroundImage: `url(${caseBg})`}}
        className='absolute top-7 md:top-14 xl:top-20 -right-50 md:-right-38 xl:-right-35 w-72 h-91 bg-contain bg-no-repeat z-0'
      />
      <Header />
      <div className="md:p-8 xl:px-12 xl:py-11">
        <div className="relative">
          <div
            className="
              absolute inset-y-0 left-[49.5%] md:-translate-x-[82%] xl:-translate-x-[90.5%] md:-top-40 xl:-top-36 h-auto md:w-44.5 xl:w-102.5 bg-contain bg-center bg-no-repeat z-10
              md:bg-[url('/images/linesmd.png')] xl:bg-[url('/images/lines.png')] 
            "
          />
          {/* Desktop and Tablet View */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 md:gap-4 xl:gap-6">
            <div className="w-full order-1 lg:order-1">
              <CaseStudyFigure />
            </div>
            <div className="order-2 lg:order-2 flex flex-col">
              <ContentBody />
              <div className="md:mt-6 xl:mt-8 md:pl-6 xl:pl-4">
                <Button
                  label="Read the full case study"
                  subLabel="User journeys, wireflows, prototypes, and more."
                  to="/casestudy"
                />
              </div>
            </div>
          </div>
          {/* Mobile View */}
          
          <div className="sm:hidden">
            
            <CaseStudyCarousel />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
