import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react.es";

function Children1({newRelease, popular, playSong}) {


  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { 
          perView: 2.6, 
          spacing: 20 
        },
      },
      "(min-width: 768px)": {
        slides: { 
          perView: 3.8, 
          spacing: 20 
        },
      },
      "(min-width: 1024px)": {
        slides: { 
          perView: 5, 
          spacing: 20 
        },
      },
    },
    slides: {
      perView: 2.3,
      spacing: 20,
    },
  })

  return (
    <>
      <div className="mt-8">
        <h2 className="py-2.5  text-lg text-[#EFEEE0] font-bold">New Release</h2>
        <div ref={sliderRef} className="keen-slider w-full">
          {newRelease.map((release, index) => {
                return (
                <div key={index} className="keen-slider__slide min-w-[123px] h-44 md:h-52 pb-1" onClick={() => playSong(index, 'newrelease')}>
                  <img src={release.cover} alt="" className="w-full h-[123px] md:h-40 rounded-3xl object-cover" />
                  <h3 className="text-xs md:text-sm font-normal text-white">{release.name}</h3>
                  <p className="mt-1 text-xs font-normal text-slate-400 ">{release.artist}</p>
                </div>
              )
          })}
        </div>
      </div>


      <div className="mt-8">
        <h2 className="py-2.5  text-lg text-[#EFEEE0] font-bold">Popular</h2>

        <div ref={sliderRef} className="keen-slider w-full">
          {popular.map((popular, index) => {
            return (
              <div key={index} className="keen-slider__slide min-w-[123px] h-44 md:h-52 pb-1" onClick={() => {playSong(index, 'popular')}}>
                <img src={popular.cover} alt="" className="w-full h-[123px] md:h-40 rounded-3xl object-cover" />
                <h3 className="text-xs md:text-sm font-normal text-white">{popular.name}</h3>
                <p className="mt-1 text-xs font-normal text-slate-400">{popular.artist}</p>
              </div>
            )
          })}
        </div>
      </div>
    
      
    
      
    </>
    
  )
}

export default Children1;