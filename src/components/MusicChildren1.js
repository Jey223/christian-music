import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react.es";

function Children1({playlists}) {

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
    <div ref={sliderRef} className="keen-slider w-full">
        {(playlists.newrelease).map((release) => {
              return (
              <div className="keen-slider__slide min-w-[123px] h-44 md:h-52 pb-1">
                <img src={release.cover} alt="" className="w-full h-[123px] md:h-40 rounded-3xl object-cover" />
                <h3 className="text-xs md:text-sm font-normal text-white">{release.name}</h3>
                <p className="mt-1 text-xs font-normal text-slate-400 ">{release.artist}</p>
              </div>
            )
        })}
    </div> 
  )
}

export default Children1;