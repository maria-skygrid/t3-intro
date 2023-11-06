import classNames from "classnames";

type AtomsButtonProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const AtomsButton = ({ 
  children, onClick, className
}: AtomsButtonProps) => (
  <button 
    className={classNames(
      'px-5 py-0.5 rounded-full',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)

export default AtomsButton