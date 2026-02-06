interface CaseStudyLinkProps {
  href?: string
}

export const CaseStudyLink: React.FC<CaseStudyLinkProps> = ({ href = '#' }) => {
  return (
    <div className="w-full mt-8 md:mt-10">
      <a
        href={href}
        className="group block w-full bg-linear-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200/50"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
              Read the full case study
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              User journeys, wireflows, prototypes, and more.
            </p>
          </div>

          {/* Arrow icon with animation */}
          <div className="shrink-0 ml-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 group-hover:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
