import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import data from "./media-library.json";

console.log("Main Media",data)


const NEW_RELEASE_PERIOD = 3;

// Utility function to calculate the difference in months
const calculateMonthDifference = (releaseDate) => {
  const currentDate = new Date();
  const [year, month] = releaseDate.split("-");
  const release = new Date(year, month - 1);
  return (
    (currentDate.getFullYear() - release.getFullYear()) * 12 + (currentDate.getMonth() - release.getMonth())
  );
};





function App() {
  const [openNav, setOpenNav] = useState(false);
  const [allSongs, setAllSongs] = useState([]);
  const [popular, setPopular] = useState([]); 
  const [newRelease, setNewRelease] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [favouriteSongs, setFavouriteSongs] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  


  useEffect(() => {
    fetch(".media-library.json")
      .then(Response => Response.json())
      .then(data => {
        const musicData = data.media;
        setAllSongs(musicData);

        // Categorize Songs
        const newReleaseSongs = [];
        const popularSongs = [];

        musicData.forEach((song) => {
            const diffInMonth = calculateMonthDifference(song.releaseDate);
            if(diffInMonth <= NEW_RELEASE_PERIOD) {
              newReleaseSongs.push(song);
            } else {
              popularSongs.push(song);
            }
        });

        setNewRelease(newReleaseSongs);
        setPopular(popularSongs);

      })
      .catch(error => console.error('Error fetching JSON:', error))

  }, []);


  
  const shuffleArray = (array) => {
    let shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
    } 
    return shuffledArray;
  }
  

  const handleShuffle = () => {
    if (isShuffling) {
      setIsShuffling(false);
      setShuffledSongs([]);
    } else {
      const shuffled = shuffleArray(allSongs);
      console.log("Shuffled", shuffled);
      setIsShuffling(true);
      setShuffledSongs(shuffled)
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };
  
  
  const playSong = (index) => { 
      setCurrentSongIndex(index);
      setIsPlaying(true); 
      setShowFooter(true);
  };

  const nextSong = () => {
    let nextIndex; 
    if (isShuffling) { 
      nextIndex = (shuffledSongs.findIndex (song => song === allSongs[currentSongIndex] + 1) % shuffledSongs.length);
      setCurrentSongIndex(allSongs.filterIndex(song => song === shuffledSongs[nextIndex]))
    } else { 
      nextIndex = (currentSongIndex + 1) % allSongs.length; setCurrentSongIndex(nextIndex);
    }
    if (isPlaying) {
      setIsPlaying(true);
    }
  };

  const prevSong = () => {
    let prevIndex; 
    if (isShuffling) { 
      prevIndex = (shuffledSongs.findIndex(song => song === allSongs[currentSongIndex]) - 1 + shuffledSongs.length) % shuffledSongs.length; 
      setCurrentSongIndex(allSongs.findIndex(song => song === shuffledSongs[prevIndex])); 
    } else { 
      prevIndex = (currentSongIndex - 1 + allSongs.length) % allSongs.length; 
      setCurrentSongIndex(prevIndex); 
    }
    if (isPlaying) {
      setIsPlaying(true);
    }
  };

  const handleRepeat = () => {
    setIsRepeating(prev => !prev)
  }


   // Load favourites from local storage on initial render
   useEffect(() => {
    // Retrieve favourite Song Id from local storage
    const storedFavouriteIds = JSON.parse(localStorage.getItem('FavouriteSong')) || [];
    console.log("Stored Favourite IDs on Load:", storedFavouriteIds); // Debugging line
    setFavourite(storedFavouriteIds.map(id => Number(id))); // Ensure IDs are numbers
  }, []);

  useEffect(() => {
  // Filter the songs based on the retreived IDs
    const fetchedFavouriteSongs = allSongs.filter(song => {
      return favourite.includes(song.id)});
    console.log("Filtered Favourite Songs:", fetchedFavouriteSongs); // Debugging line
      setFavouriteSongs(fetchedFavouriteSongs);

      if(!fetchedFavouriteSongs) {
        return <div>No data found for the given Id.</div>
      }
  }, [allSongs, favourite]);


  const toggleFavourite = (id) => {
        setFavourite(prevFavourite => {
          let updatedFavourite;
          if (prevFavourite.includes(id)) {
            updatedFavourite = prevFavourite.filter(favouriteId => favouriteId !== id)
            console.log("Removing Favourite ID:", id);
          } else {
            updatedFavourite = [...prevFavourite, id];
            console.log("Adding Favourite ID:", id);
          }
          localStorage.setItem('FavouriteSong', JSON.stringify(updatedFavourite)); // Save to local storage
          return updatedFavourite
        });
  }


  const isFavourite = (id) => favourite.includes(id);


  function toggleNav() {
    setOpenNav(!openNav);
  }

  




  return (
    <div className="box-border text-white w-full bg-[#29252c]">
      {allSongs.length > 0 ? (
        <>
            <PageHeader toggleNav={toggleNav} />
            <AppRouter toggleNav={toggleNav} allSongs={allSongs} openNav={openNav} favouriteSongs={favouriteSongs} playSong={playSong} showFooter={showFooter} handlePlayPause={handlePlayPause} popular={popular} newRelease={newRelease} />
          

          {showFooter && (
            <PageFooter currentSong={isShuffling ? shuffledSongs[currentSongIndex] :  allSongs[currentSongIndex]} nextSong={nextSong} prevSong={prevSong} currentSongIndex={currentSongIndex} isPlaying={isPlaying} handlePlayPause={handlePlayPause} isRepeating={isRepeating} handleRepeat={handleRepeat} setIsPlaying={setIsPlaying} handleShuffle={handleShuffle} isShuffling={isShuffling} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
          )}
            

          <div className="hidden right-0 top-0 fixed md:block md:w-[50px] md:h-full md:bg-[#29252c]"></div>
        </>
      ) : (
        <div>Loading playlists...</div> // Show a loading state while data is being fetched
      )}
    </div>
  );
}

export default App;