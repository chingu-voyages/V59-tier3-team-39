import React, { useState } from 'react'

import HeroIllustration from '../../assets/caseStudy/Hero Illustration.png'
import CorrectAnswerIllustration from '../../assets/caseStudy/Correct Answer Illustration.png'
import AIChatIllustration from '../../assets/caseStudy/AI Chat Illustration.png'
import Tack from '../../assets/caseStudy/Tack 2.png'
import Button from '../button/Button'

interface CarouselCard {
  id: number
  title: string
  question: string
  description: string
  image: string
  imageAlt: string
}

const cardsData: CarouselCard[] = [
  {
    id: 1,
    title: 'Building for Visibility',
    question:
      "How do you prove an app's worth before a user scrolls, clicks, or signs up?",
    description:
      'We focused on a "zero-barrier" user experience, surfacing our core value proposition above the fold with an interactive hero demo.',
    image: HeroIllustration,
    imageAlt: 'Building for Visibility illustration',
  },
  {
    id: 2,
    title: 'Designing for Growth',
    question:
      'How do you foster improvement without triggering performance anxiety?',
    description:
      'Job interviews are inherently high-stakes, so we designed our experience to feel like a friendly training space with a capable mentor.',
    image: CorrectAnswerIllustration,
    imageAlt: 'Designing for Growth illustration',
  },
  {
    id: 3,
    title: 'Architecting Resilience',
    question:
      'How do you maintain a seamless AI experience when connectivity is unreliable and authentication is optional?',
    description:
      'Our team prioritized a "robust-first" technical architecture, structuring and pre-processing default data to ensure your practice sessions are never interrupted.',
    image: AIChatIllustration,
    imageAlt: 'Architecting Resilience illustration',
  },
]

export const CaseStudyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full px-4 py-8">
      {/* Carousel Container */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Cards Container with overflow hidden */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cardsData.map((card) => (
              <div key={card.id} className="w-full shrink-0 px-2">
                {/* Card with Cork Board Style - Only Image and Tack */}
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
                  {/* Cork Board Border */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      border: '8px solid #C49A6C',
                      borderRadius: '24px',
                    }}
                  />

                  {/* Red Tack Pin */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <img src={Tack} alt="Push pin" className="w-8 h-8" />
                  </div>

                  {/* Card Content - Only Image */}
                  <div className="p-6 pt-8">
                    {/* Card Image/Illustration */}
                    <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Below Card */}
                <div className="px-2">
                  {/* Card Title */}
                  <h3 className="text-2xl font-bold text-secondary-base mb-3">
                    {card.title}
                  </h3>

                  {/* Card Question */}
                  <h4 className="text-base font-semibold text-gray-800 mb-3 leading-relaxed">
                    {card.question}
                  </h4>

                  {/* Card Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-fit mt-5 mx-auto">
              <Button
                label="Read the full case study"
                subLabel="User journeys, wireflows, prototypes, and more."
                to="/casestudy"
              />
            </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-secondary-base scale-110'
                  : 'bg-secondary-tint hover:bg-secondary-shade'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
