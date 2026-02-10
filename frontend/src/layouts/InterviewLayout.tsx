import { Outlet } from 'react-router-dom'
import Header from '../components/interview/Header'
import { useInterviewLogic } from '../hooks/useInterviewLogic'
import { InterviewContext } from '../context/InterviewContext'

const InterviewLayout = () => {
  const interview = useInterviewLogic()

  return (
    <InterviewContext.Provider
      value={{
        // state
        selectedRole: interview.selectedRole,
        isInterviewStarted: interview.isInterviewStarted,
        isInterviewCompleted: interview.isInterviewCompleted,
        currentQuestionIndex: interview.currentQuestionIndex,
        totalQuestions: interview.totalQuestions,
        correctAnswersCount: interview.correctAnswersCount,
        selectedAnswer: interview.selectedAnswer,
        currentQuestion:
          interview.isInterviewStarted && interview.currentRoleData
            ? interview.currentRoleData.questions[
                interview.currentQuestionIndex
              ]
            : null,

        // actions
        selectRole: interview.handleRoleSelect,
        startInterview: interview.handleStartInterview,
        selectAnswer: interview.handleAnswerSelect,
        goBack: interview.handleBack,
        goContinue: interview.handleContinue,
        restart: interview.handleRestart,
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <Outlet />
        </div>
      </div>
    </InterviewContext.Provider>
  )
}

export default InterviewLayout
