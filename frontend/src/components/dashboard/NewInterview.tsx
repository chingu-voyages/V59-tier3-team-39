import Card from "./Card"

const NewInterview = () => {
  return (
    <section className="py-12 w-full bg-[#f8f8f8]">
      <h1 className="text-[2rem] font-bold text-center mb-8">You Interview Dashboard</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Card 
          title='Practice Again'
          description='Interview again for a Web Designer role.' 
        />
        <Card 
          title='Change Role'
          description='Interview again for a Web Designer role.' 
        />
      </div>
      
      
    </section>
  )
}

export default NewInterview