import { MdPlayArrow, MdPause } from "react-icons/md";
// import { useEffect } from "react";
// import { useEffect ,useRef } from "react";



function FavouritePage({favouriteSongs, showFooter, handlePlayPause, playSong, isPlaying}) {

//   const audioElement = useRef(null);

//   // Play or Pause
//   useEffect(() => {
//     const audio = audioElement.current
//     if (isPlaying) {
//         audio.play().catch(error => console.log('Error playing audio:', error));
//     } else {
//         audio.pause();
//     }
// }, [isPlaying]);


    console.log(favouriteSongs)

    console.log(isPlaying);

//     console.log(allSongs)

//     console.log(JSON.stringify(allSongs, null, 2));

//     // let userData;
//     // useEffect(() => {
//     // Retrieve favourite songs from local storage 
//     const storedFavouriteIds = localStorage.getItem('FavouriteSong');
//     console.log('Data Id from Locla Storage', storedFavouriteIds);
    
//     // if (storedFavouriteIds) {
//     //   setFavourite(JSON.parse(storedFavouriteIds));
//     // }
//     if (!allSongs || !Array.isArray(allSongs)) {
//         return <div>No data Available.</div>
//     }

//     const userData = allSongs.find(item => item.id === Number(storedFavouriteIds) )
// //   }, []);

//     console.log("User Data: ",userData)

//     if (!userData) {
//         return <div>No data found for the given Id.</div>
//     }

    return (

        <div className="w-full h-full md:w-[calc(100%_-_139px)] max-h-full lg:min-h-screen bg-[#29252c] md:my:0 md:mx-[90px]">
          
          <div className={`pt-[70px] pb-28 w-[90%] md:w-full my-0 mx-auto ${showFooter ? 'pb-28' : 'pb-5'}`}>
                <div className="flex">
                    <button className="w-[180px] md:w-[120px] h-[37px] mr-[20px] bg-[#ea8e05] p-[10px] rounded-[25px] border border-[#EFEEE0] text-[12px] flex justify-center text-[#EFEEE0]">My Collections</button>
                    <button className="w-[180px] md:w-[120px] h-[37px] mr-[20px] p-[10px] rounded-[25px] border border-[#EFEEE0] text-[12px] flex justify-center text-[#EFEEE0]">Likes</button>
                </div>
                <div  className="mt-[30px] w-full flex flex-col md:flex-row md:flex-wrap gap-[20px]">
                {favouriteSongs.length > 0 ? 
                (
                    favouriteSongs.map(song => (
                       
                            <div key={song.id} className="w-full md:w-[213px] h-[230px] md:h-[234px] relative rounded-[20px] overflow-hidden items-center">
                                <img src={song.cover} alt="muspic" className="w-full h-full absolute duration-500 ease-linear delay-0 transition-all" />
                                {/* <div className="bg-[rgba(0,0,0,0.5)] h-full w-full relative z-2"></div> */}
                                <div className="absolute w-full h-full flex justify-between items-end p-[20px] bg-[rgba(0,0,0,0.5)] z-10">
                                    <div className="w-1/2 md:w-[70%] text-[#EFEEE0] translate-y-[10px] duration-500 ease-in delay-0 transition-all">
                                        <h2 className="text-xl md:text-lg p-0">{song.name}</h2>
                                        <p className="text-xs">{song.artist}</p>
                                        
                                    </div>
                                    {/* translate-x-[60px]  */}
                                    <div className='w-[40px] h-[40px] bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten duration-500 ease-linear delay-0 transition-all'>
                                    {isPlaying ?  <MdPause className="size-7 md:size-5"/>  : <MdPlayArrow className="size-7 md:size-5"/> }
                                    {/* text-[#ea8e05] */}
                                    </div>
                                    
                                </div>
                            </div>

                            

                    ))
                ) : <div>No Favourite</div>}
            </div>

                
{/* <div className="w-full md:w-[213px] h-[230px] md:h-[234px] relative rounded-[20px] overflow-hidden">
                                <img src="/images/ms3(2).png" alt="muspic" className="w-full h-full absolute" />
                                <div className="relative w-full h-full flex justify-between items-end p-[20px]">
                                    <div className="w-1/2 md:w-[70%] text-[#EFEEE0]">
                                        <h2 className="text-xl md:text-lg p-0">Music name</h2>
                                        <p className="text-xs">Artist</p>
                                        <span className="text-sm pt-[20px] text-white">200 likes</span>
                                    </div>
                                    <div className='w-[40px] h-[40px] bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten'>
                                    <MdPlayArrow className="size-7 md:size-5 " />
                                </div>
                                    
                                    </div>
                                </div>
    
                                <div className="w-full md:w-[213px] h-[230px] md:h-[234px] relative rounded-[20px] overflow-hidden">
                                    <img src="/images/ms3(2).png" alt="muspic" className="w-full h-full absolute" />
                                    <div className="relative w-full h-full flex justify-between items-end p-[20px]">
                                        <div className="w-1/2 md:w-[70%] text-[#EFEEE0]">
                                            <h2 className="text-xl md:text-lg p-0">Music name</h2>
                                            <p className="text-xs">Artist</p>
                                            <span className="text-sm pt-[20px] text-white">200 likes</span>
                                        </div>
                                        <div className='w-[40px] h-[40px] bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten'>
                                        <MdPlayArrow className="size-7 md:size-5 " />
                                    </div>
                                        
                                    </div>
                                </div> */}
                
            </div>
            
        </div>
    )

}

export default FavouritePage;