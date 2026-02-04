import { AiOutlineEnter } from 'react-icons/ai'
import { useState } from 'react'
import interviewData from '../data/interview.json'

const Interview = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [isInterviewStarted, setIsInterviewStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [userAnswers, setUserAnswers] = useState<
    Array<{ questionId: string; selectedOptionId: string }>
  >([])
  const [isInterviewCompleted, setIsInterviewCompleted] = useState(false)

  const roles = [
    { id: 'web-developer', label: 'Web Developer', number: 1 },
    { id: 'python-developer', label: 'Python Developer', number: 2 },
    { id: 'ux-designer', label: 'UX/UI Designer', number: 3 },
  ]

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
  }

  const handleStartInterview = () => {
    setIsInterviewStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setIsInterviewCompleted(false)
  }

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId)
  }

  const handleBack = () => {
    if (currentQuestionIndex === 0) {
      setIsInterviewStarted(false)
      setSelectedAnswer(null)
      setUserAnswers([])
      setCurrentQuestionIndex(0)
    } else if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1
      setCurrentQuestionIndex(prevIndex)

      const prevAnswer = userAnswers.find(
        (answer) =>
          answer.questionId === currentRoleData?.questions[prevIndex]?.id
      )
      setSelectedAnswer(prevAnswer?.selectedOptionId || null)
    }
  }

  const handleContinue = () => {
    if (!selectedAnswer) return

    const jsonRoleId =
      selectedRole === 'ux-designer' ? 'ui-ux-designer' : selectedRole
    const roleData = interviewData.roles.find((role) => role.id === jsonRoleId)
    if (!roleData) return

    const currentQuestion = roleData.questions[currentQuestionIndex]

    const existingAnswerIndex = userAnswers.findIndex(
      (answer) => answer.questionId === currentQuestion.id
    )

    const newAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId: selectedAnswer,
    }

    if (existingAnswerIndex >= 0) {
      setUserAnswers((prev) =>
        prev.map((answer, index) =>
          index === existingAnswerIndex ? newAnswer : answer
        )
      )
    } else {
      setUserAnswers((prev) => [...prev, newAnswer])
    }

    if (currentQuestionIndex >= roleData.questions.length - 1) {
      setIsInterviewCompleted(true)
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
    }
  }

  const handleRestart = () => {
    setSelectedRole(null)
    setIsInterviewStarted(false)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setIsInterviewCompleted(false)
  }

  const currentRoleData = selectedRole
    ? interviewData.roles.find(
        (role) =>
          role.id ===
          (selectedRole === 'ux-designer' ? 'ui-ux-designer' : selectedRole)
      )
    : null

  const correctAnswersCount = userAnswers.reduce((count, answer) => {
    const question = currentRoleData?.questions.find(
      (q) => q.id === answer.questionId
    )
    return (
      count +
      (question && answer.selectedOptionId === question.correctOptionId ? 1 : 0)
    )
  }, 0)

  const totalQuestions = currentRoleData?.questions.length || 0

  // Role selection screen
  if (!selectedRole || (selectedRole && !isInterviewStarted)) {
    return (
      <div className="flex flex-col grow">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg mx-4">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-black mb-4">
                Please choose a role:
              </h1>
              <p className="text-black">
                We’ll use your response to personalize your interview
                experience. You’ll be able to change this later.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className={`w-full flex items-center cursor-pointer justify-between gap-4 px-6 py-4 rounded-lg border transition-all ${
                    selectedRole === role.id
                      ? 'border-[#787878] border-2'
                      : 'border-[#D7D7D7] hover:border-[#787878]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-[#D7D7D7] bg-[#ebebeb]"></div>
                    <span className="text-lg text-black">{role.label}</span>
                  </div>
                  <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                    {role.number}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleStartInterview}
                disabled={!selectedRole}
                className="px-4 py-2 bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-auto transition-all flex items-center gap-8"
              >
                Continue
                <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                  <AiOutlineEnter color="#787878" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Question screen
  if (isInterviewStarted && !isInterviewCompleted) {
    const currentQuestion = currentRoleData?.questions[currentQuestionIndex]
    if (!currentQuestion) return null

    return (
      <div className="flex flex-col grow">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg mx-4">
            <div className="mb-8">
              <h2 className="text-sm font-medium text-gray-600 mb-6">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </h2>
              <h1 className="text-2xl font-bold text-black mb-4">
                {currentQuestion.text}
              </h1>
              <p className="text-black">Select the best answer below.</p>
            </div>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id
                const isCorrect = option.id === currentQuestion.correctOptionId
                const isIncorrect = isSelected && !isCorrect

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
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
                onClick={handleBack}
                className="px-4 py-2 bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-auto transition-all flex items-center gap-8"
              >
                Back
                <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                  B
                </span>
              </button>
              <button
                onClick={handleContinue}
                disabled={!selectedAnswer}
                className="px-4 py-2 bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-auto transition-all flex items-center gap-8"
              >
                {currentQuestionIndex >= totalQuestions - 1
                  ? 'Finish'
                  : 'Continue'}
                <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                  <AiOutlineEnter color="#787878" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Results screen
  if (isInterviewCompleted) {
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
                onClick={handleRestart}
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
}

export default Interview
