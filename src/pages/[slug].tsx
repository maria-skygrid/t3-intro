import Layout from "~/components/layouts";
import HeadsBase from "~/components/heads";
import { api } from "~/utils/api";
const ProfilePage = () => {

  const { data } = api.profile.getUserByUsername.useQuery({username: 'maria-skygrid'})
  console.log(data);
  
  return (
    <>
      <HeadsBase />
      <Layout>
        <div className="p-4 border-b gap-4 border-slate-700 flex items-start">
          <p>{data?.username}</p>
        </div>
      </Layout>
    </>
  );
}

export default ProfilePage
