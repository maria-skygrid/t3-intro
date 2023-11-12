import classNames from "classnames";

type AtomsButtonBaseProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const AtomsButtonBase = ({ 
  children, onClick, className
}: AtomsButtonBaseProps) => (
  <button 
    className={classNames(
      'text-sm font-bold rounded-full transition-colors',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)

export default AtomsButtonBase