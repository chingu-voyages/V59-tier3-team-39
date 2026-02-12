import { useInterviewContext } from '../../context/InterviewContext'

const ResultsScreen = () => {
  const { correctAnswersCount, totalQuestions, restart } = useInterviewContext()

  return (
    <div className="flex flex-col grow">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg mx-4">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-4 text-secondary-shade">
              Interview Complete
            </h1>

            <div className="text-6xl font-bold mb-4 text-secondary-shade">
              {correctAnswersCount} / {totalQuestions}
            </div>

            <p className="text-lg mb-8">
              You answered {correctAnswersCount} out of {totalQuestions}{' '}
              questions correctly.
            </p>

            <button
              onClick={restart}
              className="px-4 py-2 mx-auto bg-white border border-[#d7d7d7] font-medium rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
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
