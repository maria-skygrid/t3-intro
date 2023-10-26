import { useUser, SignOutButton, SignInButton } from "@clerk/nextjs";
import Layout from "~/components/layouts";
import HeadsBase from "~/components/heads";
import OrganismsFeed from "~/components/organisms/feed";
import OrganismsPostCreate from "~/components/organisms/postCreate";

export default function Home() {
  const { user, isLoaded } = useUser();  

  if (!isLoaded) (
    <div></div>
  )

  return (
    <>
      <HeadsBase />
      <Layout>   
        <div className="border-b border-slate-600 p-4">      
        { user ? <SignOutButton /> : <SignInButton /> }
        <OrganismsPostCreate />
        </div>
        <OrganismsFeed />
      </Layout>   
    </>
  );
}
