import { BiHeart } from "react-icons/bi";


function MusicCharts({arr, key}) {
    console.log(key);
    return (
        <div className="keen-slider__slide min-w-64 h-54 p-4 flex bg-[#1c191e] rounded-[20px] justify-between">
          <div>
            <img src={arr.imgchart} alt="" className="w-20 h-20 object-cover rounded-xl" />
            <div className="mt-2.5">
              <h3 className="text-sm font-bold text-white cursor-pointer">{arr.musictype}</h3>
              <p className="text-xs text-slate-400 mt-1 font-bold">{arr.artist}</p>
              <span className="mt-3.5 text-sm font-bold inline-block">{arr.time}</span>
            </div>
          </div>
          <div>
            <div className="w-10 h-10 border border-[#9effa9] flex items-center justify-center rounded-full">
              <BiHeart className="w-6 h-6 text-[#ea8e05]"/>
            </div>
          </div>
        </div>
    )
}


export default MusicCharts