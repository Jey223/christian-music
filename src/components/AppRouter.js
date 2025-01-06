import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import MyCollection from "../pages/MyCollection";
import PlayList from "../pages/Playlist";
import NoPage from "../pages/NoPage";
import Navlink from "./NavLinks";

function AppRouter({toggleNav, openNav, popularSongs, newReleaseSongs, favouriteSongs, playSong, showFooter}) {

    return (
        <>
            <BrowserRouter>
                <Navlink openNav={openNav} toggleNav={toggleNav}/>
                <Routes>
                    <Route index element={<Home toggleNav={toggleNav} popularSongs={popularSongs} newReleaseSongs={newReleaseSongs} playSong={playSong} showFooter={showFooter} />} />
                    <Route path="/collection" element={<MyCollection favouriteSongs={favouriteSongs} showFooter={showFooter} />} />
                    <Route path="/playlist" element={<PlayList />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;