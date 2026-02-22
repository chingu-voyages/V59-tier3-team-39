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
    <div className="flex flex-col items-center justify-between h-[calc(100vh-88px)] md:h-[calc(100vh-110px)]">
      <div className="flex gap-8 flex-col grow min-w-full md:min-w-175 items-center justify-center h-screen px-2 md:px-0">
        <div className="flex-flex-col gap-2 md:min-w-175 self-start">
          <h1 className="text-xl md:text-2xl font-bold text-secondary-shade">
            <span className="text-secondary-tint">{questionNumber}.</span>{' '}
            {currentQuestion.text}
          </h1>
          <p>Select the best answer below.</p>
        </div>

        <div className="w-full space-y-6 px-10 md:px-28">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id
            const isCorrect = option.id === currentQuestion.correctOptionId

            return (
              <button
                key={option.id}
                onClick={() => selectAnswer(option.id)}
                className={`
                w-full flex items-center justify-between gap-4 px-6 py-4 cursor-pointer
                bg-primary-base rounded-lg border-[3px] border-white/25
                transition-all duration-200
                                ${
                                  isSelected &&
                                  isCorrect &&
                                  'bg-success-base border-success-stroke'
                                }
              `}
              >
                <div className="flex items-center gap-4">
                  <span className="md:text-lg text-white text-start">
                    {option.text}
                  </span>
                </div>
                <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
                  {option.id}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="w-full bg-secondary-bg-gradient-a border-t-[3px] border-secondary-base/10 flex items-center justify-between px-2 md:px-8 py-2 md:py-6">
        <button
          onClick={goBack}
          className="cursor-pointer px-4 py-2 bg-transparent border-[3px] border-white/20 rounded-lg transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
        >
          <p className="text-secondary-tint font-medium mx-auto">Back</p>
        </button>

        {selectedAnswer === currentQuestion.correctOptionId && (
          <span className="text-lg text-success-base rounded-lg px-6 py-3 bg-success-stroke/15 hidden md:inline">
            Correct! 🎉
          </span>
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
            #
          </span>
        </button>
      </div>
    </div>
  )
}

export default QuestionScreen
