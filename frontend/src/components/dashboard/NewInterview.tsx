import Card from "./Card"

const NewInterview = () => {
  return (
    <div className="py-12">
      <h1 className="text-[2rem] font-bold text-center mb-8">You Interview Dashboard</h1>
      <div className="flex justify-center gap-8">
        <Card 
          title='Practice Again'
          description='Interview again for a Web Designer role.' 
        />
        <Card 
          title='Change Role'
          description='Interview again for a Web Designer role.' 
        />
      </div>
      
      
    </div>
  )
}

export default NewInterview