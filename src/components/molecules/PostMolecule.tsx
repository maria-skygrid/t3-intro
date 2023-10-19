import { RouterOutputs } from "~/utils/api";
import Avatar from "./Avatar";

// 上記のtypeと同じですが、APIから取得してるデータで作成みたい。
type Post = RouterOutputs["posts"]["index"][number];

const PostMolecule = ({post, author}: Post) => {
  return (
    <div key={post.id}className="p-8 border-b gap-4 border-slate-700 flex items-center">
      <Avatar 
        src={author.imageUrl} 
        alt="User profile avatar" 
        styles="rounded-full"
        width={40}
        height={40}
      />
      <div>{post.content}</div>
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