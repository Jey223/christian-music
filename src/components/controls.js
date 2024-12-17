import { MdPlayArrow, MdPause , MdFastForward, MdFastRewind, MdRepeatOne } from "react-icons/md";
import {BiShuffle} from "react-icons/bi";
import { useRef } from "react";





function Controls({prevSong, handlePlayPause, nextSong,isPlaying, isExpanded, currentTime, duration, handleSeek, musicBarWidth, handleRepeat, isRepeating, handleShuffle, isShuffling, formatTime}) {

  const progressBarRef = useRef(null);

    return(
        <div className={`flex md:w-[calc(100%_-_(200px_+_13%))] ${isExpanded ? "flex-col-reverse md:h-full  md:flex-col md:items-center md:justify-between " : "w-[30%] h-full  flex-col items-center justify-between"}`}>
            <div className={`flex items-center ${isExpanded ? " justify-center mt-1 md:mt-0 md:w-[60%] md:lg:w-[35%] md:justify-between md:h-[35px] md:mb-2" :"w-full md:w-[60%] lg:w-[35%] h-full md:h-[35px]  justify-between md:mb-2"}`}>
                <BiShuffle className={`hidden md:block size-5 color-zinc-800 cursor-pointer text-gray-500 hover:text-gray-200 ${isShuffling ? 'text-gray-200' : 'text-gray-500'}`} onClick={handleShuffle} />
                <MdFastRewind className={`text-gray-500 hover:text-gray-200 md:cursor-pointer  ${isExpanded ? " text-2xl mx-4 md:mx-0 md:size-5 " : "hidden md:block size-5"}`} onClick={prevSong} />
                <button className={`bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten md:h-8 md:w-8  ${isExpanded ? "w-8 h-8  mx-4 " : "w-10  h-10  "}`} onClick={handlePlayPause}>
                {isPlaying ?  <MdPause className={isExpanded ? "text-2xl md:size-7" :"size-7 md:size-5"} />  : <MdPlayArrow className={isExpanded ? "text-2xl" :"size-7 md:size-5"} /> }
                </button>
                <MdFastForward className={`md:cursor-pointer text-gray-500 hover:text-gray-200  ${isExpanded ? "text-2xl md:size-7 mx-4 md:mx-0 " : "size-7 md:size-5"}`} onClick={nextSong} />
                <MdRepeatOne onClick={handleRepeat} className={`hidden md:block size-5 md:cursor-pointer text-gray-500 hover:text-gray-200  ${isRepeating ? 'text-gray-200' : 'text-gray-500'}`}  />
            </div>
            <div className={isExpanded ? "w-full my-4 md:my-0 flex md:block justify-between items-center flex-wrap" :"hidden w-full md:block"}>
                <div className={isExpanded ? "w-full mb-2 md:mb-0" : ""}>
                    <input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} className="w-full h-1 outline-none appearance-none bg-[rgba(255,255,255,0.04)] cursor-pointer transition-width duration-200 ease-in-out rounded-[50px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#ea8e05] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:ease-in-out"
                    style={{background: `linear-gradient(to right, #FACD66 ${musicBarWidth}%, rgba(255, 255, 255, 0.04) ${musicBarWidth}%)`}} ref={progressBarRef} />
                </div>

                <span className={isExpanded ? "text-xs md:hidden" : "hidden"}>{currentTime > 0 ? formatTime(currentTime) : "00 : 00"}</span>
                <span className={isExpanded ? "text-xs md:hidden" : "hidden"}>{formatTime(duration)}</span>
                
            </div>
        </div>
    )
}



export default Controls;