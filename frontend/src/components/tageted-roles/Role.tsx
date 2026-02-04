import Button from "../button/Button"

type roleProps = {
  role: string
  description: string
  imgSrc: string
  altText: string
  buttonText: string
}

const Role = ({role, description, imgSrc, altText, buttonText}: roleProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-bold">{role}</h3>
        <p className="text-[1.125rem]">{description}</p>
      </div>
      <div className="bg-gray-200 py-25 px-12 rounded-lg">
        <img src={imgSrc} alt={altText} />
      </div>
      <Button className="flex flex-col items-start leading-4 bg-gray-200 py-4 px-6 rounded-lg">
        <span className="font-semibold text-xl">Debug Your Interview!</span>
        <span>{buttonText}</span>
      </Button>
    </div>
  )
}

export default Role