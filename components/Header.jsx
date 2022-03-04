import { BellIcon, CollectionIcon, MenuIcon, PlusCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid"

export default function Header() {
    return (
        <div className="flex h-16 bg-[#212121] justify-between items-center sticky top-0 z-50">
            <div className="flex items-center px-4 gap-x-2 w-1/6">
                <MenuIcon className="h-6 w-6 text-white" />
                <div className="flex items-center gap-x-[-2px]">
                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                    <p className="text-white font-extrabold tracking-[-2px] font-mono text-2xl">YouTube</p>
                </div>
            </div>

            <div className="w-3/6 justify-center flex items-center">
                <input type="text" placeholder="Search" className="outline-none border-[1px] bg-black border-gray-700 text-white w-2/3 p-2" />
                <div className="bg-[#383838] p-2">
                    <SearchIcon className="text-white w-7 h-7"/>
                </div>
                <div className=" bg-black p-2 rounded-full ml-2">
                    <MicrophoneIcon className="text-white h-7 w-7"/>
                </div>
            </div>
            <div className="w-1/6 flex justify-end px-4 gap-x-5 items-center">
                <PlusCircleIcon className="h-7 w-7 text-white"/>
                <CollectionIcon className="h-7 w-7 text-white"/>
                <BellIcon className="h-7 w-7 text-white"/>
                <img src="https://images.unsplash.com/photo-1644982648791-a010e61aa845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-9 w-9 rounded-full border-4 border-white" />
            </div>
        </div>
    );
}