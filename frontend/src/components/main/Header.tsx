import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { FcGoogle } from 'react-icons/fc'
import { IoMenu, IoClose } from 'react-icons/io5'
import { AiOutlineComment, AiOutlineAppstore , AiOutlineLayout} from "react-icons/ai"

const navLinks = [
  { to: '/interview', label: 'Interview', Icon: AiOutlineComment },
  { to: '/dashboard', label: 'Dashboard', Icon: AiOutlineAppstore },
  { to: '/casestudy', label: 'Case Study', Icon: AiOutlineLayout },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkRender = (onLinkClick?: () => void) => (
    <>
      {navLinks.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `text-primary-base font-bold ${ isActive ? 'text-orange-400' : 'hover:text-red-400' }`
          }
        >
          { isMenuOpen ? <div className='flex items-center gap-2 text-lg py-2'> <Icon size={26} /> {label} </div> : label}
        </NavLink>
      ))}
      <button className="flex items-center justify-center gap-2 bg-white font-semibold border border-[#dcdcdc] rounded-full py-2 px-4 lg:px-5">
        <FcGoogle size={28} /> Sign in with Google
      </button>
    </>
    
  )

  return (
    <header className="w-full fixed inset-x-0 top-0 bg-secondary-bg-gradient-a pt-3 pb-2.5 z-50 border-b-6 border-secondary-stroke-base rounded-b-4xl">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4.5 md:px-10.5 lg:px-12">
        <Link to="/">{<img src={Logo} className='h-15' alt="Debug Your Interivew logo" />}</Link>
        <div className="hidden md:flex">
          <div className="flex items-center lg:text-xl gap-6 lg:gap-8">{navLinkRender()}</div>
        </div>

        <button
          className="md:hidden  text-secondary-shade cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="mx-auto px-4.5 pt-3 pb-1 flex flex-col gap-4">
            {navLinkRender(() => setIsMenuOpen(false))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
