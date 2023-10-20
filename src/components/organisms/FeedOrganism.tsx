import { api } from "~/utils/api";
import PostMolecule from "../molecules/PostMolecule";
import Loader from "../atoms/Loader";


const FeedOrganism = () => {
  const {data, isLoading} = api.posts.index.useQuery();
  
  // Early return
  if(!data) (
    <p>Sorry, something went wrong...</p>
  )

  const posts = data?.map((posts) => (
    <div key={posts.post.id}>
      <PostMolecule {...posts} />
    </div>
  ))
  
  return (
    <>
      { isLoading ? <Loader /> : posts }
    </>
  )

}

export default FeedOrganism;