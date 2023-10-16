import { api } from "~/utils/api";
import SyncLoader from "react-spinners/SyncLoader";

const MainComponent = () => {
  const {data, isLoading} = api.posts.getAll.useQuery();
  
  // Early return
  if(!data) {
    return <div>Loading...</div>
  }

  if (isLoading) {
    return <SyncLoader size={5} color={"#FFCD00"} />
  }

  return data.map(({post, author}) => (
    <div className="p-8 border-b gap-4 border-slate-700 flex items-center">
      <img 
        className="w-12 h-12 rounded-full"
        src={author?.imageUrl} 
        alt="author avatar" 
      />
      <div 
        key={post.id}
        className="">{post.content}
      </div>
    </div>
  ))

}

export default MainComponent;