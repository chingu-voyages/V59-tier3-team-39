const Card = () => {

  const answers = [
    { answer: "Here's one Answer.", num: 1 },
    { answer: "Another answer.", num: 2 },
    { answer: "This is a third possible answer.", num: 3 },
    { answer: "Generally there will be four options.", num: 4 }
  ]

  return (
    <div className="md:max-w-89 lg:max-w-143.5 bg-white md:p-4.5 lg:p-10 space-y-4 rounded-2xl border-6 border-[#F1EDEA]">
      <div className="space-y-1 flex flex-col items-start">
        <span className="items-center text-sm font-bold bg-[#8fe3ff] py-1.25 px-4.25 rounded-lg">#CSS</span>
        <p className="md:text-xl lg:text-[1.75rem] font-bold leading-[1.15]">The question goes here. It can extend to several lines.</p>
        <span className="md:text-sm lg:text-lg font-light">Select the best answer below.</span>
      </div>
    
      { answers.map(({answer, num}) => (
        <div className="flex justify-between items-center md:py-1.25 lg:py-2.25 rounded-lg md:px-4 lg:px-6 bg-primary-base border-3 border-[#d7d7d7]/30">
          <p className="md:text-base lg:text-lg text-white font-medium leading-[1.15]">{answer}</p>
          <span className="text-[#DEF1F8] font-medium py-1.25 md:px-[10.5px] lg:px-[11.5px] bg-white/10 rounded-lg">{num}</span>
        </div>
      ))}
    </div>
  )
}

export default Card