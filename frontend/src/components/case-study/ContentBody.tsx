interface FeatureSection {
  title: string
  question: string
  description1: string
  description2: string
}

const features: FeatureSection[] = [
  {
    title: 'Designing for Growth',
    question:
      'How do you prove an app’s worth before a user scrolls, clicks, or signs up? We focused on a "zero-barrier" user experience, surfacing our core value proposition above the fold with an interactive hero demo.',
    description1:
      'By removing the friction of mandatory authentication, we provide immediate utility with a guest dashboard and device-based state.',
    description2:
      'For those who want continuity, OAuth integration enables one-click profile creation and cross-device syncing.',
  },
  {
    title: 'Building for Visibility',
    question:
      'How do you foster improvement without triggering performance anxiety? Job interviews are inherently high-stakes, so we designed our experience to feel like a friendly training space with a capable mentor.',
    description1:
      'To build confidence, we offer constructive explanations for every answer, with AI-powered clarifications and insights.',
    description2:
      'Gamified elements like XP and streaks help keep motivation high, while targeted recommendations provide a clear roadmap for deeper practice.',
  },
  {
    title: 'Architecting Resilience',
    question:
      'How do you maintain a seamless AI experience when connectivity is unreliable and authentication is optional? Our team prioritized a "robust-first" technical architecture, structuring and pre-processing default data to ensure your practice sessions are never interrupted.',
    description1:
      'We leveraged browser local storage so visitors can experience the full functionality even before creating an account.',
    description2: '',
  },
]

export const ContentBody: React.FC = () => {
  return (
    <div className="w-full space-y-8 md:space-y-10 lg:space-y-12">
      {features.map((feature, index) => (
        <article key={index}>
          {/* Dot indicator */}
          <div className="flex items-start gap-4 mb-3">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-base tracking-tight">
              {feature.title}
            </h2>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm md:text-base text-gray-600 leading-relaxed">
              {feature.question}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {feature.description1}
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {feature.description2}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
