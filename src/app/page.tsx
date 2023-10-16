

import LeftSidebar from "./components/LeftSidebar";

import MainComponent from "./components/MainComponent";

const Home = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center relative bg-black text-white ">
      <div className="max-w-screen-2xl w-full h-full flex relative ">
        {/* left sidebar for navigation */}
        <LeftSidebar />

        <MainComponent/>

        
      </div>
    </div>
  );
};

export default Home;
