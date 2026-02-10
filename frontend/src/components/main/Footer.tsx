import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

const footerData = [
  {
    title: 'App Links',
    links: [
      { label: 'Landing Page', link: '/' },
      { label: 'Interview App', link: '/interview' },
      { label: 'Dashboard', link: '/dashboard' },
      { label: 'Account', link: '#' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Team Directory', link: '#' },
      { label: 'Case Study', link: '/casestudy' },
      {
        label: 'Github Repository',
        link: 'https://github.com/chingu-voyages/V59-tier3-team-39',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Licensing', link: '#' },
      { label: 'Terms of Service', link: '#' },
      { label: 'Privacy Policy', link: '#' },
    ],
  },
]

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="mx-auto px-6 md:px-12 pt-6 md:pt-12 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-14 lg:gap-76 mb-5 md:mb-8">
          <div className="md:flex-1">
            <img src={Logo} alt="Debug Your Interview Logo" className='mb-3 md:mb-4' />
            <p className='leading-[1.35] mb-5 md:mb-0 md:text-sm lg:text-base'>
              <span className="text-secondary-shade font-bold">Debug Your Interview</span> is a
              gamified practice space where you can simulate real-world
              interviews, iterate on your delivery, and improve with every
              session. By designers and devs, for designers and devs.
            </p>
          </div>
          <div className="grid  grid-cols-2 md:flex gap-4 md:gap-6 lg:gap-12">
            {footerData.map((col) => (
              <div key={col.title} className="flex flex-col leading-[1.35]" aria-label='col.title'>
                <span className="text-lg lg:text-xl font-bold">{col.title}</span>
                {col.links.map(({ label, link }) => 
                  link.startsWith('http') ? (
                    <a 
                      key={label} href={link} target="_blank" rel="noopener noreferrer"
                      className='text-secondary-shade text-sm hover:text-red-400'
                    >
                      {label}
                    </a>
                  ) :
                  <Link key={label} to={link} className="text-secondary-shade text-sm hover:text-red-400">
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:max-w-120 lg:max-w-none mx-auto text-center">
          <p className='text-sm'>
            Design & content © {year} <span className='text-secondary-shade font-bold'>DebugYourInterview.com.</span> All rights
            reserved. Source code freely available on Github and shared under
            the MIT license.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
