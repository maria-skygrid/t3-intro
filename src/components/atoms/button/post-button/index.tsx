import classNames from "classnames";

type AtomsPostButtonProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const AtomsPostButton = ({ 
  children, onClick, className
}: AtomsPostButtonProps) => (
  <button 
    className={classNames(
      'px-5 py-0.5 rounded-full',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)

export default AtomsPostButton