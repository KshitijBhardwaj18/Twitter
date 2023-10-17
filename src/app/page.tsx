import { BsSearch } from "react-icons/bs";

import LeftSidebar from "./components/LeftSidebar";

import MainComponent from "./components/MainComponent";

const Home = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center relative bg-black text-white ">
      <div className="max-w-[72vw] w-full h-full flex relative ">
        {/* left sidebar for navigation */}
        <LeftSidebar />

        <MainComponent />

        <section className=" w-[25%] sticky mt-4 top-4  flex flex-col items-stretch h-screen px-6  ">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="SearchBox"
                type="text"
                placeholder="Search Twitter"
                className="w-full h-full focus:border-primary focus:border  rounded-xl   py-4 pl-14 pr-4 outline-none bg-neutral-900/90  placeholder:text-sm  peer "
              />

              <label
                htmlFor="SearchBox"
                className="absolute top-0 left-0  h-full flex items-center justify-center p-4 peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5 " />
              </label>
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
