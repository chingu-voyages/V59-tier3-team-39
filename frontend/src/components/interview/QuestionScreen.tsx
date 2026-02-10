interface Option {
  id: string
  text: string
}

interface Question {
  id: string
  text: string
  options: Option[]
  correctOptionId: string
}

interface QuestionScreenProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedAnswer: string | null
  onAnswerSelect: (answerId: string) => void
  onBack: () => void
  onContinue: () => void
}

const QuestionScreen = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onBack,
  onContinue,
}: QuestionScreenProps) => {
  return (
    <div className="flex flex-col grow items-center h-[calc(100vh-110px)] pt-12">
      <div className="mb-8 w-lg">
        <h2 className="text-sm font-medium mb-6">
          Question {questionNumber} of {totalQuestions}
        </h2>
        <h1 className="text-2xl font-bold mb-2 text-secondary-shade">
          {question.text}
        </h1>
        <p>Select the best answer below.</p>
      </div>

      <div className="w-lg space-y-6 mb-auto">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id
          const isCorrect = option.id === question.correctOptionId
          const isIncorrect = isSelected && !isCorrect

          return (
            <button
              key={option.id}
              onClick={() => onAnswerSelect(option.id)}
              className={`w-full flex items-center cursor-pointer justify-between gap-4 px-6 py-4 rounded-lg border transition-all ${
                isIncorrect
                  ? 'border-red-500 border-2'
                  : isSelected && isCorrect
                    ? 'border-[#00c510] border-2'
                    : isSelected
                      ? 'border-2'
                      : 'hover:border-gray-400'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border border-[#D7D7D7] bg-[#ebebeb]"></div>
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
          onClick={onBack}
          className="px-4 py-2 bg-secondary-tint border-[3px] border-white/20 cursor-pointer rounded-lg disabled:opacity-40 disabled:cursor-auto transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
        >
          <p className="text-white font-medium mx-auto">Back</p>
          <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
            B
          </span>
        </button>
        {selectedAnswer && selectedAnswer === question.correctOptionId && (
          <span className="text-lg">Correct! 🎉</span>
        )}
        <button
          onClick={onContinue}
          disabled={!selectedAnswer}
          className="px-4 py-2 bg-secondary-tint border-[3px] border-white/20 cursor-pointer rounded-lg disabled:opacity-40 disabled:cursor-auto transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
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
