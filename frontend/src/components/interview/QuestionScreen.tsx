import { useState } from 'react'
import { useInterviewContext } from '../../context/InterviewContext'
import HintModal from './HintModal'

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

  const [isHintOpen, setIsHintOpen] = useState(false)

  if (!currentQuestion) return null

  const questionNumber = currentQuestionIndex + 1

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-89px)] bg-primary-bg-gradient-section">
      <div className="flex gap-6 md:gap-8 flex-col grow min-w-full md:min-w-175 items-center justify-center px-2 md:px-0 pt-2 pb-6 md:pt-6 md:pb-12">
        <div className="flex-flex-col gap-2 md:min-w-175 self-start px-4">
          <h1 className="text-xl md:text-2xl font-bold text-secondary-shade">
            <span className="text-secondary-tint">{questionNumber}.</span>{' '}
            {currentQuestion.text}
          </h1>
          <p className="text-sm md:text-base">Select the best answer below.</p>
        </div>

        <div className="w-full space-y-4 md:space-y-6 px-4 md:px-28">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id
            const isCorrect = option.id === currentQuestion.correctOptionId

            return (
              <button
                key={option.id}
                onClick={() => selectAnswer(option.id)}
                className={`
                w-full flex items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4 cursor-pointer
                bg-primary-base rounded-lg border-[3px] border-white/25
                transition-all duration-200 text-sm md:text-base
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
                <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
                  {option.id}
                </span>
              </button>
            )
          })}

          <div className="max-w-119 min-h-17.5 h-fit">
            {selectedAnswer && (
              <div className="text-sm space-y-4 md:space-y-6 rounded-lg border-[3px] border-primary-stroke-tint px-4 md:px-6 py-3 md:py-4">
                <span className="font-bold mr-1">Explanation:</span>
                {
                  currentQuestion.options.find(
                    (opt) => opt.id === selectedAnswer
                  )?.feedback
                }
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-secondary-bg-gradient-a border-t-[3px] border-secondary-base/10 flex flex-row items-center justify-between gap-2 md:gap-3 px-2 md:px-8 py-2 md:py-6">
        <button
          onClick={goBack}
          className="cursor-pointer px-4 py-2 bg-transparent border-[3px] border-white/20 rounded-lg transition-all flex items-center gap-3 text-base min-h-13.5"
        >
          <p className="text-secondary-tint font-medium">Back</p>
        </button>

        <div className="flex items-center gap-2 md:gap-3 flex-nowrap justify-end flex-1">
          {selectedAnswer === currentQuestion.correctOptionId && (
            <span className="text-sm md:text-lg text-success-base rounded-lg px-3 md:px-6 py-2 md:py-3 bg-success-stroke/15 hidden md:inline whitespace-nowrap">
              Correct! 🎉
            </span>
          )}

          <button
            onClick={() => setIsHintOpen(true)}
            className="cursor-pointer px-4 py-2 bg-transparent border-[3px] border-white/20 rounded-lg transition-all flex items-center gap-2 min-h-13.5 hover:bg-white/5 text-base whitespace-nowrap"
          >
            <p className="text-secondary-tint font-medium">Get a hint</p>
            <span className="text-secondary-tint font-medium hidden md:inline">
              H
            </span>
          </button>

          <button
            onClick={goContinue}
            disabled={!selectedAnswer}
            className="cursor-pointer px-4 py-2 bg-secondary-tint border-[3px] border-white/20 rounded-lg disabled:opacity-40 transition-all flex items-center gap-3 text-base min-h-13.5 whitespace-nowrap hover:opacity-90"
          >
            <p className="text-white font-medium">
              {questionNumber >= totalQuestions ? 'Finish' : 'Continue'}
            </p>
            <span className="text-white font-medium bg-white/10 rounded-lg w-7 h-7 md:w-8 md:h-8 hidden md:flex items-center justify-center text-xs md:text-sm shrink-0">
              #
            </span>
          </button>
        </div>
      </div>

      <HintModal
        isOpen={isHintOpen}
        hint={currentQuestion.hint}
        onClose={() => setIsHintOpen(false)}
      />
    </div>
  )
}

export default QuestionScreen
