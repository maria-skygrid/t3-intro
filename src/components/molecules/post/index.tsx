import { RouterOutputs } from "~/utils/api"
import AtomsAvatar from "../../atoms/avatar"
import { relTime } from "~/utils/daysjs"


// 上記のtypeと同じですが、APIから取得してるデータで作成みたい。
type MoleculesPostType = RouterOutputs["posts"]["index"][number];

const MoleculesPost = ({post, author}: MoleculesPostType) => {
  return (
    <div key={post.id}className="p-4 border-b gap-4 border-slate-700 flex items-start">
      <AtomsAvatar
        src={author.imageUrl} 
        alt="User profile avatar" 
        width={40}
        height={40}
      />
      <div>
        <span className="font-bold">@{author.username}</span>
        <span className="text-sm text-slate-400"> · {relTime(post.createdAt)}</span>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default MoleculesPost

// type Data = {
//   post: {
//     id: string,
//     content: string, 
//     authorId: string
//   }, 
//   author?: {
//     id: string, 
//     username: string | null
//     imageUrl: string
//   }
// }