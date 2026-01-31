import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'


const Header = () => {
  return (
    <header>
      <div className='w-full py-6 border-b'>
        <div className='mx-auto w-11/12'>
          <nav className='flex-between w-full'>
            <Link to='/'>
              <img src={ Logo } alt="Debug Your Interview logo" />
            </Link>
            <div className='flex-between gap-8'>
              <div className='flex gap-8 text-lg font-semibold'>
                <Link to='/interview'>Interview</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/casestudy'>Case Study</Link>
              </div>
              <div>
                <button className='flex-between gap-3 py-4 px-6 border border-[#D7D7D7] rounded-full cursor-pointer'>
                  G Sign in with Google
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
