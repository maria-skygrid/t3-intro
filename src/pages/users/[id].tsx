import HeadsBase from "~/components/heads";
import { api } from "~/utils/api";
const ProfilePage = () => {

  const { data } = api.profile.show.useQuery({username: 'maria-skygrid'})
  
  // if(!data) {
  //   throw new Error("Error: Data not found")
  // }

  return (
    <>
      <HeadsBase />
      <div className="p-4 border-b gap-4 border-slate-700 flex items-start">
        <p>{data?.username}</p>
      </div>
    </>
  );
}

export default ProfilePage

// react boundary