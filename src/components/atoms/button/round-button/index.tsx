import classNames from "classnames";

type AtomsRoundButton = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const AtomsRoundButton = ({
  children, 
  onClick,
  className
}: AtomsRoundButton) => (
  <button 
    className={classNames(
      'text-white hover:cursor-pointer px-2 py-2 rounded-full transition-colors',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)

export default AtomsRoundButton