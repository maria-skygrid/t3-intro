import { api } from "~/utils/api";
import SyncLoader from "react-spinners/SyncLoader";

const MainComponent = () => {
  const {data, error, isLoading} = api.posts.getAll.useQuery();
  
  // Early return
  if(!data) throw new Error(`Fetch failed, no data was found.`)

  if (isLoading) ( 
    <SyncLoader size={5} color={"#FFCD00"} />
  );

  return data.map((post) => (<div key={post.id}>{post.content}</div>))

}

export default MainComponent;