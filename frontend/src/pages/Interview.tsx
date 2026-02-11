import { useInterviewContext } from '../context/InterviewContext'
import RoleSelector from '../components/interview/RoleSelector'
import QuestionScreen from '../components/interview/QuestionScreen'
import ResultsScreen from '../components/interview/ResultsScreen'

const Interview = () => {
  const { selectedRole, isInterviewStarted, isInterviewCompleted } =
    useInterviewContext()

  if (!selectedRole || !isInterviewStarted) {
    return <RoleSelector />
  }

  if (isInterviewStarted && !isInterviewCompleted) {
    return <QuestionScreen />
  }

  if (isInterviewCompleted) {
    return <ResultsScreen />
  }

  return null
}

export default Interview
