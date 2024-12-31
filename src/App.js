import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";





function App() {
  const [openNav, setOpenNav] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [favouriteSongs, setFavouriteSongs] = useState([]);
  // const [previousSongIndex, setPreviousSongIndex] = useState(null);



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
  }, [allSongs, favourite])


  const toggleFavourite = (id) => {
        setFavourite(prevFavourite => {
          let updatedFavourite;
          if (prevFavourite.includes(id)) {
            updatedFavourite = prevFavourite.filter(favouriteId => favouriteId !== id)
            console.log(id)
          } else {
            updatedFavourite = [...prevFavourite, id];
            console.log('update id')
          }
          
          return updatedFavourite
        });
  }


  useEffect(() => {
    localStorage.setItem('FavouriteSong', JSON.stringify(favourite));
  }, [favourite])


  



  // // Fetch favourite songs based on IDs in local storage
  // useEffect(() => {
  //   const fetchedFavouriteSongs = allSongs.filter(song => favourite.includes(allSongs.id));
  //   setFavouriteSongs(fetchedFavouriteSongs);
  // }, [favourite, allSongs]);

  

  const isFavourite = (id) => favourite.includes(id);

  console.log(favourite);

  // // Filter Songs to get only the favourite ones
  // const likedSongs = allSongs.filter(song => favourite.includes(allSongs[currentSongIndex].id) )


  function toggleNav() {
    setOpenNav(!openNav);
  }

  
  useEffect(() => {
    fetch("/songs.json")
      .then(Response => Response.json())
      .then(data => {
        setPlaylists(data);
        const songsArray = Object.values(data).flat();
        setAllSongs(songsArray);
        setShuffledSongs(songsArray); // Initialize shuffledSongs to the same as allSongs
        // console.log('Fetched data: ',JSON.stringify(data, null, 2));
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
    if (!isShuffling) {
      const shuffled = shuffleArray(allSongs);
      console.log(shuffled);
      setShuffledSongs(shuffled);
      setIsShuffling(true);
    } else {
      setIsShuffling(false);
      setShuffledSongs(allSongs);
    }
  }



  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  

  const nextSong = () => {
    let nextIndex; 
    if (isShuffling) { 
      nextIndex = (shuffledSongs.findIndex(song => song === allSongs[currentSongIndex]) + 1) % shuffledSongs.length;
      setCurrentSongIndex(allSongs.findIndex(song => song === shuffledSongs[nextIndex])); 
    } else { 
      nextIndex = (currentSongIndex + 1) % allSongs.length; setCurrentSongIndex(nextIndex);
      // setPreviousSongIndex(currentSongIndex)
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

  




  return (
    <div className="box-border text-white w-full bg-[#29252c]">
      {allSongs.length > 0 ? (
        <>
            <Header toggleNav={toggleNav} />
            <AppRouter toggleNav={toggleNav} playlists={playlists} openNav={openNav} allSongs={allSongs} favouriteSongs={favouriteSongs} />
          
            <Footer currentSong={isShuffling ? shuffledSongs[currentSongIndex] : allSongs[currentSongIndex]} songs={allSongs} nextSong={nextSong} prevSong={prevSong} currentSongIndex={currentSongIndex} isPlaying={isPlaying} handlePlayPause={handlePlayPause} isRepeating={isRepeating} handleRepeat={handleRepeat} setIsPlaying={setIsPlaying} handleShuffle={handleShuffle} isShuffling={isShuffling} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />

          <div className="hidden right-0 top-0 fixed md:block md:w-[50px] md:h-full md:bg-[#29252c]"></div>
        </>
      ) : (
        <div>Loading playlists...</div> // Show a loading state while data is being fetched
      )}
    </div>
  );
}

export default App;