import { api } from "~/utils/api"
import MoleculesPost from "~/components/molecules/post";

type OrganismsUserPostsProps = {
  userId: string
}

const OrganismsUserPosts = ({ userId }: OrganismsUserPostsProps) => {
  
  const {data} = api.posts.index.useQuery()
  
  if (!data) return null

  const userPosts = data.filter((posts) => posts.author.id === userId)
  
  if (data.length === 0) {
    return (
      <div>
        <p>{userId} has no posts yet.</p>
      </div>
    )
  }

  const renderUserPosts = userPosts.map((posts) => (
    <div key={posts.post.id}>
      <MoleculesPost {...posts} />
    </div>
  ))

  return (
    <div className="border-t border-t-slate-700">
      {renderUserPosts}
    </div>
  )
}

export default OrganismsUserPosts