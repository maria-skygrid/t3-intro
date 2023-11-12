import HeadsBase from "~/components/heads";
import { api } from "~/utils/api";
import AtomsAvatar from "~/components/atoms/avatar";
import UserPosts from "~/components/organisms/userPosts";
import { BiArrowBack } from "react-icons/bi"
import Link from "next/link";

const ProfilePage = () => {

  const { data } = api.profile.show.useQuery({username: 'maria-skygrid'})
  const { data: posts } = api.posts.index.useQuery()

  if(!data) return null;

  return (
    <>
      <HeadsBase />
      <div className="p-4 gap-4 flex items-start">
        <div className="flex items-center">
          <Link 
            href={`/`}
            className="text-lg mr-3 px-3 py-3 rounded-full hover:bg-slate-500/20 transition-colors">
            <BiArrowBack />
          </Link>
          <div>
            <p>{data.username}</p>
            <p className="text-sm text-slate-400">
              {posts ? posts.length : 0} posts
            </p>
          </div>
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