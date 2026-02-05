import { useState } from "react"
import { HiDotsVertical } from "react-icons/hi"
import { IoMdRefresh } from "react-icons/io"
import { IoClose } from 'react-icons/io5'

type Score = {
  earned: number
  total: number
}

type SessionProps = {
  role: string
  date: string
  score: Score
}

const SessionContainer = ({role, date, score}: SessionProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="border py-3 px-4 rounded-sm">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="relative h-12 w-12 bg-[#d7d7d7] rounded-full">
            <span className="absolute left-2 top-1.5 font-bold text-sm">{score.earned}</span>
            <span className="absolute right-2 bottom-1.5 font-bold text-sm">{score.total}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-px h-3/4 bg-black rotate-45 origin-center"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{role}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="relative">
          <div
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="border border-[#D7D7D7] py-2.25 px-2 rounded-sm cursor-pointer hover:text-red-400">
              <HiDotsVertical size={20}/>
          </div>

          {isMenuOpen && (
            <div 
              onClick={() => setIsMenuOpen(false)}
              className="min-w-31 absolute flex flex-col right-0 top-full mt-0.5 border border-[#D7D7D7] rounded-sm z-40 cursor-pointer">
              <div className="bg-white text-sm font-bold hover:text-green-400">
                <span className="flex items-center gap-2 py-1.5 pl-4">
                  <div className="rounded-full border">
                    <IoMdRefresh /> 
                  </div>
                  Try Again
                </span>
              </div>
              <div className="bg-[#F3F3F3] text-sm font-bold hover:text-red-400">
                <span className="flex items-center gap-2 py-1.5 pl-4">
                  <div className="rounded-full border">
                    <IoClose />
                  </div>
                  Delete
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SessionContainer