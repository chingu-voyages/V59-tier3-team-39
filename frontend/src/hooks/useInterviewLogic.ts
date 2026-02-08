import { useState } from 'react'
import interviewData from '../data/interview.json'

export const useInterviewLogic = () => {
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

  return {
    roles,
    selectedRole,
    isInterviewStarted,
    currentQuestionIndex,
    selectedAnswer,
    userAnswers,
    isInterviewCompleted,
    currentRoleData,
    correctAnswersCount,
    totalQuestions,
    handleRoleSelect,
    handleStartInterview,
    handleAnswerSelect,
    handleBack,
    handleContinue,
    handleRestart,
  }
}
