import classNames from "classnames";

type AtomsButtonPostProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const AtomsButtonPost = ({ 
  children, onClick, className
}: AtomsButtonPostProps) => (
  <button 
    className={classNames(
      'px-5 py-0.5 rounded-full',
      className
    )}
    onClick={onClick}>
    {children}
  </button>
)

export default AtomsButtonPost