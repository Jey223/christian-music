import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";





function App() {
  const [openNav, setOpenNav] = useState(false);
  const [allSongs, setAllSongs] = useState([]);
  const [popularSongs, setPopularSongs] = useState([]); 
  const [newReleaseSongs, setNewReleaseSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(''); // 'popular' or 'newRelease'
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [favouriteSongs, setFavouriteSongs] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  // const [previousSongIndex, setPreviousSongIndex] = useState(null);
  


  useEffect(() => {
    fetch("/songs.json")
      .then(Response => Response.json())
      .then(data => {
        // setPlaylists(data);
        const popular = data.popular || []; 
        const newrelease = data.newrelease || [];
        // const songsArray = Object.values(data).flat();
        const songsArray = [...popular, ...newrelease];;
        setAllSongs(songsArray);
        setPopularSongs(data.popular); 
        setNewReleaseSongs(data.newrelease);
        // setShuffledSongs(songsArray); // Initialize shuffledSongs to the same as allSongs
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
    // if (!isShuffling) {
    //   const shuffled = shuffleArray(allSongs);
    //   console.log(shuffled);
    //   setShuffledSongs(shuffled);
    //   setIsShuffling(true);
    // } else {
    //   setIsShuffling(false);
    //   setShuffledSongs(allSongs);
    // }
    if (isShuffling) {
      setIsShuffling(false);
      setShuffledSongs([]);
    } else {
      const currentSongs = currentPlaylist === 'popular' ? popularSongs : newReleaseSongs;
      const shuffled = shuffleArray(currentSongs);
      console.log("Shuffled", shuffled);
      setIsShuffling(true);
      setShuffledSongs(shuffled)

      console.log(currentSongs)
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };
  
  const playSong = (index, playlist) => { 
      setCurrentSongIndex(index);
      setCurrentPlaylist(playlist);
      if(playlist === 'popular') {
        console.log('Popular Music')
      }
      setIsPlaying(true); 
      setShowFooter(true);
  };

  const nextSong = () => {
    let nextIndex; 
    const currentSongs = currentPlaylist === 'popular' ? popularSongs : newReleaseSongs;
    if (isShuffling) { 
      // nextIndex = (shuffledSongs.findIndex(song => song === allSongs[currentSongIndex]) + 1) % shuffledSongs.length;
      // setCurrentSongIndex(allSongs.findIndex(song => song === shuffledSongs[nextIndex])); 
      nextIndex = (shuffledSongs.findIndex (song => song === currentSongs[currentSongIndex] + 1) % shuffledSongs.length);
      setCurrentSongIndex(currentSongs.filterIndex(song => song === shuffledSongs[nextIndex]))
    } else { 
      nextIndex = (currentSongIndex + 1) % currentSongs.length; setCurrentSongIndex(nextIndex);
      // setPreviousSongIndex(currentSongIndex)
    }
    if (isPlaying) {
      setIsPlaying(true);
    }
  };

  const prevSong = () => {
    const currentSongs = currentPlaylist === 'popular' ? popularSongs : newReleaseSongs;
    let prevIndex; 
    if (isShuffling) { 
      // prevIndex = (shuffledSongs.findIndex(song => song === allSongs[currentSongIndex]) - 1 + shuffledSongs.length) % shuffledSongs.length; 
      // setCurrentSongIndex(allSongs.findIndex(song => song === shuffledSongs[prevIndex])); 
      prevIndex = (shuffledSongs.findIndex(song => song === currentSongs[currentSongIndex]) - 1 + shuffledSongs.length) % shuffledSongs.length; 
      setCurrentSongIndex(currentSongs.findIndex(song => song === shuffledSongs[prevIndex])); 
    } else { 
      prevIndex = (currentSongIndex - 1 + currentSongs.length) % currentSongs.length; 
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
  }, [allSongs, favourite])


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

  // useEffect(() => {
  //   localStorage.setItem('FavouriteSong', JSON.stringify(favourite));
  // }, [favourite])


  const isFavourite = (id) => favourite.includes(id);

  // favourite.includes(currentPlaylist === 'popular' ? popularSongs[currentSongIndex].id : newReleaseSongs[currentSongIndex].id)

  function toggleNav() {
    setOpenNav(!openNav);
  }

  




  return (
    <div className="box-border text-white w-full bg-[#29252c]">
      {allSongs.length > 0 ? (
        <>
            <Header toggleNav={toggleNav} />
            <AppRouter toggleNav={toggleNav} popularSongs={popularSongs}  newReleaseSongs={newReleaseSongs} openNav={openNav} favouriteSongs={favouriteSongs} playSong={playSong} showFooter={showFooter} />
          

          {showFooter && (
            <Footer currentSong={isShuffling ? shuffledSongs[currentSongIndex] : (currentPlaylist === 'popular' ? popularSongs[currentSongIndex] : newReleaseSongs[currentSongIndex])} nextSong={nextSong} prevSong={prevSong} currentSongIndex={currentSongIndex} isPlaying={isPlaying} handlePlayPause={handlePlayPause} isRepeating={isRepeating} handleRepeat={handleRepeat} setIsPlaying={setIsPlaying} handleShuffle={handleShuffle} isShuffling={isShuffling} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
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