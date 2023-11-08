import classNames from "classnames";

type AtomsButtonRound = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const AtomsButtonRound = ({
  children, 
  onClick,
  className
}: AtomsButtonRound) => (
  <button 
    className={classNames(
      'text-white hover:cursor-pointer px-2 py-2 rounded-full transition-colors',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)

export default AtomsButtonRound