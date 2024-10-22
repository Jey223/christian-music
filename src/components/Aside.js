import { BiSolidHome, BiSolidFolder, BiSolidRadio, BiSolidFilm, BiSolidLogOut, BiSolidUser } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md"

function Aside({nav, toggleNav}) {
    
    console.log(nav)

    const navLinks = [
        {
          id: 1,
          title: "Home",
          url: "mylinks",
          Icon: BiSolidHome
        },
        {
            id: 2,
            title: "My Collections",
            url: "mylinks",
            Icon: BiSolidFolder
        },
        {
            id: 3,
            title: "Radio",
            url: "mylinks",
            Icon: BiSolidRadio  
        },
        {
            id: 4,
            title: "Music Videos",
            url: "mylinks",
            Icon: BiSolidFilm  
        },
        {
            id: 5,
            title: "Profile",
            url: "mylinks",
            Icon: BiSolidUser 
        },
        {
            id: 6,
            title: "Log Out",
            url: "mylinks",
            Icon: BiSolidLogOut 
        }
    ];


    return(
        <div className={ 
            nav ? "left-0 w-full md:w-[90px] h-screen fixed top-0 transition duration-500 p-3 flex bg-[#29252c] z-30" : "left-[-100%] w-full md:w-[90px] h-screen fixed top-0 transition duration-500 p-3 flex bg-[#29252c] z-30"
         }>

            <nav className="w-full">
                <MdOutlineClose size="1.8em" onClick={toggleNav} />
                <ul className="py-5 w-full">
                    {navLinks.map(link => {
                        const {id, title, url, Icon} = link;
                        return (
                            <li>
                                <a key={id} href={url} className="flex w-full py-5 text-lg font-bold items-center left-0 text-[rgba(239,238,224,0.7)] " >
                                    <Icon size={22} />
                                    <span className="ml-5">{title}</span>
                                    
                                </a>
                            </li>
                        )
                        
                    })}
                </ul>
            </nav> 
         </div>   
    )
    
}

export default Aside;