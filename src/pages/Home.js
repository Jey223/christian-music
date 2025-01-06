import MusicCharts from "../components/MusicCharts";
import Children1 from "../components/MusicChildren1";
import Children2 from "../components/MusicChildren2";
import { MdFavorite } from "react-icons/md";
import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react.es";





function Home({popularSongs, newReleaseSongs, playSong, showFooter}) {

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
      "(min-width: 1024px)": {
        slides: { 
          perView: 3, 
          spacing: 10, 
        },
        vertical: true,
      },
    },
    slides: {
      perView: 1.2,
      spacing: 15,
    },
  })

  

  return(
    <main className="w-full md:w-[calc(100%_-_139px)] h-full bg-[#29252c] md:my:0 md:mx-[90px]">  
      <div className={`pt-[70px]  w-[90%] md:w-full my-0 mx-auto ${showFooter ? 'pb-28' : 'pb-5'}`}>
        <div className="w-full lg:h-[373px] lg:flex lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[60%] h-[500px] md:h-96 lg:h-full bg-[#9effa9] rounded-3xl relative bg-cover top-0 right-0" style={{backgroundImage: "url(/images/vector.background.png)"}}>
            <div className="absolute top-0 left-0 h-[500px] md:h-96 lg:h-full w-full bg-[rgba(41,37,44,0.7)] rounded-3xl"></div>
              <div className="w-full h-full md:flex md:flex-row-reverse justify-between absolute top-0 left-0">
                <div className="hidden w-1/2 md:block">
                  <img src="/images/Pexels Photo by Eric Esma.png" className =" w-full h-96 lg:h-full" alt="" />
                </div>
                  
                <div className="w-full md:w-[43%] lg:w-1/2 h-full flex flex-col justify-between p-6 z-10">
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
          </div>

          <div className="mt-8 lg:m-0 lg:w-[37%] lg:h-[373px]">
            <h2 className="py-2.5 lg:pt-0 text-lg text-[#EFEEE0] font-bold">Top Charts</h2>
            <div ref={sliderRef} className="keen-slider lg:h-[90%] lg:min-w-[100%]">
                <MusicCharts  />
            </div>
          </div>
        </div>
   

        <div className="mt-8">
          <h2 className="py-2.5  text-lg text-[#EFEEE0] font-bold">New Release</h2>
          <Children1 newReleaseSongs={newReleaseSongs} playSong={playSong} />
        </div>

        <div className="mt-8">
          <h2 className="py-2.5  text-lg text-[#EFEEE0] font-bold">Popular</h2>
          <Children2 popularSongs={popularSongs} playSong={playSong} />
        </div>
      </div>
    </main>
  )
}

export default Home;