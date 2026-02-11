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
        <div className="flex justify-between items-center relative">
          <Link to="/">
            <img src={Logo} alt="Debug Your Interview logo" />
          </Link>

          {isInterviewStarted && totalQuestions > 0 ? (
            <div className="flex justify-center gap-3">
              {Array.from({ length: totalQuestions }).map((_, index) => {
                const step = index + 1
                const isActive = step === currentQuestionIndex + 1
                const isCompleted = step < currentQuestionIndex + 1

                return (
                  <div
                    key={step}
                    className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
            ${
              isActive
                ? 'bg-secondary-shade text-white scale-110'
                : isCompleted
                  ? 'bg-secondary-shade/40 text-white'
                  : 'bg-white/20 text-secondary-shade'
            }
          `}
                  >
                    {step}
                  </div>
                )
              })}
            </div>
          ) : (
            <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-secondary-shade">
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
