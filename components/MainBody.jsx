import TagsSlider from "./TagsSlider"
import VideoSection from "./VideoSection"

function MainBody() {
  return (
    <div className="flex flex-col relative bg-[#212121] w-screen">
        <TagsSlider />
        <VideoSection />
    </div>
  )
}

export default MainBody