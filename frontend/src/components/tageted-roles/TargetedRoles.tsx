import Role from "./Role"
import roleImg from '../../assets/homeImages/roleImg.png'

const roleData = [
  {
    role: 'Web Developers',
    description: 'Review modern framework concepts and technical terminology: never "blank" on a React question again.',
    imgSrc: roleImg,
    altText: 'role image',
    button: {
      label: 'Debug Your Interview!',
      subLabel: 'Simulate a front-end interview.',
      to: '/interview'
    }
  },
  {
    role: 'UX Designers',
    description: 'Practice articulating your methodology and the "why" behind your design decisions with confidence.',
    imgSrc: roleImg,
    altText: 'role image', 
    button: {
      label: 'Debug Your Interview!',
      subLabel: 'Dry run an interview for a UX role.',
      to: '/interview'
    }
  },
  {
    role: 'Python Developers',
    description: `Move beyond the syntax with structured practice on data structures and\nalgorithms.`,
    imgSrc: roleImg,
    altText: 'role image',
    button: {
      label: 'Debug Your Interview!',
      subLabel: 'Build your skills and your confidence.',
      to: '/interview'
    }
  },

]

const TargetedRoles = () => {
  return (
    <div className="w-13/14 mx-auto py-12">
      <div className="grid md:grid-cols-3 gap-14">
        {roleData.map(card => ( 
          <Role key={card.role} {...card} />
        ))}
      </div>
    </div>
  )
}

export default TargetedRoles