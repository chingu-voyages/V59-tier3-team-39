import { useInterviewContext } from '../../context/InterviewContext'

const QuestionScreen = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    selectAnswer,
    goBack,
    goContinue,
  } = useInterviewContext()

  if (!currentQuestion) return null

  const questionNumber = currentQuestionIndex + 1

  return (
    <div className="flex flex-col grow items-center h-[calc(100vh-110px)] pt-12">
      <div className="mb-8 w-lg">
        <h2 className="text-sm font-medium mb-6">
          Question {questionNumber} of {totalQuestions}
        </h2>
        <h1 className="text-2xl font-bold mb-2 text-secondary-shade">
          {currentQuestion.text}
        </h1>
        <p>Select the best answer below.</p>
      </div>

      <div className="w-lg space-y-6 mb-auto">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option.id
          const isCorrect = option.id === currentQuestion.correctOptionId
          const isIncorrect = isSelected && !isCorrect

          return (
            <button
              key={option.id}
              onClick={() => selectAnswer(option.id)}
              className={`cursor-pointer w-full flex items-center justify-between gap-4 px-6 py-4 rounded-lg border transition-all
                ${
                  isIncorrect
                    ? 'border-red-500 border-2'
                    : isSelected && isCorrect
                      ? 'border-[#00c510] border-2'
                      : isSelected
                        ? 'border-2'
                        : 'hover:border-gray-400'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border border-[#D7D7D7] bg-[#ebebeb]" />
                <span className="text-lg">{option.text}</span>
              </div>
              <span className="font-medium border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                {option.id}
              </span>
            </button>
          )
        })}
      </div>

      <div className="w-full bg-secondary-bg-gradient-a border-t-[3px] border-secondary-base/10 flex items-center justify-between px-8 h-24">
        <button
          onClick={goBack}
          className="cursor-pointer px-4 py-2 bg-secondary-tint border-[3px] border-white/20 rounded-lg transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
        >
          <p className="text-white font-medium mx-auto">Back</p>
          <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
            B
          </span>
        </button>

        {selectedAnswer === currentQuestion.correctOptionId && (
          <span className="text-lg">Correct! 🎉</span>
        )}

        <button
          onClick={goContinue}
          disabled={!selectedAnswer}
          className="cursor-pointer px-4 py-2 bg-secondary-tint border-[3px] border-white/20 rounded-lg disabled:opacity-40 transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
        >
          <p className="text-white font-medium mx-auto">
            {questionNumber >= totalQuestions ? 'Finish' : 'Continue'}
          </p>
          <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
            ⏎
          </span>
        </button>
      </div>
    </div>
  )
}

export default QuestionScreen
