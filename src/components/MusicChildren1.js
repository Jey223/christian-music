import { useState, useEffect } from "react";
import "keen-slider/keen-slider.css";
import { useKeenSlider } from "keen-slider/react.es";
import data from "../songs.json";

function Children1() {

  const [newrelease, setNewRelease] = useState([]);
//   const [popular, setPopular] = useState([]);

  useEffect(() => {
    setNewRelease(data.newrelease);
    // setPopular(data.popular)
  }, [])

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
              perView: 2.5, 
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
            {newrelease.map((release) => {
                 return (
                 <div className="keen-slider__slide min-w-[123px] h-44 pb-1">
                    <img src={release.cover} alt="" className="w-full h-[123px] rounded-3xl object-cover" />
                    <h3 className="text-xs font-normal text-white">{release.name}</h3>
                    <p className="mt-1 text-xs font-normal text-slate-400">{release.artist}</p>
                 </div>
                )
            })}

        </div>
        
    )
}

export default Children1;