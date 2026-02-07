import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { FcGoogle } from 'react-icons/fc'
import { IoMenu, IoClose } from 'react-icons/io5'

const navLinks = [
  {to: '/interview', label: 'Interview'},
  {to: '/dashboard', label: 'Dashboard'},
  {to: '/casestudy', label: 'Case Study'}
]

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkRender = (onLinkClick?: () => void) => (
    <>
      {navLinks.map(({to, label}) => (
        <NavLink key={to} to={to}
          onClick={onLinkClick}
          className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-red-400'}>
          {label}
        </NavLink>
      ))}
      <button className='flex items-center justify-center gap-1 border rounded-full py-2 px-4'>
        <FcGoogle size={24} /> Sign in with Google
      </button>
    </>
  )

  return (
    <header className="inset-x-0 top-0 py-3 bg-white z-50">
      <nav className="w-13/14 mx-auto flex justify-between items-center">
        <Link to='/'>
          {<img src={Logo} alt='Debug Your Interivew logo' />}
        </Link>
        <div className='hidden md:flex'>
          <div className="flex items-center gap-8">
            {navLinkRender()}
          </div>
        </div>

        <button className='md:hidden p-2' onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24}/>}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='w-11/12 mx-auto px-1 py-6 flex flex-col gap-4'>
            {navLinkRender(() => setIsMenuOpen(false))}
          </div>
        </div>
      )}
      
    </header>
  )
}

export default Header

