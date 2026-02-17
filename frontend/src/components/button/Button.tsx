import { Link } from "react-router-dom"
import blueTail from "../../assets/button/tail.svg"
import lightTail from "../../assets/button/tail-light.svg"

type ButtonProps = {
  label: string
  subLabel: string
  to: string
  variant: 'blue' | 'light'
}

const Button = ({ label, subLabel, to, variant = 'blue' }: ButtonProps) => {

  const isBlue = variant === "blue"

  return (
    <Link to={to} className="inline-block relative">
      <div className={`relative flex flex-col justify-center items-start px-8.5 py-2.5 lg:py-2 rounded-full border-3
            ${isBlue ? "bg-primary-tint border-[#70ace2]" : "bg-linear-to-b from-white via-[#fafdfe] to-[#e8f4fc] border-[#bcd7f0]"}
          `}
      >
        <span className={`leading-[1.15] ${isBlue ? "text-white text-lg lg:text-xl font-medium" : "text-primary text-lg font-medium"}`}>
          {label}
        </span>

        <span className={`leading-[1.35] ${ isBlue ? "text-white/90 text-sm lg:text-base" : "text-sm" }`}>
          {subLabel}
        </span>

        <img
          src={isBlue ? blueTail : lightTail}
          alt=""
          className="absolute left-[-3.6px] bottom-[-3.5px] w-5.25 h-4 pointer-events-none"
        />
      </div>
    </Link>
  )
}

export default Button
