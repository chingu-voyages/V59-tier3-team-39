import Role from "./Role"

const roleData = [
  {
    role: 'Web Developers',
    description: 'Review modern framework concepts and technical terminology: never "blank" on a React question again.',
    imgSrc: '#',
    altText: '[Graphic] UI Capture of a correctly answered question',
    buttonText: 'Simulate a front-end interview.'
  },
  {
    role: 'UX Designers',
    description: 'Practice articulating your methodology and the "why" behind your design decisions with confidence.',
    imgSrc: '#',
    altText: '[Graphic] UI Capture of a correctly answered question', 
    buttonText: 'Dry run an interview for a UX role.'
  },
  {
    role: 'Python Developers',
    description: `Move beyond the syntax with structured practice on data structures and ${<br />} algorithms.`,
    imgSrc: '#',
    altText: '[Graphic] UI Capture of a correctly answered question',
    buttonText: 'Build your skills and your confidence.'
  },

]

const TargetedRoles = () => {
  return (
    <div className="py-12">
      <div className="w-13/14 mx-auto grid md:grid-cols-3 gap-14">
        {roleData.map(card => ( 
          <Role key={card.role} {...card} />
        ))}
      </div>


    </div>
  )
}

export default TargetedRoles