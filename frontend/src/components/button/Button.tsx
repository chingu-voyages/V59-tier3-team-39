import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
}

const Button = ({children, className = ''}: ButtonProps) => {

  return (
    <button className={`relative overflow-hidden ${className}`}>
      <span className="relative flex items-center justify-center gap-1">
        {children}
      </span>
    </button>
  )
}

export default Button