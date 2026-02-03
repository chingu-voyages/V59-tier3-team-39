import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Button from '../button/Button'
import { FcGoogle } from 'react-icons/fc'

const navLinks = [
  {to: '/interview', label: 'Interview'},
  {to: '/dashboard', label: 'Dashboard'},
  {to: '/casestudy', label: 'Case Study'}
]

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 py-5 bg-white border-b">
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        <Link to='/'>
          {<img src={Logo} alt='Debug Your Interivew logo' />}
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map(({to, label}) => (
            <NavLink key={to} to={to}
              className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-red-400'}>
              {label}
            </NavLink>
          ))}
          <Button className='border rounded-full py-2 px-4'>
            <FcGoogle /> Sign in with Google
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header

