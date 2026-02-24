import React from 'react'

import HeroIllustration from '../../assets/caseStudy/Hero Illustration.png'
import CorrectAnswerIllustration from '../../assets/caseStudy/Correct Answer Illustration.png'
import AIChatIllustration from '../../assets/caseStudy/AI Chat Illustration.png'
import Tack1 from '../../assets/caseStudy/Tack 1.png'
import Tack2 from '../../assets/caseStudy/Tack 2.png'
import Tack3 from '../../assets/caseStudy/Tack 3.png'
import CardBoardBg from '../../assets/caseStudy/Chingu Discord.png'

interface CaseStudyCard {
  id: number
  image: string
  imageAlt: string
  title: string
}

const cardsData: CaseStudyCard[] = [
  {
    id: 1,
    image: HeroIllustration,
    imageAlt: 'Building for Visibility',
    title: 'Building for Visibility',
  },
  {
    id: 2,
    image: CorrectAnswerIllustration,
    imageAlt: 'Designing for Growth',
    title: 'Designing for Growth',
  },
  {
    id: 3,
    image: AIChatIllustration,
    imageAlt: 'Architecting Resilience',
    title: 'Architecting Resilience',
  },
]

export const CaseStudyFigure: React.FC = () => {
  return (
    <figure
      className="rounded-4xl md:px-5 md:py-7 xl:p-7 border-4 border-[#EEEDED]"
      style={{
        backgroundImage: `url(${CardBoardBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Cards Container */}
      <div
        className="relative flex flex-col gap-6.5"
        style={{ zIndex: 2 }}
      >
        {/* Card 1 - Desktop: top-left, Tablet: centered */}
        <div className="w-full flex lg:justify-start md:justify-center">
          <div className="relative">
            {/* Red Tack Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={Tack1}
                alt="Push pin"
                className="w-7 h-10"
              />
            </div>

            {/* Card */}
            <div>
              <div className="">
                <img
                  src={cardsData[0].image}
                  alt={cardsData[0].imageAlt}
                  className="w-80 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Desktop: center-right, Tablet: centered */}
        <div className="w-full flex lg:justify-end md:justify-center">
          <div className="relative">
            {/* Red Tack Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={Tack2}
                alt="Push pin"
                className="w-8 h-9"
              />
            </div>

            {/* Card */}
            <div>
              <div className="">
                <img
                  src={cardsData[1].image}
                  alt={cardsData[1].imageAlt}
                  className="w-80 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Desktop: bottom-left, Tablet: centered */}
        <div className="w-full flex lg:justify-start md:justify-center">
          <div className="relative">
            {/* Red Tack Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={Tack3}
                alt="Push pin"
                className="w-7 h-10"
              />
            </div>

            {/* Card */}
            <div>
              <div className="p-1">
                <img
                  src={cardsData[2].image}
                  alt={cardsData[2].imageAlt}
                  className="w-80 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
