import type { User } from "@clerk/nextjs/dist/types/server"
import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"
import type { MoleculesPostType } from "../../post"

type MoleculesProfileTopProps = {
  data: User, 
  posts: MoleculesPostType[]
}


const MoleculesProfileTop = ({data, posts}: MoleculesProfileTopProps) => {
  console.log(posts);
  
  return (
    <div className="p-4 gap-4 flex items-start">
      <div className="flex items-center">
        <Link 
          href={`/`}
          className="text-lg mr-3 px-3 py-3 rounded-full hover:bg-slate-500/20 transition-colors">
          <BiArrowBack />
        </Link>
        <div>
          <p>{data.username}</p>
          <p className="text-sm text-slate-400">
            {posts ? posts.length : 0} posts
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoleculesProfileTop