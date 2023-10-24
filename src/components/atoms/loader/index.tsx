import ClipLoader from "react-spinners/ClipLoader"

const AtomsLoader = () => {
  return (
    <div 
      role="status"
      className="flex justify-center p-8"
    >
      <ClipLoader
        color="bg-gray-400"
        loading={true}
        size={50}
        speedMultiplier={0.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default AtomsLoader