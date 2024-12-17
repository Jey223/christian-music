import { MdVolumeUp, MdVolumeOff } from "react-icons/md";


function Volume({isExpanded, volume, handleVolumeChange, toggleMute }) {

    const volumeBackground = `linear-gradient(to right, #FACD66 ${volume * 100}%, rgba(255, 255, 255, 0.04) ${volume * 100}%)`;

    return(
        <div className={`  ${isExpanded ? "min-h-[14vh] w-[60%] md:w-[13%] mx-[auto] items-center justify-between md:h-full md:justify-center my-4" : "w-[13%] hidden h-full md:block"}`}>
            <div onClick={toggleMute} className=" w-full h-full flex items-center justify-between ">
                {(volume === 0) ? <MdVolumeOff className="size-5" /> : <MdVolumeUp className="size-5" /> }
                
                <input type="range" max={1} step={0.01} value={volume} onChange={handleVolumeChange} className="w-[calc(100%_-_22px)] overflow-hidden mx-2 h-1 appearance-none cursor-pointer bg-[rgba(255,255,255,0.04)] rounded-[42px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-1 [&::-webkit-slider-thumb]:w-px [&::-webkit-slider-thumb]:bg-[#ea8e05] "
                style={{ background: volumeBackground }}
                />
            </div>
                        
        </div>
    )
}

export default Volume