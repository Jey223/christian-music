import { MdMenu, MdSearch } from "react-icons/md";


function PageHeader({toggleNav}) {
    return(
        <div className="w-full md:w-[calc(100%_-_142px)] h-[70px] flex px-4 justify-between items-center bg-[rgba(41,37,44,0.9)] fixed top-0 md:right-[50px] md:ml-[1px] z-20">
            <div className="flex w-16 justify-between items-center h-8 md:hidden">
              <MdMenu className="size-[1.8em]" onClick={toggleNav} />
              <img src="/images/logo.png" className="w-6 h-6" alt="logo" />
            </div>
            <MdSearch className="size-7 text-gray-500 md:mr-5" />
            <input type="text" className="w-full p-1.5 hidden md:block bg-transparent outline-0 text-gray-100" placeholder="Search artist"/>
        </div>
    )
}

export default PageHeader;