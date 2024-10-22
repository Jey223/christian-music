import { useState, useEffect } from "react";
import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react.es";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import MusicCharts from "./components/MusicCharts";
import Children1 from "./components/MusicChildren1";
import Children2 from "./components/MusicChildren2";
import { MdMenu, MdSearch, MdFavorite } from "react-icons/md";
import data from "./songs.json";




function HomePage() {

  const [openNav, setOpenNav] = useState(false);

  function toggleNav() {
    setOpenNav(!openNav)
  }
  console.log(openNav, setOpenNav)
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    setCharts(data.musiccharts);
  }, [])

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { 
          perView: 1.6, 
          spacing: 15 
        },
      },
      "(min-width: 768px)": {
        slides: { 
          perView: 2.5, 
          spacing: 20 
        },
      },
    },
    slides: {
      perView: 1.2,
      spacing: 15,
    },
  })

  return (
    <div className="box-border text-white w-full h-screen relative">
      <div className="flex">
        <Aside nav={openNav} toggleNav={toggleNav} />
        <main className="w-full h-full bg-[#29252c]">
          <div className="w-full h-[70px] flex px-4 justify-between items-center fixed bg-[rgba(41,37,44,0.97)] z-20">
            <div className="flex w-16 justify-between items-center h-8">
              <MdMenu size="1.8em" onClick={toggleNav} />
              <img src="/images/logo.png" className="w-6 h-6" alt="logo" />
            </div>
            <MdSearch size="1.8em" color="gray" />
          </div>
          <div className="mt-[70px] mb-28 w-[90%] my-0 mx-auto">
            <div className="w-full h-[500px] bg-[#9effa9] rounded-3xl p-6 relative bg-cover top-0 right-0" style={{backgroundImage: "url(/images/vector.background.png)"}}>
              <div className="absolute top-0 left-0 h-[500px] w-full bg-[rgba(41,37,44,0.7)] rounded-3xl"></div>
              <div className="hidden left-0 top-0 absolute z-0">
                <img src="/images/main-backgroundimage.png" className =" object-contain w-96 h-96" alt="" />
              </div>
              
              <div className="w-full h-full flex flex-col justify-between z-10 relative">
                <p className="text-white text-xs font-normal">Christian Music</p>
                <div className="">
                  <h1 className="mb-4 text-2xl font-bold text-white">
                    CHRISTIAN HITS
                  </h1>
                  <p className="mb-9 text-white text-xs font-normal">
                    Praises, Prayer music, Spirit chants, Redemption music and so much more.
                  </p>
                  <div className="flex items-center">
                    <div className="relative flex">
                      <img src="/images/Ellipse 2.png" alt="" className="w-9 h-9 object-cover"/>
                      <img src="/images/Ellipse 3.png" alt="" className="absolute w-9 h-9 object-cover left-4" />
                      <img src="/images/Ellipse 4.png" alt="" className="absolute w-9 h-9 object-cover left-[32px]" />
                      <img src="/images/Ellipse 5.png" alt="" className="absolute w-9 h-9 object-cover left-[47px]" />
                      <img src="/images/Ellipse 6.png" alt="" className="absolute w-9 h-9 object-cover left-[62px]" />
                    </div>
                    <MdFavorite className="w-7 h-7 ml-16" />
                    <p className="text-xl text-white font-normal">33 Likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="py-2.5 text-lg text-[#EFEEE0] font-bold">Top Charts</h2>
              <div ref={sliderRef} className="keen-slider w-full">
                {charts.map((chart, index) => {
                    return <MusicCharts key={index} arr={chart}  />
                })}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="py-2.5  text-lg text-[#EFEEE0] font-bold">New Release</h2>
              <Children1 />
            </div>

            <div className="mt-8">
              <h2 className="py-2.5  text-lg text-[#EFEEE0] font-bold">Popular</h2>
              <Children2 />
            </div>

           



          {/* <div className="mt-8">
              <h2 className="p-2.5 text-lg text-[#EFEEE0] font-bold">New Release</h2>
              <div ref={sliderRef} className="keen-slider flex w-full items-center">
                // {newRelease.map((chart, index) => {
                    return <NewChildMusic key={index} arr={chart} Icon={chart.likeicon} />
                })}
              </div>
          </div> */}


          </div>
          
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;