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
        <p>Profile view</p>
      </Layout>
    </>
  );
}

export default ProfilePage
