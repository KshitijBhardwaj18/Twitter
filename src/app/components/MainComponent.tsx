import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
  BsDot,
  BsChat,
} from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/Ai";

import { IoStatsChart, IoShareOutline } from "react-icons/io5";
import Link from "next/link";

const MainComponent = () => {
  return (
    <main className="   felx w-[60%] max-w-[700px]  h-full min-h-screen flex-col border-l-[0.5px] border-r border-gray-600 ">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10  sticky top-0  ">
            Home
          </h1>

          <div className=" px-4 border-b-[0.5px] border-t-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600  relative  ">
            <div className="w-10 h-10 bg-slate-400 rounded-full felx-none"></div>
            <div className="flex flex-col w-full  h-full ">
              <input
                type="text"
                className="w-full h-full  bg-transparent outline-none border-none p-4 text-2xl placeholder:text-gray-600"
                placeholder="Whats Happening"
              />

              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]  ">
                  <button className="rounded-full  bg-primary px-4 py-2  w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold ">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border-b-[0.5px]  border-gray-600 p-4  flex  flex-col  "
              >
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
                <div className="flex flex-col my-1">
                  <div className="flex items-center w-full  justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="font-bold">Club of coders</div>
                      <div className="text-gray-500">@clubofcoders</div>
                      <div className="text-gray-500">
                        <BsDot />
                      </div>
                      <div className="text-gray-500">1 hour ago</div>
                      
                    </div>
                    <div>
                        <BsThreeDots />
                      </div>
                  </div>
                  <div className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    obcaecati neque soluta nobis reprehenderit voluptatum
                    aliquam sint mollitia iure qui iste nulla tempora dolorem
                    doloremque ab, facilis quos eum rerum.
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-5 "></div>

                  <div className="flex items-center justify-evenly space-x-20  my-4 w-full">
                    <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3">
                      <BsChat />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3">
                      <AiOutlineRetweet />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3">
                      <AiOutlineHeart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3">
                      <IoStatsChart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3">
                      <IoShareOutline />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainComponent
