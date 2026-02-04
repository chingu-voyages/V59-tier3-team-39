import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const footerData = [
  {
    title: 'App Links',
    links: [
      {label: 'Landing Page', link: '/'},
      {label: 'Interview App', link: '/interview'},
      {label: 'Dashboard', link: '/dashboard'},
      {label: 'Account', link: '#'}
    ]
  },
  {
    title: 'About Us',
    links: [
      {label: 'Team Directory', link: '#'},
      {label: 'Case Study', link: '/casestudy'},
      {label: 'Github Repository', link: 'https://github.com/chingu-voyages/V59-tier3-team-39'}
    ]
  },
  {
    title: 'Legal',
    links: [
      {label: 'licensing', link: '#'},
      {label: 'Terms of Service', link: '#'},
      {label: 'Privacy Policy', link: '#'}
    ]
  }
]

const year = new Date().getFullYear()



const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] mt-8">
      <div className='w-13/14 mx-auto py-12'>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className='space-y-4 max-w-[480px]'>
            <img src={Logo} alt="" />
            <p>
              <span className='font-bold'>Debug Your Interview</span> is a gamified practice space where you can simulate real-world interviews, iterate on your delivery, and improve with every session. By designers and devs, for designers and devs.
            </p>
          </div>
          <div className='flex gap-8'>
            {footerData.map(col => (
              <div key={col.title} className='flex flex-col leading-tight'>
                <span className='text-lg font-bold'>{col.title}</span>
                {col.links.map(({label, link}) => (
                  <Link key={label} to={link} className='hover:text-red-400'>{label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='text-center'>
          <span className='text-[#808080]'>Design & content © {year} DebugYourInterview.com. All rights reserved. Source code freely available on Github and shared under the MIT license.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
