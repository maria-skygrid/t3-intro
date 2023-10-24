import { useUser, SignOutButton, SignInButton } from "@clerk/nextjs";
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
      <main className="flex justify-center h-screen">
        <div className="border-x w-full md:max-w-2xl border-slate-700 h-full">
          <div className="border-b border-slate-600 p-4">
            { user ? <SignOutButton /> : <SignInButton /> }
            <OrganismsPostCreate />
          </div>
          <OrganismsFeed />
        </div>
      </main>
    </>
  );
}
