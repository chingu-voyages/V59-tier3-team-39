export const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Like what you see?
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We'd love to share our journey with you. Check out the full{' '}
          <a
            href="#"
            className="text-gray-900 underline decoration-2 underline-offset-4 hover:decoration-gray-400 transition-colors duration-200"
          >
            case study
          </a>{' '}
          for a look behind the curtain at the planning, tradeoffs, and
          iteration that brought DebugYourInterview to life.
        </p>
      </div>
    </header>
  )
}
