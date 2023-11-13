import HeadsBase from "~/components/heads";
import { api } from "~/utils/api";
import AtomsAvatar from "~/components/atoms/avatar";
import UserPosts from "~/components/organisms/userPosts";
import Link from "next/link";
import AtomsButtonBase from "~/components/atoms/button/base";
import { CalendarIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { BiArrowBack } from "react-icons/bi"

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
      <div className="bg-slate-900 h-[180px]"></div>
      <div className='p-5 relative'>
        <AtomsAvatar 
          src={data.imageUrl} 
          alt="profile avatar" 
          styles="border border-4 border-black absolute top-[-70px]"
          width={130}
          height={130}
        />
        <div className="flex justify-end">
          <AtomsButtonBase 
            className="px-5 py-1.5 border border-slate-400 hover:bg-slate-500/20"
          >
            Edit profile
          </AtomsButtonBase>
        </div>
        <section className="mt-3">
          <h1 className="font-bold text-lg">{data.username}</h1>
          <h2 className="text-slate-400">@{data.username}</h2>
          <p className="mt-3">Bio</p>
          <div className="flex mt-3 text-slate-400">
            <div className="flex items-center mr-4">
              <GlobeAltIcon className="w-4 h-4 mr-1" />
              <p>Nara</p>
            </div>
            <div className="flex items-center mr-4">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <p>Joined at {data.createdAt}</p>
            </div>
          </div>
          <div className="flex items-center mr-4 mt-3">
            <p className="text-slate-400 mr-4"><span className="font-bold text-white">0</span> Following</p>
            <p className="text-slate-400 mr-4"><span className="font-bold text-white">0</span> Followers</p>
            </div>
        </section>
      </div>
      <UserPosts userId={data.id} />
    </>
  );
}

export default ProfilePage

// react boundary