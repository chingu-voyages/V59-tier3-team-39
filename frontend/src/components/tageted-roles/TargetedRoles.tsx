import Role from "./Role"
import { useState } from "react"


const roleData = [
  {
    title: {
      role: 'Web', 
      type: 'Developers'
    },
    content: {
      lead: 'Review modern framework concepts',
      body: `and technical terminology: don’t "blank" on that React question.`
    },
    button: {
      label: 'Debug Your Interview!',
      subLabel: 'Simulate a front-end interview.',
      to: '/interview',
      variant: 'light' as const
    }
  },
  {
    title: {
      role: 'UX', 
      type: 'Designers'
    },
    content : {
      lead: 'Practice articulating your methodology',
      body: 'and the "why" behind your design decisions with confidence.',
    },
    button: {
      label: 'Debug Your Interview!',
      subLabel: 'Dry run an interview for a UX role.',
      to: '/interview',
      variant: 'light' as const
    }
  },
  {
    title: {
      role: 'Python', 
      type: 'Developers'
    },
    content: {
      lead: 'Move beyond the syntax',
      body: `with structured practice on data structures and algorithms.`,
    },
    button: {
      label: 'Debug Your Interview!',
      subLabel: 'Build your skills and your confidence.',
      to: '/interview',
      variant: 'light' as const
    }
  },
]

const TargetedRoles = () => {

  const [isActive, setIsActive] = useState(0)

  return (
    <section className="flex flex-col mb-6 items-center">
      <div role='tablist' className="md:hidden flex justify-center">
        {roleData.map((card, index) => (
          <div 
            key={card.title.role}
            role='tab'
            aria-selected={index === isActive}

            onClick={() => setIsActive(index)} 
            className={`
              min-w-30 flex flex-col z-10 -mb-px px-3.75 py-1.75 font-bold leading-[1.10] border-t border-r 
              ${index === isActive ? 'bg-primary-bg-gradient-active' : 'bg-primary-bg-gradient'} ${card.title.role === 'Web' ? 'border-l': 'border-l-0'} 
              rounded-t-lg border-primary-stroke-tint cursor-pointer
            `}
          >
            <span>{card.title.role}</span>
            <span className="text-secondary-base">{card.title.type}</span>
          </div>
        ))}
      </div>
      <div className="border-t md:border-0 border-primary-stroke-base">
        <div 
          role='tabpanel'
          aria-label={`${roleData[isActive]?.title.role} content`}
          className="md:hidden w-full py-6 px-6">
          {roleData.map((card, index) => (
            isActive === index ? <Role key={card.title.role} {...card} /> : null 
          ))}
        </div>
        <div className="hidden md:grid grid-cols-3 gap-6 md-lg:gap-8 md-lg-x:gap-9 lg:gap-9 xl:gap-14 w-full p-8 lg:p-10 xl:p-12">
          {roleData.map(card => (
            <Role key={card.title.role} {...card} /> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetedRoles