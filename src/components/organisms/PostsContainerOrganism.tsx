import { api } from "~/utils/api";
import SyncLoader from "react-spinners/SyncLoader";
import PostMolecule from "../molecules/PostMolecule";

const PostsContainerOrganism = () => {
  const {data, isLoading} = api.posts.index.useQuery();
  
  // Early return
  if(!data) {
    return <div>Loading...</div>
  }

  const posts = data.map((posts) => (
    <div key={posts.post.id}>
      <PostMolecule {...posts} />
    </div>
  ))
  
  return (
    <>
      { isLoading ? <SyncLoader size={5} color={"#FFCD00"} /> : posts }
    </>
  )

}

export default PostsContainerOrganism;