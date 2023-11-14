import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
import HeadsBase from "~/components/heads";
import AtomsAvatar from "~/components/atoms/avatar";
import AtomsButtonBase from "~/components/atoms/button/base";
import MoleculesProfileTop from "~/components/molecules/profile/top";
import MoleculesProfileHeader from "~/components/molecules/profile/header";
import MoleculesProfileInformation from "~/components/molecules/profile/information";
import OrganismsUserPosts from "~/components/organisms/userPosts";

export type MoleculesPostType = RouterOutputs["posts"]["index"][number];

const ProfilePage = () => {

  const { data } = api.profile.show.useQuery({username: 'maria-skygrid'})
  const { data: posts }: {data?: MoleculesPostType[]} = api.posts.index.useQuery()

  if(!data || !posts) return null;

  return (
    <>
      <HeadsBase />
      <MoleculesProfileTop 
        data={data}
        posts={posts}
      />
      <MoleculesProfileHeader />
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
        <MoleculesProfileInformation 
          data={data}
        />
      </div>
      <OrganismsUserPosts userId={data.id} />
    </>
  );
}

export default ProfilePage

// react boundary