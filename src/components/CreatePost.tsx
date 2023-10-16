import { useUser } from "@clerk/nextjs";

const CreatePost = () => {
  const { user } = useUser(); 
  if (!user) return null;

  return (
    <div className="flex gap-4 w-100">
      { user && (
        <img 
        src={user.imageUrl} 
        className="w-14 h-14 rounded-full"/>
      )}
      <input 
        placeholder="What is happening?" 
        className="grow bg-transparent" />
    </div>
  )
}

export default CreatePost;