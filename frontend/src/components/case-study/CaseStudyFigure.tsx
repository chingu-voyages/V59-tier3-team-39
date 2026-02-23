import React from 'react'

import HeroIllustration from '../../assets/caseStudy/Hero Illustration.png'
import CorrectAnswerIllustration from '../../assets/caseStudy/Correct Answer Illustration.png'
import AIChatIllustration from '../../assets/caseStudy/AI Chat Illustration.png'
import Tack from '../../assets/caseStudy/Tack 2.png'
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
      className="w-full h-full min-h-100 md:min-h-125 lg:min-h-150 rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${CardBoardBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Cards Container */}
      <div
        className="relative h-full w-full flex flex-col justify-between md:justify-evenly lg:justify-between gap-8 md:gap-10 lg:gap-12"
        style={{ zIndex: 2 }}
      >
        {/* Card 1 - Desktop: top-left, Tablet: centered */}
        <div className="w-full flex lg:justify-start md:justify-center">
          <div className="relative w-full md:w-[95%] lg:w-[85%]">
            {/* Red Tack Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={Tack}
                alt="Push pin"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>

            {/* Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{
                border: '6px solid #C49A6C',
              }}
            >
              <div className="p-1">
                <img
                  src={cardsData[0].image}
                  alt={cardsData[0].imageAlt}
                  className="w-full h-48 md:h-56 lg:h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Desktop: center-right, Tablet: centered */}
        <div className="w-full flex lg:justify-end md:justify-center lg:pr-12">
          <div className="relative w-full md:w-[95%] lg:w-[85%]">
            {/* Red Tack Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={Tack}
                alt="Push pin"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>

            {/* Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{
                border: '6px solid #C49A6C',
              }}
            >
              <div className="p-1">
                <img
                  src={cardsData[1].image}
                  alt={cardsData[1].imageAlt}
                  className="w-full h-48 md:h-56 lg:h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Desktop: bottom-left, Tablet: centered */}
        <div className="w-full flex lg:justify-start md:justify-center lg:pl-8">
          <div className="relative w-full md:w-[95%] lg:w-[85%]">
            {/* Red Tack Pin */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={Tack}
                alt="Push pin"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>

            {/* Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{
                border: '6px solid #C49A6C',
              }}
            >
              <div className="p-1">
                <img
                  src={cardsData[2].image}
                  alt={cardsData[2].imageAlt}
                  className="w-full h-48 md:h-56 lg:h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
