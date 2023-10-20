import { RouterOutputs } from "~/utils/api";
import AvatarAtom from "../atoms/AvatarAtom";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)


// 上記のtypeと同じですが、APIから取得してるデータで作成みたい。
type Post = RouterOutputs["posts"]["index"][number];

const PostMolecule = ({post, author}: Post) => {
  return (
    <div key={post.id}className="p-4 border-b gap-4 border-slate-700 flex items-start">
      <AvatarAtom
        src={author.imageUrl} 
        alt="User profile avatar" 
        width={40}
        height={40}
      />
      <div>
        <span className="font-bold">@{author.username}</span>
        <span className="text-sm text-slate-400"> · {dayjs().to(dayjs(post.createdAt))}</span>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostMolecule;

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