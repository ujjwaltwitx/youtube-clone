function EachVideoCard() {
  return (
    <div className="h-[272px] w-[316px] hover:bg-[#303030] text-white cursor-pointer mx-4 my-4"> 
        <img src="https://i.ytimg.com/vi/uAD0-3BltHk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmMJdMVMohvGIgVtJMIg9b3VdpYg" alt="" className="h-[177px] w-[316px]" />
        <div className="flex items-center gap-x-[6px] pr-1 mt-2">
            <img src="https://i.ytimg.com/vi/Jq-d4Kl8Xh4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRNi4MlPcSABmiblTnIan2SdHfOA" alt="" className="h-[36px] w-[36px] rounded-full" />
            <p className="font-medium text-ellipsis break-words h-full">Best Coding Platforms for Beginners In Todays </p>
        </div>
        <div className="ml-[42px] text-sm">
            <p>Music Club</p>
            <p>252k views . 2 days ago</p>
        </div>
    </div>
  )
}

export default EachVideoCard;