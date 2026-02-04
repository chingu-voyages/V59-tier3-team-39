import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { RiCloseLargeLine } from "react-icons/ri"
import Logo from '../../assets/Logo.png'

const Header = () => {

  return (
    <header className="fixed bg-[#fafafa] inset-x-0 top-0 py-5 shadow-sm">
      <nav className="w-13/14 mx-auto flex justify-between items-center">
        <Link to='/'>
          {<img src={Logo} alt='Debug Your Interivew logo' />}
        </Link>
        <span className='absolute left-1/2 -translate-x-1/2 text-lg font-semibold'>Select a role</span>
        <Button className='border border-gray-300 rounded-sm py-1 px-1.5 hover:text-red-400'>
          <Link to='/'>
            <RiCloseLargeLine size={24}/>
          </Link>
          
        </Button>
      </nav>
    </header>
  )
}

export default Header
