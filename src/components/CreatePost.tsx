import { useUser } from "@clerk/nextjs";
import AvatarAtom from "./atoms/AvatarAtom";

const CreatePost = () => {
  const { user } = useUser(); 
  if (!user) return null;

  return (
    <div className="flex gap-4 w-full">
      { user && (
        <AvatarAtom 
          src={user.imageUrl}
          alt="User profile avatar"
          width={40}
          height={40}
        />
      )}
      <input 
        placeholder="What is happening?" 
        className="grow bg-transparent" />
    </div>
  )
}

export default CreatePost;


// メモ
// w-100 → w-full