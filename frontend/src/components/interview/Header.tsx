import { Link } from 'react-router-dom'
import { RiCloseLargeLine } from 'react-icons/ri'
import Logo from '../../assets/logo.svg'
import { useInterviewContext } from '../../context/InterviewContext'

const Header = () => {
  const { isInterviewStarted, currentQuestionIndex, totalQuestions } =
    useInterviewContext()

  return (
    <header className="bg-secondary-bg-gradient-a rounded-b-4xl border-b-[6px] border-secondary-base/10 inset-x-0 top-0 py-5">
      <nav className="w-13/14 mx-auto flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="max-w-28 md:max-w-max">
            <img src={Logo} alt="Debug Your Interview logo" />
          </Link>

          {isInterviewStarted && totalQuestions > 0 ? (
            <div className="flex justify-center gap-3">
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

          <Link to="/" className="py-1 px-1.5">
            <RiCloseLargeLine size={24} color="#8C6239" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
