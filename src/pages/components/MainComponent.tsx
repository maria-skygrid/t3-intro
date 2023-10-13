import { api } from "~/utils/api";
import SyncLoader from "react-spinners/SyncLoader";

const MainComponent = () => {
  const {data, error, isLoading} = api.posts.getAll.useQuery();

  if (error) ( 
    <p>Fetch failed, no data was found</p>
  );

  if (isLoading) ( 
    <SyncLoader size={5} color={"#FFCD00"} />
  );

  const renderData = data?.map((post) => (<div key={post.id}>{post.content}</div>))

  if (data) { return renderData }
  
}

export default MainComponent;