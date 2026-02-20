import rigs from '../../assets/profileImages/rigs.png'
import val from '../../assets/profileImages/val.png'
import ekatarina from '../../assets/profileImages/ekatarina.png'
import ruben from '../../assets/profileImages/ruben.png'
import jorge from '../../assets/profileImages/jorge.png'
import joseph from '../../assets/profileImages/joseph.png'

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
    role: 'Scrum Master / Web Developer',
    github: 'https://github.com/Valeriusdev',
    linkedin: 'https://www.linkedin.com/in/valeriylysenko',
    image: val,
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
    role: 'Web Developer / UI Designer',
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
    name: 'Joseph Kotvas',
    role: 'UI/UX Designer',
    github: 'https://github.com/joekotvas',
    linkedin: 'https://www.linkedin.com/in/joekotvas/',
    image: joseph,
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
    className="w-6 h-6"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.19.69-3.86-1.37-3.86-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .3.21.66.79.55A10.99 10.99 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.19h.07c.66-1.25 2.28-2.56 4.7-2.56 5.03 0 5.96 3.31 5.96 7.61V24h-5v-7.54c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.95-2.88 3.98V24h-5V8z" />
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
      className={`flex items-center justify-between bg-[#EFEAE5] border-2 border-[#D8CFC7] ${rounded} px-8 py-5 transition hover:shadow-md hover:-translate-y-1`}
    >
      <div className="flex items-center gap-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-[#8C6239]">
            {member.name}
          </h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
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
    <section className="py-10 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-6 text-gray-600">
            <span className="font-semibold text-gray-900">
              Debug Your Interview was built by a global, cross-functional team.
            </span>
            We represent the very roles our app serves, bringing real-world
            design and development experience to every line of code.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard
              key={member.github}
              member={member}
              isLeftColumn={index % 2 === 0}
            />
          ))}
        </div>

        {/* Open Source */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-900 pr-2">
              This app is open source!
            </span>
            <a
              href=" https://github.com/chingu-voyages/V59-tier3-team-39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Find us on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
