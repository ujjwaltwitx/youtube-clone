import EachVideoCard from "./EachVideoCard"

function VideoSection() {
  return (
    <div className="h-full w-full bg-black flex">
        <EachVideoCard />
        <EachVideoCard />
    </div>
  )
}

export default VideoSection