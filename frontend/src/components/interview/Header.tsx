import { Link } from 'react-router-dom'
import { RiCloseLargeLine } from 'react-icons/ri'
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="bg-secondary-bg-gradient-a rounded-b-4xl border-b-[6px] border-secondary-base/10 inset-x-0 top-0 py-5 h-content">
      <nav className="w-13/14 mx-auto flex justify-between items-center">
        <Link to="/">{<img src={Logo} alt="Debug Your Interview logo" />}</Link>
        <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-secondary-shade">
          Select a role
        </span>
        <button className="py-1 px-1.5">
          <Link to="/">
            <RiCloseLargeLine size={24} color="#8C6239" />
          </Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
