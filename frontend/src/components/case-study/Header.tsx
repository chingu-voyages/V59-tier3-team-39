import underlinesm from '../../assets/Underlinesm.png'

export const Header: React.FC = () => {
  return (
    <header className="w-full px-6 pt-12 md:pt-16 pb-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl lg:text-[1.75rem] xl:text-[2rem] font-bold">
            Like what you see?
          </h1>
          <img
            src={underlinesm}
            alt=""
            className="max-w-75.5 md:max-w-87.25 lg:max-w-99 xl:max-w-none -ml-4"
          />
        </div>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
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
