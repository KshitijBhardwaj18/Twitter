import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBell, BsBookmark, BsTwitter,BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import Link from "next/link";

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

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[25%]  xl:flex flex-col items-stretch h-screen hidden">
    <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          className="hover:bg-white/10 text-xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
          href={
            '/'
          }
          key={item.title}
        >
          <div>
            <item.icon />
          </div>
          {item.title !== "Twitter" && <div>{item.title}</div>}
        </Link>
      ))}
      <button className="rounded-full m-4 bg-primary p-2 text-lg text-center hover:bg-opacity-70 transition duration-200">
        Tweet
      </button>
    </div>
    <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-slate-400 w-10 h-10"></div>
        <div className="text-left text-sm">
          <div className="font-semibold">
            Kshitij Bhardwaj
          </div>
          <div className="">@Bhardwaj1242</div>
        </div>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </button>
  </section>
  )
}

export default LeftSidebar
