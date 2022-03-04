import { BeakerIcon, HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline'
function SideBar() {
  return (
    <div className="h-screen bg-[#212121] min-w-[250px] flex flex-col text-white cursor-pointer">
        <div className='iconButton'><HomeIcon className='h-6 w-6' /><p>Home</p></div>
        <div className='iconButton'><SearchIcon className='h-6 w-6'/><p>Search</p></div>
        <div className='iconButton'><LibraryIcon className='h-6 w-6'/><p>Library</p></div>
    </div>
  );
}

export default SideBar;