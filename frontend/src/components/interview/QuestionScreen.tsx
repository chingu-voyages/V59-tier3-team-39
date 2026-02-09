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
    <div className="flex flex-col grow">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg mx-4">
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-600 mb-6">
              Question {questionNumber} of {totalQuestions}
            </h2>
            <h1 className="text-2xl font-bold text-black mb-4">
              {question.text}
            </h1>
            <p className="text-black">Select the best answer below.</p>
          </div>

          <div className="space-y-3 mb-8">
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
                    <span className="text-lg text-black">{option.text}</span>
                  </div>
                  <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                    {option.id}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex justify-between">
            <button
              onClick={onBack}
              className="px-4 py-2 bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-auto transition-all flex items-center gap-8"
            >
              Back
              <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                B
              </span>
            </button>
            <button
              onClick={onContinue}
              disabled={!selectedAnswer}
              className="px-4 py-2 bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-auto transition-all flex items-center gap-8"
            >
              {questionNumber >= totalQuestions ? 'Finish' : 'Continue'}
              <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                ⏎
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionScreen
