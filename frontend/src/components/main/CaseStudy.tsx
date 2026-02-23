import { CaseStudyFigure } from '../case-study/CaseStudyFigure'
import { CaseStudyLink } from '../case-study/CaseStudyLink'
import { Header } from '../case-study/Header'
import { ContentBody } from '../case-study/ContentBody'
import { CaseStudyCarousel } from '../case-study/Carousel'

const CaseStudy = () => {
  return (
    <main className="min-h-screen bg-white pt-1">
      <Header />

      <section className="px-6 pb-8 md:pb-12 lg:pb-16">
        <div className="w-13/14 mx-auto">
          {/* Desktop and Tablet View */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full order-1 lg:order-1">
              <CaseStudyFigure />
            </div>

            <div className="order-2 lg:order-2 flex flex-col justify-center">
              <ContentBody />
              <div className="w-fit mt-5">
                <CaseStudyLink />
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className="sm:hidden">
            <CaseStudyCarousel />
            <div className="w-fit mt-5 mx-auto">
              <CaseStudyLink />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudy
