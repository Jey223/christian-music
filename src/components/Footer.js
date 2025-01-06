import { BiChevronDown, BiChevronUp} from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Controls from "./controls";
import Volume from "./volume";


function Footer({currentSong, nextSong , prevSong, isPlaying, handlePlayPause, isRepeating, handleRepeat, setIsPlaying, handleShuffle, isShuffling, isFavourite, toggleFavourite }) {

    
  const audioElement = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); //Default Volume set to 50%



//   Load Music
    useEffect(() => {
         const audio = audioElement.current;
        //  const currentSong = songs[currentSongIndex] 
         if (audio && currentSong) { 
            audio.src = currentSong.path; 
            audio.load(); 
            audio.oncanplaythrough = () => { 
                if (isPlaying) { 
                    audio.play().catch(error => console.error('Error playing audio:', error)); 
                } 
            }; 
        } 
    }, [currentSong, isPlaying]);


// Play or Pause
    useEffect(() => {
        const audio = audioElement.current
        if (isPlaying) {
            audio.play().catch(error => console.log('Error playing audio:', error));
        } else {
            audio.pause();
        }
    }, [isPlaying]);


// Repeat Music and Play next Music
    useEffect (() => {
        const audio = audioElement.current;
        const handleEnded = () => {
            if(isRepeating) {
                audio.currentTime = 0; //Repeat current music
                audio.play().catch(error => console.log('Error playing audio:', error));
                if(isPlaying) {
                    setIsPlaying(true)
                }
            } else {
                nextSong(); //Move to the next song when the current one ends
            }
        };
        if(audio) {
            audio.addEventListener('ended', handleEnded);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('ended', handleEnded)
            }
        }
    }, [isRepeating, nextSong, isPlaying, setIsPlaying])

// Mobile Expanded PlayList
    const toggleHeight = () => {
        setIsExpanded(!isExpanded);
    }


// Progress Bar
    const handleSeek = (e) => {
        const newTime = e.target.value;
        audioElement.current.currentTime = newTime;
        setCurrentTime(newTime)
    }

    useEffect(() => {
        const audio = audioElement.current;

        const updateDuration = () => {
            if (audio.duration) {
                setDuration(audio.duration);
            }
        };

        const updateCurrentTime = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('timeupdate', updateCurrentTime);

        return () => {
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('timeupdate', updateCurrentTime);
        };
    }, []);

    const musicBarWidth = (currentTime / duration) * 100; 

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return(`${String(minutes).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`)
    }

// Volume
    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    }

    useEffect(() => {
        const audio = audioElement.current;
        if(audio) {
            audio.volume = volume;
        }
    }, [volume]);

    const toggleMute = () => {
        setVolume(preVolume => preVolume === 0 ? 0.5 : 0);  // Toggle between mute and 50% volume
    }

    // console.log(currentSong.id)
    
    return (
        <>
            <audio ref={audioElement} src={currentSong?.path} />
            <div className={`w-full fixed bottom-0 bg-[rgba(29,25,30,0.7)] backdrop-blur-lg z-50 transition-all duration-1000 border border-[rgba(80,72,86,0.1)] ease-in-out ${ isExpanded ? ' max-h-screen md:h-[98px] py-6 px-6 top-6 md:top-auto md:p-0 md:left-0' : ' left-0'}` }>
                <div className="w-6 h-6 bg-[rgba(41,37,44,1)] backdrop-blur-lg border-2 border-[rgba(80,72,86,1)] rounded-[5px] absolute right-[10px] top-[-9px] cursor-pointer flex justify-center items-center md:hidden" onClick={toggleHeight}>{isExpanded ? <BiChevronDown className="w-6 h-6 text-[rgba(239,238,224,0.7)] cursor-pointer" /> : <BiChevronUp className="w-6 h-6 text-[rgba(239,238,224,0.7)] cursor-pointer" /> }     
                </div>
                <div className={`h-full ${isExpanded ? "w-full md:flex md:py-5 md:w-[calc(100%_-_98px)] md:pl-[37px] md:mx-auto md:my-0 md:justify-between md:items-center " :"flex py-5 w-[90%] md:w-[calc(100%_-_98px)] md:pl-[37px] mx-auto my-0 justify-between items-center"}`}>

                    <div className={ isExpanded ? "show md:hidden flex justify-between items-center absolute top-[-10px]" :"hidden"}>
                      <MdFavorite onClick={() => toggleFavourite(currentSong.id)} className={`"w-6 h-6  cursor-pointer " ${isFavourite(currentSong.id) ? 'text-red-500' :  'text-[#ea8e05]' }`}/>
                    </div>

                    
                    <div className={isExpanded ? "md:flex md-w-[200px] md:items-center" :"flex w-48 md:w-[200px] items-center"}>

                        <div className={`overflow-hidden  ${isExpanded ? "my-8 w-[150px] md:w-14 md:h-14 md:border-0 md:rounded-2xl  h-[150px] mx-auto border-2 border-black rounded-[50%]" :  "w-14 h-14 rounded-2xl "}`}>
                            <img src={currentSong.cover} className={`w-full h-full ${isPlaying && isExpanded ? " animate-playRotate md:animate-none" : " animate-none"}`} alt="artistImage"/>
                        </div>
                       
                        <div className={isExpanded ? "justify-self-center text-center md:justify-self-start md:text-left md:pl-5" : "pl-5"}>
                            <h2 className="text-base font-bold p-0">{currentSong.name}</h2>
                            <p className="text-xs font-bold">{currentSong.artist}</p>
                        </div>
                    </div>
                    
                    <Controls prevSong={prevSong} nextSong={nextSong} handlePlayPause={handlePlayPause} isPlaying={isPlaying} isExpanded={isExpanded} currentTime={currentTime} handleSeek={handleSeek} musicBarWidth={musicBarWidth} duration={duration} handleRepeat={handleRepeat} isRepeating={isRepeating} handleShuffle={handleShuffle} isShuffling={isShuffling} formatTime={formatTime}  />
                    
                    <Volume isExpanded={isExpanded} volume={volume} handleVolumeChange={handleVolumeChange} toggleMute={toggleMute} />
                
                </div>
            </div>

            {/* <PlayPage isPlaying={isPlaying} togglePlayPause={togglePlayPause} songs={songs} currentSongIndex={currentSongIndex} /> */}
        </>
        
    )
   
}

export default Footer;