interface RoleSelectorProps {
  roles: Array<{ id: string; label: string; number: number }>
  selectedRole: string | null
  onRoleSelect: (roleId: string) => void
  onStartInterview: () => void
}

const RoleSelector = ({
  roles,
  selectedRole,
  onRoleSelect,
  onStartInterview,
}: RoleSelectorProps) => {
  return (
    <div className="flex flex-col grow">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg mx-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-black mb-4">
              Please choose a role:
            </h1>
            <p className="text-black">
              We'll use your response to personalize your interview experience.
              You'll be able to change this later.
            </p>
          </div>

          <div className="space-y-6 mb-8">
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
                  onClick={() => onRoleSelect(role.id)}
                  className={`
          relative w-full flex items-center justify-between gap-4 px-6 py-4 cursor-pointer
          bg-primary-base rounded-lg border-[3px] border-white/25
          ring-4 ring-offset-4
          transition-all duration-200
          ${selectedRole === role.id ? 'ring-primary-stroke-bold' : 'ring-white hover:ring-primary-stroke-bold'}
          before:content-[''] before:absolute before:-left-10 before:top-1/2 before:-translate-y-1/2
          before:w-24 before:h-24 before:bg-contain before:bg-no-repeat
          ${beforeBg}
        `}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-primary-base bg-primary-base"></div>
                    <span className="text-lg text-white">{role.label}</span>
                  </div>
                  <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
                    {role.number}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onStartInterview}
              disabled={!selectedRole}
              className="px-4 py-2 bg-secondary-tint border-[3px] border-white/20 cursor-pointer text-white font-medium rounded-lg disabled:opacity-40 disabled:cursor-auto transition-all flex items-center gap-8 min-w-41.5 min-h-13.5"
            >
              Continue
              {selectedRole && (
                <span className="text-white font-medium bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center">
                  ⏎
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleSelector
