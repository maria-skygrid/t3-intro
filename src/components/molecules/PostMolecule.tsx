import { RouterOutputs, api } from "~/utils/api";

// 上記のtypeと同じですが、APIから取得してるデータで作成みたい。
type Post = RouterOutputs["posts"]["getAll"][number];

const PostMolecule = ({post, author}: Post) => {
  return (
    <div key={post.id}className="p-8 border-b gap-4 border-slate-700 flex items-center">
      <img 
        className="w-12 h-12 rounded-full"
        src={author?.imageUrl} 
        alt="author avatar" 
      />
      <div className="">{post.content}</div>
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