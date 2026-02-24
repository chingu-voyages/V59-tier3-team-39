import underline from '../../assets/caseStudy/underlinecase.png'

export const Header: React.FC = () => {
  return (
    <header className="pt-6 md:pt-8 px-6">
      <div className="max-w-4xl mx-auto space-y-2 xl:space-y-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl lg:text-[1.75rem] xl:text-[2rem] font-bold leading-[1.15]">
            Like what you see?
          </h2>
          <img
            src={underline}
            alt=""
            className="max-w-55 lg:max-w-95 xl:w-73 -ml-4"
          />
        </div>
        <p className="text-sm lg:text-base leading-[1.35] max-w-160 mx-auto">
          We'd love to share our journey with you. Check out the full{' '}
          <a
            href="#"
            className="text-primary-tint hover:text-primary-tint/80 font-bold transition-colors duration-200"
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
