import { FaRegComment } from "react-icons/fa"
import { AiOutlineRetweet } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { GiHistogram } from "react-icons/gi"
import { LuShare } from "react-icons/lu"
import AtomsRoundButton from "~/components/atoms/button/round-button";

const MoleculesPostIcons = () => {

  const PostIconsArray = [
    {
      id: 1, 
      icon: FaRegComment,
      buttonStyle: 'hover:text-sky-500 hover:bg-sky-100/20'
    },
    {
      id: 2, 
      icon: AiOutlineRetweet,
      buttonStyle: 'hover:text-green-500 hover:bg-green-100/20'
    }, 
    {
      id: 3, 
      icon: AiOutlineHeart,
      buttonStyle: 'hover:text-red-500 hover:bg-red-100/20'
    }, 
    {
      id: 4, 
      icon: GiHistogram,
      buttonStyle: 'hover:text-sky-500 hover:bg-sky-100/20'
    }, 
    {
      id: 5, 
      icon: LuShare,
      buttonStyle: 'hover:text-sky-500 hover:bg-sky-100/20'
    }
  ]

  return (
    <div className="text-sm mt-3 flex justify-between flex-1">
      {
        PostIconsArray.map(({icon: Icon, buttonStyle, id}) => (
          <AtomsRoundButton key={id} className={buttonStyle}>
            <Icon />
          </AtomsRoundButton>
        ))
      }
    </div>
  )
}

export default MoleculesPostIcons