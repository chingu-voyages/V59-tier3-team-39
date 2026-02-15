import { Link } from 'react-router-dom'
import blueTail from '../../assets/button/tail.svg'


type ButtonProps = {
  label: string
  subLabel: string
  to: string,
  img: string
}

const Button = ({label, subLabel, to, img}: ButtonProps) => {

  return (
    
    <Link 
      to={to} className='relative inline-block py-2.25  px-9 text-center cursor-pointer'>
      <div 
        className='absolute inset-0 bg-no-repeat bg-center'
        style={{backgroundImage: `url(${img})`, backgroundSize: '100% 100%'}}
      />
      <div className='relative inset-0 flex flex-col justify-center items-start leading-[1.20]'>
        <span className='font-semibold md:text-lg lg:text-xl text-white'>{label}</span>
        <span className='text-white/90 md:text-sm lg:text-base'>{subLabel}</span>
      </div>
    </Link>
    
  )
}

export default Button