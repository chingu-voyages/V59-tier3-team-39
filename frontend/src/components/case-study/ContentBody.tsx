interface FeatureSection {
  title: string
  body: {
    question: string
    description1: string
  }
  description2: string
  description3?: string
}

const features: FeatureSection[] = [
  {
    title: 'Building for Visibility',
    body: {
      question: "How do you prove an app’s worth before a user scrolls, clicks, or signs up?",
      description1: 'We focused on a "zero-barrier" user experience, surfacing our core value proposition above the fold with an interactive hero demo.'
    },
    description2:
      'By removing the friction of mandatory authentication, we provide immediate utility with a guest dashboard and device-based state.',
    description3:
      'For those who want continuity, OAuth integration enables one-click profile creation and cross-device syncing.',
  },
  {
    title: 'Designing for Growth',
    body: {
      question: 'How do you foster improvement without triggering performance anxiety?',
      description1: 'Job interviews are inherently high-stakes, so we designed our experience to feel like a friendly training space with a capable mentor.'
    },
    description2:
      'To build confidence, we offer constructive explanations for every answer, with AI-powered clarifications and insights.',
    description3:
      'Gamified elements like XP and streaks help keep motivation high, while targeted recommendations provide a clear roadmap for deeper practice.',
  },
  {
    title: 'Architecting Resilience',
    body: {
      question: 'How do you maintain a seamless AI experience when connectivity is unreliable and authentication is optional?',
      description1: ' Our team prioritized a "robust-first" technical architecture, structuring and pre-processing default data to ensure your practice sessions are never interrupted.'
    },
    description2:
      'We leveraged browser local storage so visitors can experience the full functionality even before creating an account.',
  },
]

export const ContentBody: React.FC = () => {
  return (
    <div className="md:space-y-6 xl:space-y-8.5 pl-6 xl:pl-4">
      {features.map((feature, index) => (
        <article key={index}>
          {/* Dot indicator */}
          <div className="space-y-1">
            <h2 className="md:text-lg lg:text-2xl font-bold text-secondary-base leading-[1.15]">
              {feature.title}
            </h2>
            <div className="md:space-y-2 xl:space-y-3 md:text-sm lg:text-base leading-[1.35]">
              <p>
                <span className="text-secondary-shade font-bold">{feature.body.question}</span>
                {" "}{feature.body.description1}
              </p>
              <p>
                {feature.description2}
              </p>
              <p>
                {feature.description3 && feature.description3}
              </p>
            </div>
          </div>
          
        </article>
      ))}
    </div>
  )
}
