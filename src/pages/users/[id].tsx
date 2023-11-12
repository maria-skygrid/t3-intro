import HeadsBase from "~/components/heads";
import { api } from "~/utils/api";
import AtomsAvatar from "~/components/atoms/avatar";
import UserPosts from "~/components/organisms/userPosts";

const ProfilePage = () => {

  const { data } = api.profile.show.useQuery({username: 'maria-skygrid'})
  const { data: posts } = api.posts.index.useQuery()

  if(!data) return null;

  return (
    <>
      <HeadsBase />
      <div className="p-4 border-b gap-4 border-slate-700 flex items-start">
        <div>
          <p>{data.username}</p>
          <p className="text-sm text-slate-400">
            {posts ? posts.length : 0} posts
          </p>
        </div>
      </div>
      <div>
        <h1>HEADER</h1>
        <div className='p-5'>
          <AtomsAvatar 
            src={data.imageUrl} 
            alt="profile avatar" 
            styles="border border-2 border-white"
            width={130}
            height={130}
          />
        </div>
        <UserPosts userId={data.id} />
      </div>
    </>
  );
}

export default ProfilePage

// react boundary