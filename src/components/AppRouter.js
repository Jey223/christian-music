import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import MyCollection from "../pages/MyCollection";
import PlayList from "../pages/Playlist";
import NoPage from "../pages/NoPage";
import Navlink from "./NavLinks";

function AppRouter({toggleNav, playlists, openNav, allSongs, favouriteSongs}) {

    return (
        <>
            <BrowserRouter>
                <Navlink openNav={openNav} toggleNav={toggleNav}/>
                <Routes>
                    <Route index element={<Home toggleNav={toggleNav} playlists={playlists} />} />
                    <Route path="/collection" element={<MyCollection favouriteSongs={favouriteSongs} />} />
                    <Route path="/playlist" element={<PlayList />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;