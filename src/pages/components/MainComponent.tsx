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

  return data.map((post) => (
    <div 
      key={post.id}
      className="p-8 border-b border-slate-700">{post.content}</div>))

}

export default MainComponent;