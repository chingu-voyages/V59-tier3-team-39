import Button from "../button/Button"

type Button = {
  label: string
  subLabel: string
  to: string
}

type roleProps = {
  role: string
  description: string
  imgSrc: string
  altText: string
  button: Button
}

const Role = ({role, description, imgSrc, altText, button}: roleProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{role}</h2>
        <p className="text-[1.125rem] whitespace-pre-line">{description}</p>
      </div>
      <div className="">
        <img src={imgSrc} alt={altText} />
      </div>
      <Button {...button} />
    </div>
  )
}

export default Role