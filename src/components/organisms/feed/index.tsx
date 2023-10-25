import { api } from "~/utils/api"
import MoleculesPost from "../../molecules/post"
import AtomsLoader from "~/components/atoms/loader";

const OrganismsFeed = () => {
  const {data, isLoading} = api.posts.index.useQuery();
  
  // Early return
  if(!data) (
    <p>Sorry, something went wrong...</p>
  )

  const posts = data?.map((posts) => (
    <div key={posts.post.id}>
      <MoleculesPost {...posts} />
    </div>
  ))
  
  return (
    <>
      { isLoading ? <AtomsLoader />  : posts }
    </>
  )

}

export default OrganismsFeed