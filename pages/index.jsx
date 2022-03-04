import Header from "../components/Header";
import MainBody from "../components/MainBody";
import SideBar from "../components/SideBar";

export default function Home(){
  return(
    <div>
      <Header />
      <div className="flex">
      <SideBar />
      <MainBody />
      </div>
    </div>
  );
}