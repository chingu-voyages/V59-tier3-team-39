interface FeatureSection {
  title: string
  question: string
  description: string
}

const features: FeatureSection[] = [
  {
    title: 'Designing for Growth',
    question:
      'How do you foster improvement without triggering performance anxiety?',
    description:
      'Job interviews are inherently high-stakes, so we designed our experience to feel like a friendly training space with a capable mentor. To build confidence, we offer constructive explanations for every answer, with AI-powered clarifications and insights. Gamified elements like XP and streaks help keep motivation high, while targeted recommendations provide a clear roadmap for deeper practice.',
  },
  {
    title: 'Building for Visibility',
    question:
      "How do you prove an app's worth before a user scrolls, clicks, or signs up?",
    description:
      'We focused on a "zero-barrier" user experience, surfacing our core value proposition above the fold with an interactive hero demo. By removing the friction of mandatory authentication, we provide immediate utility with a guest dashboard and device-based state. For those who want continuity, OAuth integration enables one-click profile creation and cross-device syncing.',
  },
  {
    title: 'Architecting Resilience',
    question:
      'How do you maintain a seamless AI experience when connectivity is unreliable and authentication is optional?',
    description:
      'Our team prioritized a "robust-first" technical architecture, structuring and pre-processing default data to ensure your practice sessions are never interrupted, and leveraging browser local storage so visitors can experience the full functionality even before creating an account.',
  },
]

export const ContentBody: React.FC = () => {
  return (
    <div className="w-full space-y-8 md:space-y-10 lg:space-y-12">
      {features.map((feature, index) => (
        <article key={index}>
          {/* Dot indicator */}
          <div className="flex items-start gap-4 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              {feature.title}
            </h2>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 leading-relaxed">
              {feature.question}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
