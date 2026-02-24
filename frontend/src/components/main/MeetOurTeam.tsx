import rigs from '../../assets/profileImages/rigs.avif'
import val from '../../assets/profileImages/val.avif'
import ekatarina from '../../assets/profileImages/ekatarina.avif'
import ruben from '../../assets/profileImages/ruben.avif'
import jorge from '../../assets/profileImages/jorge.avif'
import joseph from '../../assets/profileImages/joseph.avif'
import underline from '../../assets/Underlinemeet.png'
import membersBg from '../../assets/membersbg.png'

type Member = {
  name: string
  role: string
  github: string
  linkedin: string
  image: string
}

const members: Member[] = [
  
  {
    name: 'Valeriy Lysenko',
    role: 'Scrum Master /\nWeb Developer',
    github: 'https://github.com/Valeriusdev',
    linkedin: 'https://www.linkedin.com/in/valeriylysenko',
    image: val,
  },
    {
    name: 'Joseph Kotvas',
    role: 'UI/UX Designer',
    github: 'https://github.com/joekotvas',
    linkedin: 'https://www.linkedin.com/in/joekotvas/',
    image: joseph,
  },
  {
    name: 'Ekaterina Kushnir',
    role: 'Web Developer',
    github: 'https://github.com/katiaku',
    linkedin: 'https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova',
    image: ekatarina,
  },
  {
    name: 'Ruben Aguilar',
    role: 'Web Developer',
    github: 'https://github.com/rubenaguilardev',
    linkedin: 'https://www.linkedin.com/in/rubenaguilar-',
    image: ruben,
  },
  {
    name: 'Jorge Alvarado',
    role: 'Web Developer',
    github: 'https://github.com/alvarado08',
    linkedin: 'https://www.linkedin.com/in/jorgep-alvarado/',
    image: jorge,
  },

  {
    name: 'Rigo L',
    role: 'Web Developer',
    github: 'https://github.com/r1g023',
    linkedin: 'https://www.linkedin.com/in/rigo0101',
    image: rigs,
  },
]

// SVG Components
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8.75 h-9"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.19.69-3.86-1.37-3.86-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .3.21.66.79.55A10.99 10.99 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-9"
  >
    <path
      fill="#0A66C2"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
)

// Member Card Component
const MemberCard = ({
  member,
  isLeftColumn,
}: {
  member: Member
  isLeftColumn: boolean
}) => {
  const rounded = isLeftColumn
    ? 'rounded-full md:rounded-l-full md:rounded-r-none'
    : 'rounded-full md:rounded-r-full md:rounded-l-none'

  return (
    <div
      className={`flex items-center justify-between bg-team-bg-gradient border-3 border-[#E4DFDA] rounded-r-full md:${rounded} px-2.25 py-1.25 transition hover:shadow-md hover:-translate-y-1`}
    >
      <div className="flex items-center gap-3">
        <img
          src={member.image}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover border border-[#DBD7D2]"
        />
        <div>
          <h3 className="xl:text-lg font-medium text-secondary-base leading-[1.15]">
            {member.name}
          </h3>
          <p className="text-sm leading-[1.35] md:whitespace-pre-line lg:whitespace-normal">{member.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 pr-1">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:opacity-80 transition"
        >
          <LinkedInIcon />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-800 hover:opacity-80 transition"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}

export const MeetOurTeam = (): JSX.Element => {
  return (
    <section className="relative pt-11 pb-6 md:pb-8 lg:pb-12 lg:pt-12 xl:pt-16 w-full px-6 md:px-8">
      <div 
        className="absolute top-0 -left-4 w-56 inset-0 bg-contain bg-no-repeat z-0"
        style={{ backgroundImage: `url(${membersBg})` }}
      />
      <div className="relative max-w-264 mx-auto space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 z-10">
        {/* Header */}
        <div className="max-w-160 flex flex-col items-center justify-center mx-auto">
          <h2 className="text-2xl lg:text-[1.75rem] xl:text-[2rem] font-bold leading-[1.15]">Meet Our Team</h2>
          <img 
              src={underline} 
              alt=''
              className='-ml-4 w-48 lg:w-55 xl:w-62 mb-3'
            />
          <p className="text-sm lg:text-base leading-[1.35]">
            <span className="font-bold text-secondary-shade">
              Debug Your Interview was built by a global, cross-functional team. {" "}
            </span>
            We represent the very roles our app serves, bringing real-world design and development experience and dev-focused empathy to every line of code.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:gap-6 lg:gap-7 xl:gap-8 md:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard
              key={member.github}
              member={member}
              isLeftColumn={index % 2 === 0}
            />
          ))}
        </div>

        {/* Open Source */}
        <div className="text-center">
          <p className="md:tex-base lg:text-lg xl:text-xl font-bold leading-[1.15]">
            <span>
              This app is open source! {" "}
            </span>
            <a
              href=" https://github.com/chingu-voyages/V59-tier3-team-39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E78CD] font-semibold hover:underline"
            >
              Find us on GitHub.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
