import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import FavouritePage from "../pages/FavouritePage";
import PlayListPage from "../pages/PlaylistPage";
import NoPage from "../pages/NoPage";
import Navlink from "./NavLinks";

function AppRouter({toggleNav, openNav, popular, newRelease, favouriteSongs, playSong, showFooter, handlePlayPause, isPlaying}) {

    console.log(newRelease)

    return (
        <>
            <BrowserRouter>
                <Navlink openNav={openNav} toggleNav={toggleNav}/>
                <Routes>
                    <Route index element={<HomePage toggleNav={toggleNav} popular={popular} newRelease={newRelease} playSong={playSong} showFooter={showFooter} />} />
                    <Route path="/collection" element={<FavouritePage favouriteSongs={favouriteSongs} showFooter={showFooter} handlePlayPause={handlePlayPause} playSong={playSong} isPlaying={isPlaying} />} />
                    <Route path="/playlist" element={<PlayListPage />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;