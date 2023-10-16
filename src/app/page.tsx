import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBell, BsBookmark, BsTwitter,BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import Link from "next/link";

import LeftSidebar from "./components/LeftSidebar";

const NAVIGATION_ITEMS = [
  { title: "Twitter", icon: BsTwitter },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  { title: "Messages", icon: BsEnvelope },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const Home = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center relative bg-black text-white ">
      <div className="max-w-screen-lg w-full h-full flex relative ">
        {/* left sidebar for navigation */}
       <LeftSidebar/>
        
        <main className="ml-[275px] felx w-[600px] g-full flex-col">
          <h1>Home</h1>
        </main>
      </div>
    </div>
  );
};

export default Home;
