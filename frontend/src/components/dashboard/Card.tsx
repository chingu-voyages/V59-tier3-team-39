
type cardProps = {
    title: string
    description: string
  }


const Card = ({title, description}: cardProps) => {
  return (
    <div className="max-w-80 p-6 bg-white rounded-sm border border-[#D7D7D7]">
        <div className="space-y-4">
          <div className="w-68 h-51 bg-[#D7D7D7] rounded-lg"></div>
          <span className="text-2xl font-semibold">{title}</span>
          <p className="text-xl font-light">{description}</p>
        </div>

      </div>
  )
}

export default Card