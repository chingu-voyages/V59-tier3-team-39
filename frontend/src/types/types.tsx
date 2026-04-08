export interface QuestionOption {
  id: string
  text: string
  feedback?: string
}

export interface Question {
  id: string
  text: string
  hint?: string
  options: QuestionOption[]
  correctOptionId: string
}
