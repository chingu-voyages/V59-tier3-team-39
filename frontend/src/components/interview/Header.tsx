import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { useInterviewContext } from '../../context/InterviewContext'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const { isInterviewStarted, currentQuestionIndex, totalQuestions } =
    useInterviewContext()

  return (
    <header className="bg-secondary-bg-gradient-a rounded-b-4xl border-b-[6px] border-secondary-base/10 inset-x-0 top-0 pt-3 pb-2.5">
      <nav className="max-w-7xl mx-auto flex flex-col gap-4 px-4.5 md:px-10.5 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="max-w-max">
            <img src={Logo} alt="Debug Your Interview logo" className='h-12 md:h-15' />
          </Link>

          {isInterviewStarted && totalQuestions > 0 ? (
            <div className="flex justify-center gap-2.25">
              {Array.from({ length: totalQuestions }).map((_, index) => {
                const step = index + 1
                const isActive = step === currentQuestionIndex + 1
                const isInterviewFinished =
                  currentQuestionIndex === totalQuestions
                const isCompleted = isInterviewFinished
                  ? true
                  : step <= currentQuestionIndex

                return (
                  <div
                    key={step}
                    className={`
            w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center bg-[F8F8F8] border border-[#D7D7D7] justify-center
            ${
              isActive
                ? 'border-secondary-base scale-110'
                : isCompleted
                  ? 'bg-secondary-base border-secondary-base text-white'
                  : ''
            }
          `}
                  >
                    {isCompleted ? <span>✓</span> : step}
                  </div>
                )
              })}
            </div>
          ) : (
            <span className="md:text-lg font-semibold text-secondary-shade">
              Select a role
            </span>
          )}

          <Link to="/">
            <IoClose color="#8C6239" size={26} className='md:ml-39' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
