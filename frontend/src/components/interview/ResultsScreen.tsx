interface ResultsScreenProps {
  correctAnswersCount: number
  totalQuestions: number
  onRestart: () => void
}

const ResultsScreen = ({
  correctAnswersCount,
  totalQuestions,
  onRestart,
}: ResultsScreenProps) => {
  return (
    <div className="flex flex-col grow">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg mx-4">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-black mb-4">
              Interview Complete
            </h1>
            <div className="text-6xl font-bold text-black mb-4">
              {correctAnswersCount} / {totalQuestions}
            </div>
            <p className="text-lg text-black mb-8">
              You answered {correctAnswersCount} out of {totalQuestions}{' '}
              questions correctly.
            </p>
            <button
              onClick={onRestart}
              className="px-4 py-2 mx-auto bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 transition-all flex items-center"
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
