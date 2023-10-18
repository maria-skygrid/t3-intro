import { api } from "~/utils/api";
import SyncLoader from "react-spinners/SyncLoader";

const PostsContainerOrganism = () => {
  const {data, isLoading} = api.posts.index.useQuery();
  
  // Early return
  if(!data) {
    return <div>Loading...</div>
  }

  const posts = data.map(({post, author}) => (
    <div key={post.id}className="p-8 border-b gap-4 border-slate-700 flex items-center">
      <img 
        className="w-12 h-12 rounded-full"
        src={author?.imageUrl} 
        alt="author avatar" 
      />
      <div className="">{post.content}</div>
    </div>
  ))
  
  return (
    <>
      { isLoading ? <SyncLoader size={5} color={"#FFCD00"} /> : posts }
    </>
  )

}

export default PostsContainerOrganism;