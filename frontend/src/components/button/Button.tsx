import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
}

const Button = ({children, className = ''}: ButtonProps) => {

  return (
    <button className={`relative overflow-hidden ${className}`}>
        {children}
    </button>
  )
}

export default Button