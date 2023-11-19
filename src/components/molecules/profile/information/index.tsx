import { CalendarIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { formatTime } from "~/utils/daysjs"
import type { User } from '@clerk/nextjs/dist/types/server'

type MoleculesProfileInformationProps = {
  data: User
}

const MoleculesProfileInformation = ({data}: MoleculesProfileInformationProps) => (
  <section className="mt-3">
    <h1 className="font-bold text-lg">{data.username}</h1>
    <h2 className="text-slate-400">@{data.username}</h2>
    <p className="mt-3">Bio</p>
    <div className="flex mt-3 text-slate-400">
      <div className="flex items-center mr-4">
        <GlobeAltIcon className="w-4 h-4 mr-1" />
        <p>Nara</p>
      </div>
      <div className="flex items-center mr-4">
        <CalendarIcon className="w-4 h-4 mr-1" />
        <p>Joined at {formatTime(data.createdAt)}</p>
      </div>
    </div>
    <div className="flex items-center mr-4 mt-3">
      <p className="text-slate-400 mr-4">
        <span className="font-bold text-white">0</span> 
        Following
      </p>
      <p className="text-slate-400 mr-4">
        <span className="font-bold text-white">0</span> 
        Followers
      </p>
      </div>
  </section>
)

export default MoleculesProfileInformation