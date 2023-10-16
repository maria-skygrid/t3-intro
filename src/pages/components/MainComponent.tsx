import { api } from "~/utils/api";
import SyncLoader from "react-spinners/SyncLoader";

const MainComponent = () => {
  const {data, isLoading} = api.posts.getAll.useQuery();
  
  // Early return
  if(!data) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <SyncLoader size={5} color={"#FFCD00"} />
  }

  return data.map((post) => (<div key={post.id}>{post.content}</div>))

}

export default MainComponent;