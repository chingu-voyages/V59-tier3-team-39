import Button from "../button/Button"
import confetti from '../../assets/roles/confetti.svg'

type RoleButton = {
  label: string
  subLabel: string
  to: string
  variant: 'light'
}

type Content = {
  lead: string
  body: string
}

type Title = {
  role: string
  type: string
}

type RoleProps = {
  title: Title
  content: Content
  button: RoleButton
}

const Role = ({title, content, button}: RoleProps) => {
  return (
    <div className="md:max-w-57.25 lg:min-w-73.5 xl:max-w-89.5">
      <div className={`md:space-y-1 mb-12 md:mb-10 ${title.role === 'Python' ? 'xl:mb-15.5' : ''} ${title.role === 'UX' ? 'mt-0': 'md:mt-6'}`}>
        <h2 className="hidden md:block text-xl lg:text-2xl xl:text-[1.75rem] font-bold leading-[1.15]">{title.role}<span className="text-secondary-base"> {title.type}</span></h2>
        <p className="sm:text-center md:text-start text-sm lg:text-base xl:text-lg leading-[1.35]">
          <span className="font-bold">{content.lead}</span> <span>{content.body}</span>
        </p>
      </div>
      <div className="relative px-3 pt-11 md:pt-12 pb-5 bg-white rounded-4xl border-4 border-secondary-stroke-tint">
        <div className="absolute top-0 -mt-9 md:-mt-8.5 right-0 -mr-4.5 xl:-mr-8 md:-mr-5 md:ml-2.5">
            <Button {...button} />
        </div>
        <div className="space-y-1 mb-2.5">
          <p className="text-lg lg:text-xl xl:text-2xl font-bold leading-[1.15]">A question goes here.</p>
          <p className="text-sm lg:text-base xl:text-lg font-light">Select the best answer below.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className={`flex justify-between items-center ${title.role === 'UX' ? 'order-2' : 'order-0'} h-14 px-3.25 rounded-lg bg-success-base border-3 border-success-stroke`}>
            <p className="font-medium text-white">The right answer.</p>
            <div className="p-1.5 bg-white/15 rounded-lg">
              <img className="w-5" src={confetti} alt="" />
            </div>
          </div>
          <div className="h-14 flex justify-between items-center px-3.25 rounded-lg bg-primary-tint border-3 border-[#D7D7D7]/30">
            <p className="font-medium text-white">An alternative.</p>
            <span className="h-8 w-8 flex items-center justify-center p-1.5 text-white bg-white/15 rounded-lg">2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Role