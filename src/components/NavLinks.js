import { NavLink } from "react-router-dom";
import { BiSolidHome, BiSolidRadio, BiSolidFilm, BiSolidLogOut, BiSolidUser } from "react-icons/bi";
import { MdOutlineClose, MdLibraryMusic } from "react-icons/md";

function Navlink({openNav, toggleNav}) {
    

    const navLinks = [
        {
          id: 1,
          title: "Home",
          url: "/",
          Icon: BiSolidHome
        },
        {
            id: 2,
            title: "My Collections",
            url: "/collection",
            Icon: MdLibraryMusic
        },
        {
            id: 3,
            title: "Radio",
            url: "/radio",
            Icon: BiSolidRadio  
        },
        {
            id: 4,
            title: "Music Videos",
            url: "/video",
            Icon: BiSolidFilm  
        },
        {
            id: 5,
            title: "Profile",
            url: "/profile",
            Icon: BiSolidUser 
        },
        {
            id: 6,
            title: "Log Out",
            url: "/signin",
            Icon: BiSolidLogOut 
        }
    ];

    
    return(
        <div className={ "w-full md:w-[90px] h-full fixed duration-500 p-3 flex bg-[#29252c] z-30 md:z-10 top-0 md:left-0 md:items-start " + (openNav ? 'left-0' : 'left-[-100%]') 
         } >
            <nav className="w-full md:w-[55px] md:mx-auto md:flex md:flex-col md:items-center">
                <MdOutlineClose onClick={toggleNav} className="size-7 md:hidden" />
                <img src="/images/logo.png" className="w-6 h-6 hidden md:block" alt="logo" />


                <ul className="py-5 w-full md:p-0 md:flex md:flex-col md:items-center md:bg-[#292a25] md:mt-5 rounded-[32px]">
                    {navLinks.map(link => {
                        const {id, title, url, Icon} = link;
                        return (
                            <li>
                                <NavLink to={url} className="flex w-full py-5 text-lg font-bold items-center  text-[rgba(239,238,224,0.7)] " > <Icon size={22} />
                                <span className="ml-5 md:hidden">{title}</span> </NavLink>

                                {/* <a key={id} href={url} className="flex w-full py-5 text-lg font-bold items-center  text-[rgba(239,238,224,0.7)] "  >
                                    <Icon size={22} />
                                    <span className="ml-5 md:hidden">{title}</span>
                                </a> */}
                            </li>
                        )
                        
                    })}
                </ul>
            </nav> 
         </div>   
    )
    
}

export default Navlink;