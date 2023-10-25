import HeadsBase from "~/components/heads";
import { api } from "~/utils/api";
const ProfilePage = () => {

  const { data } = api.profile.getUserByUsername.useQuery({username: 'maria-skygrid'})
  console.log(data);
  
  return (
    <>
      <HeadsBase />
      <main className="flex justify-center h-screen">
        <p>Profile view</p>
      </main>
    </>
  );
}

export default ProfilePage
