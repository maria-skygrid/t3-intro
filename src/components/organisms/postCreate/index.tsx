import { useUser } from "@clerk/nextjs"
import { api } from "~/utils/api"
import { useState } from "react"
import toast from "react-hot-toast"
import AtomsAvatar from "../../atoms/avatar"

const OrganismsPostCreate = () => {
  const { user } = useUser(); 
  if (!user) return null;

  const [input, setInput] = useState("")

  //create context
  const ctx = api.useContext();


  // if a mutation is happening, we want to render on a different way 
  // === rerender
  const { mutate, isLoading } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput(""),
      ctx.posts.index.invalidate();
    }, 
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content
      if(errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0])
      }
    }

  });
  
  return (
    <div className="flex gap-4 w-full">
      { user && (
        <AtomsAvatar 
          src={user.imageUrl}
          alt="User profile avatar"
          width={40}
          height={40}
        />
      )}
      <input 
        placeholder="What is happening?" 
        className="grow bg-transparent" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
      />
      <button onClick={() => mutate({content: input})}>Post</button>
    </div>
  )
}

export default OrganismsPostCreate


// メモ
// w-100 → w-full