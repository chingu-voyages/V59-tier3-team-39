import { useInterviewLogic } from '../hooks/useInterviewLogic'
import RoleSelector from '../components/interview/RoleSelector'
import QuestionScreen from '../components/interview/QuestionScreen'
import ResultsScreen from '../components/interview/ResultsScreen'

const Interview = () => {
  const {
    roles,
    selectedRole,
    isInterviewStarted,
    currentQuestionIndex,
    selectedAnswer,
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
  } = useInterviewLogic()

  if (!selectedRole || (selectedRole && !isInterviewStarted)) {
    return (
      <RoleSelector
        roles={roles}
        selectedRole={selectedRole}
        onRoleSelect={handleRoleSelect}
        onStartInterview={handleStartInterview}
      />
    )
  }

  if (isInterviewStarted && !isInterviewCompleted) {
    const currentQuestion = currentRoleData?.questions[currentQuestionIndex]
    if (!currentQuestion) return null

    return (
      <QuestionScreen
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    )
  }

  if (isInterviewCompleted) {
    return (
      <ResultsScreen
        correctAnswersCount={correctAnswersCount}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
      />
    )
  }
}

export default Interview
