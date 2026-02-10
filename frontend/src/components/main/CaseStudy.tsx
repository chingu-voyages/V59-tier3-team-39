import { CaseStudyFigure } from '../case-study/CaseStudyFigure'
import { CaseStudyLink } from '../case-study/CaseStudyLink'
import { Header } from '../case-study/Header'
import { ContentBody } from '../case-study/ContentBody'

const CaseStudy = () => {
  return (
    <main className="min-h-screen bg-white pt-25">
      <Header />

      <section className="px-6 py-8 md:py-12 lg:py-16">
        <div className="w-13/14 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full order-1 lg:order-1">
              <CaseStudyFigure />
            </div>

            <div className="w-full order-2 lg:order-2 flex flex-col justify-center">
              <ContentBody />
              <CaseStudyLink href="#" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudy
