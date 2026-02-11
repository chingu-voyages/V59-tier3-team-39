import { createContext, useContext } from 'react'
import type { Question } from '../types/types'

interface InterviewContextType {
  // state
  selectedRole: string | null
  isInterviewStarted: boolean
  isInterviewCompleted: boolean
  currentQuestionIndex: number
  totalQuestions: number
  currentQuestion: Question | null
  selectedAnswer: string | null
  correctAnswersCount: number

  // actions
  selectRole: (roleId: string) => void
  startInterview: () => void
  selectAnswer: (answerId: string) => void
  goBack: () => void
  goContinue: () => void
  restart: () => void
}

export const InterviewContext = createContext<InterviewContextType | null>(null)

export const useInterviewContext = () => {
  const ctx = useContext(InterviewContext)
  if (!ctx) {
    throw new Error('useInterviewContext must be used within InterviewProvider')
  }
  return ctx
}
