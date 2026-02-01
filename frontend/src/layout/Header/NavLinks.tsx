import { Link } from 'react-router-dom'

type NavLinkProps = {
        className?: string
    }

const links = [
        { to: '/interview', label: 'Interview'},
        { to: '/dashboard', label: 'Dashboard'},
        { to: '/casestudy', label: 'Case Study'}
    ]

const NavLinks = ({className}: NavLinkProps) => {

    return (
        <div className={className}>
            {links.map(({to, label}) =>(
                <Link key={to} to={to}>{label}</Link>
            ))}
        </div>
    )
}

export default NavLinks