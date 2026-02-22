import { useInterviewContext } from '../../context/InterviewContext'

const RoleSelector = () => {
  const { selectedRole, selectRole, startInterview } = useInterviewContext()

  const roles = [
    { id: 'web-developer', label: 'Web Developer', number: 1 },
    { id: 'python-developer', label: 'Python Developer', number: 2 },
    { id: 'ux-designer', label: 'UX/UI Designer', number: 3 },
  ]

  return (
    <div className="flex flex-col items-center justify-between h-[calc(100vh-88px)] md:h-[calc(100vh-110px)]">
      <div className="flex gap-8 flex-col grow items-center justify-center h-screen px-2 md:px-0">
        <div className="flex-flex-col gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-secondary-shade">
            Please choose a role:
          </h1>
          <p>
            We'll use your response to personalize your interview experience.
            You'll be able to change this later.
          </p>
        </div>

        <div className="w-full space-y-6 px-10 md:px-28">
          {roles.map((role) => {
            let beforeBg = ''
            if (role.label === 'Web Developer')
              beforeBg = "before:bg-[url('/src/assets/web-dev.svg')]"
            else if (role.label === 'Python Developer')
              beforeBg = "before:bg-[url('/src/assets/python.svg')]"
            else if (role.label === 'UX/UI Designer')
              beforeBg = "before:bg-[url('/src/assets/ux-ui.svg')]"

            return (
              <button
                key={role.id}
                onClick={() => selectRole(role.id)}
                className={`
                relative w-full flex items-center justify-between gap-4 px-6 py-4 cursor-pointer
                bg-primary-base rounded-lg border-[3px] border-white/25
                ring-4 ring-offset-4 transition-all duration-200
                ${
                  selectedRole === role.id
                    ? 'ring-primary-stroke-bold'
                    : 'ring-white hover:ring-primary-stroke-bold'
                }
                before:content-[''] before:absolute before:-left-6 md:before:-left-10 before:top-1/2 before:-translate-y-1/2
                before:w-20 before:h-20 md:before:w-24 md:before:h-24 before:bg-contain before:bg-no-repeat
                ${beforeBg}
              `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-primary-base bg-primary-base" />
                  <span className="md:text-lg text-start text-white">
                    {role.label}
                  </span>
                </div>

                <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
                  {role.number}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="w-full bg-secondary-bg-gradient-a border-t-[3px] border-secondary-base/10 flex items-center justify-end px-2 md:px-8 py-2 md:py-6">
        <button
          onClick={startInterview}
          disabled={!selectedRole}
          className="cursor-pointer px-4 py-2 bg-secondary-tint border-[3px] border-white/20 rounded-lg disabled:opacity-40 disabled:cursor-auto transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
        >
          <p className="text-white font-medium mx-auto">Continue</p>
          {selectedRole && (
            <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
              ⏎
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default RoleSelector
