
import solutionBg from '../assets/solution/solutionbg.png'
import chinguImg from '../assets/chingu/chingu.png'

type FeatureContent = {
    heading?: string
    lead?: string
    body: string
  }

type FeatureImg = {
  src: string
  alt: string
}

type FeatureButton = {
  label: string
  subLabel: string
  to: string
  variant: 'blue'
}

export type FeatureBlock = {
  id: number
  sectionHeading: string
  content: FeatureContent[]
  img?: FeatureImg
  button?: FeatureButton
}

export const heroData: FeatureBlock = {
  id: 1,
  sectionHeading: "Don't make your mistakes in front of a recruiter!",
  content: [
    {
      lead: 'Debug Your Interview',
      body: 'is a gamified practice space where you can simulate real-world interviews, iterate on your delivery, and improve with every session.'
    },
    {
      body: 'Why wait for the high-stakes round to find your bugs? Ship a cleaner, more confident version of yourself to your next interview.'
    }
  ],
  button: {
    label: 'Debug Your Interview!',
    subLabel: 'Start practicing now for free.',
    to: '/interview',
    variant: 'blue'
  }
}

export const solutionData: FeatureBlock = {
  id: 2,
  sectionHeading: "INTERVIEWING IS A ",
  content: [
    {
      heading: "You wouldn’t ship first-draft code to production.",
      lead: `Don’t treat your interview like a "one-and-done" live deploy.`,
      body: "If you aren't iterating in a safe space, you’re essentially debugging your communication in front of the person who signs the checks."
    },
    {
      heading: "Debug Your Interview the easy way.",
      lead: `Our training space fuels progress with curiosity.`,
      body: "We use AI-powered question loops and XP tracking to help you iterate and improve until your delivery is as robust as your code. Attend your next interview with the confidence and clarity needed to land the role."
    }
  ],
  img: {
    src: solutionBg,
    alt: 'solution image'
  }
}

export const chinguData: FeatureBlock = {
  id: 3,
  sectionHeading: "Build with us",
  content: [
    {
      heading: "Where the Voyage Begins",
      lead: "This project was born in the Chingu community: ",
      body: "a place where developers and designers level collaborate to build real-world software in an agile, supportive environment."
    },
    {
      heading: "Join a Global Tech Collective",
      lead: "This project was born in the Chingu community: ",
      body: "Join thousands of industry practitioners who are building their portfolios through hands-on collaboration."
    }
  ],
  img: {
    src: chinguImg,
    alt: 'chingu image'
  },
  button: {
    label: 'Join the Community',
    subLabel: 'Visit Chingu.io for more information',
    to: 'https://chingu.io',
    variant: 'blue'
  }
}