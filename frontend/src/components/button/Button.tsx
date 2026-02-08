import { Link } from 'react-router-dom'

type ButtonProps = {
  label: string
  subLabel: string
  to: string
}

const Button = ({label, subLabel, to}: ButtonProps) => {

  return (
    <button className='relative bg-gray-200 py-4 px-6 rounded-lg overflow-hidden cursor-pointer'>
      <Link to={to}>
        <div className="flex flex-col items-start leading-[1.20]">
          <span className="font-semibold text-xl">{label}</span>
          <span>{subLabel}</span>
        </div>  
      </Link>
    </button>
  )
}

export default Button