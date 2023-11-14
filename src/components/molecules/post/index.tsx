import type { RouterOutputs } from "~/utils/api"
import AtomsAvatar from "../../atoms/avatar"
import { relTime } from "~/utils/daysjs"
import { AiOutlineDelete } from "react-icons/ai"
import { useUser } from "@clerk/nextjs" 
import { api } from "~/utils/api"
import Link from "next/link"
import AtomsButtonBase from "~/components/atoms/button/base"
import MoleculesPostIcons from "../postIcons"

// 上記のtypeと同じですが、APIから取得してるデータで作成みたい。
export type MoleculesPostType = RouterOutputs["posts"]["index"][number];

const MoleculesPost = ({post, author}: MoleculesPostType) => {
  const { user } = useUser();

  const {refetch: refetchPosts} = api.posts.index.useQuery();
  
  const { mutate } = 
    api.posts.delete.useMutation({
      onSuccess: async () => {
        await refetchPosts();
      }
  })

  const onClickMutate = () => {
    mutate({id: post.id})
  }

  return (
    <div key={post.id}className="p-4 border-b gap-4 border-slate-700 flex items-start">
      <AtomsAvatar
        src={author.imageUrl} 
        alt="User profile avatar" 
        width={40}
        height={40}
      />
      <div className="w-full">
        <div className="flex items-start">
          <div className="flex-1">
            <Link href={`/users/@${author.id}`}>
              <span className="font-bold">@{author.username}</span>
            </Link>
            <Link href={`/posts/${post.id}`}>
              <span className="text-sm text-slate-400"> · {relTime(post.createdAt)}</span>
            </Link>
            <p>{post.content}</p>
          </div>
          {user?.id === author.id && (
            <AtomsButtonBase
              onClick={onClickMutate}
              className="px-3 py-1 text-red-600 bg-red-100/30 hover:bg-red-100/40 "
            >
              <AiOutlineDelete />
            </AtomsButtonBase>
          )}
        </div>
        <MoleculesPostIcons />
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
