import { MdPlayArrow, MdLibraryMusic, MdFavorite, MdFavoriteBorder } from "react-icons/md";


function PlayListPage() {

    return (
        <div className="box-border w-full md:w-[calc(100%_-_139px)] bg-[#29252c] md:my:0 md:mx-[90px]">
            <div className="pt-[70px] pb-28 w-[90%] md:w-full my-0 mx-auto">
                <div className="md:flex">
                    <img src="/images/artist/nath.jpeg" alt="artist" className="w-full md:w-72 h-72 rounded-3xl" />
                    <div className="w-full h-72 mt-8 md:mt-0 md:ml-5 md:w-[530px] md:flex md:flex-col md:justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-1.5 md:mb-2.5 md:mt-16 text-[#9effa9]">Nathaniel's Tunes</h1>
                            <p className="text-xs md:text-sm font-normal mb-1.5 md:mb-2.5 text-[#EFEEE0]">Nathaniel Bassey was one of the leading artistes in the Nigerian Christian gathering. His music spans across different genres such as worship, hymns and medley.</p>
                            <span className="text-xs md:text-sm font-normal text-[#EFEEE0]">64 songs ~ 16 hrs+</span>
                        </div>
                        <div className="w-full md:w-[300px] flex justify-between items-center mt-4 md:mt-0">
                            <button className="w-[87px] flex items-center justify-center h-[36px] rounded-[32px] bg-[rgba(255,255,255,0.1)] p-[5px] backdrop-blur-[5px] mr-[5px]">
                                <div className='w-[13px] h-[13px] bg-[#ea8e05] flex items-center justify-center rounded-full'>
                                    <MdPlayArrow className="size-3  text-[#29252c]" />
                                </div>
                                <span className="pl-1 text-xs text-white">Play all</span>
                            </button>
                            <button className="w-[151px] flex items-center justify-center h-[36px] rounded-[32px] bg-[rgba(255,255,255,0.1)] p-[5px] backdrop-blur-[5px] mr-[5px]">
                                <MdLibraryMusic className="text-[#ea8e05]" />
                                <span className="pl-1 text-xs text-white">Add to collection</span>
                            </button>
                            <button className="w-24 md:w-[36px] flex items-center justify-center h-[36px] rounded-[32px] bg-[rgba(255,255,255,0.1)] p-[5px] backdrop-blur-[5px]">
                                < MdFavorite className="text-red-500 size-5" />
                                <span className="pl-1 text-xs md:hidden text-white">Like</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-[60px]">
                    <div className="w-full md:h-[56px] flex justify-between bg-[rgba(255,255,255,0.1)] p-[5px] backdrop-blur-[5px] rounded-[10px] p-2.5 mb-2.5 ">
                        <div className="w-2/3 md:w-[47%] flex">
                            <div className="md:w-1/4 flex items-center">
                                <img src="/assets/images/newrelease/Nathaniel-Bassey-YAHWEH-SABAOTH.jpg" alt="nath" className="w-10 h-10 rounded-md" />
                                < MdFavoriteBorder className="hidden md:block ml-4 size-5 text-gray-500" />
                            </div>
                            <div className="w-4/5 h-10 flex flex-col md:flex-row justify-between md:items-center pl-5">
                                <h3 className="text-xs text-white cursor-pointer">
                                    Yahwey Sabaoth ~ Nathaniel Bassey
                                </h3>
                                <span className="text-[10px] m-0 text-white"> Single</span>
                            </div>
                        </div>
                        <div className="w-[30%] h-10 flex flex-col md:flex-row-reverse justify-between items-end">
                            <div>
                                <div className="w-0.5 h-0.5 bg-[#ea8e05] mb-0.5 rounded-full"></div>
                                <div className="w-0.5 h-0.5 bg-[#ea8e05] mb-0.5 rounded-full"></div>
                                <div className="w-0.5 h-0.5 bg-[#ea8e05] rounded-full"></div>
                            </div>
                            <span className="text-xs">Nan : Nan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayListPage;