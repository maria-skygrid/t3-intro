import { FaRegComment } from "react-icons/fa"
import { AiOutlineRetweet } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { GiHistogram } from "react-icons/gi"
import { LuShare } from "react-icons/lu"
import AtomsRoundButton from "~/components/atoms/button/round-button";

const MoleculesPostIcons = () => (
  <div className="text-sm mt-3 flex justify-between flex-1">
    <AtomsRoundButton
      className="hover:text-sky-500 hover:bg-sky-100/20 "
    >
      <FaRegComment />
    </AtomsRoundButton>

    <AtomsRoundButton
      className="hover:text-green-500 hover:bg-green-100/20 "
    >
      <AiOutlineRetweet />
    </AtomsRoundButton>

    <AtomsRoundButton
      className="hover:text-red-500 hover:bg-red-100/20 "
    >
      <AiOutlineHeart />
    </AtomsRoundButton>

    <AtomsRoundButton
      className="hover:text-sky-500 hover:bg-sky-100/20 "
    >
      <GiHistogram />
    </AtomsRoundButton>

    <AtomsRoundButton
      className="hover:text-sky-500 hover:bg-sky-100/20 "
    >
      <LuShare />
    </AtomsRoundButton>
  </div>
)

export default MoleculesPostIcons