import { useInterviewContext } from '../../context/InterviewContext'

const ResultsScreen = () => {
  const { correctAnswersCount, totalQuestions, restart } = useInterviewContext()

  return (
    <div className="flex flex-col h-[calc(100vh-88px)] md:h-[calc(100vh-110px)]">
      <div className="flex-1 flex items-center justify-center px-2 md:px-0">
        <div className="w-full max-w-lg">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-bold text-secondary-shade">
              Interview Complete
            </h1>

            <div className="text-6xl font-bold text-secondary-shade">
              {correctAnswersCount} / {totalQuestions}
            </div>

            <p className="text-lg text-center">
              You answered {correctAnswersCount} out of {totalQuestions}{' '}
              questions correctly.
            </p>

            <button
              onClick={restart}
              className="px-4 py-2 mt-6 mx-auto bg-white border border-[#d7d7d7] font-medium rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
            >
              Start New Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsScreen
