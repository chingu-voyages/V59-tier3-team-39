import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header className="w-full bg-[#fafafa] border-b border-[#d7d7d7] flex items-center justify-between px-12 py-6 h-content">
      <Link to="/">
        {
          <img
            src={Logo}
            alt="Debug Your Interivew logo"
            className="max-w-68"
          />
        }
      </Link>
    </header>
  )
}

export default Header
