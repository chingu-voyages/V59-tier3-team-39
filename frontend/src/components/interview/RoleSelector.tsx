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
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => onRoleSelect(role.id)}
                className={`w-full flex items-center cursor-pointer justify-between gap-4 px-6 py-4 rounded-lg border transition-all ${
                  selectedRole === role.id
                    ? 'border-[#787878] border-2'
                    : 'border-[#D7D7D7] hover:border-[#787878]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#D7D7D7] bg-[#ebebeb]"></div>
                  <span className="text-lg text-black">{role.label}</span>
                </div>
                <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                  {role.number}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onStartInterview}
              disabled={!selectedRole}
              className="px-4 py-2 bg-white border border-[#d7d7d7] cursor-pointer text-black font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-auto transition-all flex items-center gap-8"
            >
              Continue
              <span className="text-gray-600 font-medium font-[#787878] border border-[#D7D7D7] rounded-lg w-8 h-8 flex items-center justify-center">
                ⏎
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleSelector
