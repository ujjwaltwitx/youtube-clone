import EachTag from "./EachTag"

function TagsSlider() {
  return (
    <div className="h-50 bg-[#212121] flex p-2 gap-x-2 top-16 sticky border-b-[1px] border-t-[1px] border-gray-600 flex-nowrap">
        <EachTag title={'F1 Today'}/>
        <EachTag title={'MotoGp'}/>
        <EachTag title={'SpiderMan No Way Home'}/>
        <EachTag title={'Pratap Ujjwal'}/>
    </div>
  )
}

export default TagsSlider;