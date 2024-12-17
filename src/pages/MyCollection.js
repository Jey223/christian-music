import { MdPlayArrow } from "react-icons/md";



function MyCollection() {

    return (

        <div className="w-full md:w-[calc(100%_-_139px)] max-h-full lg:min-h-screen bg-[#29252c] md:my:0 md:mx-[90px]">
          
          <div className="pt-[70px] pb-28 w-[90%] md:w-full my-0 mx-auto">
                <div className="flex">
                    <button className="w-[180px] md:w-[120px] h-[37px] mr-[20px] bg-[#ea8e05] p-[10px] rounded-[25px] border border-[#EFEEE0] text-[12px] flex justify-center text-[#EFEEE0]">My Collections</button>
                    <button className="w-[180px] md:w-[120px] h-[37px] mr-[20px] p-[10px] rounded-[25px] border border-[#EFEEE0] text-[12px] flex justify-center text-[#EFEEE0]">Likes</button>
                </div>

                <div className="mt-[30px] w-full flex flex-col md:flex-row md:flex-wrap gap-[20px]">
                    <div className="w-full md:w-[213px] h-[230px] md:h-[234px] relative rounded-[20px] overflow-hidden">
                        <img src="/images/ms3(2).png" alt="muspic" className="w-full h-full absolute" />
                        <div className="relative w-full h-full flex justify-between items-end p-[20px]">
                            <div className="w-1/2 md:w-[70%] text-[#EFEEE0]">
                                <h2 className="text-xl md:text-lg p-0">Music name</h2>
                                <p className="text-xs">Artist</p>
                                <span className="text-sm pt-[20px] text-white">200 likes</span>
                            </div>
                            <div className='w-[40px] h-[40px] bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten'>
                            <MdPlayArrow className="size-7 md:size-5 " />
                            {/* text-[#ea8e05] */}
                        </div>
                            
                        </div>
                    </div>

                    <div className="w-full md:w-[213px] h-[230px] md:h-[234px] relative rounded-[20px] overflow-hidden">
                        <img src="/images/ms3(2).png" alt="muspic" className="w-full h-full absolute" />
                        <div className="relative w-full h-full flex justify-between items-end p-[20px]">
                            <div className="w-1/2 md:w-[70%] text-[#EFEEE0]">
                                <h2 className="text-xl md:text-lg p-0">Music name</h2>
                                <p className="text-xs">Artist</p>
                                <span className="text-sm pt-[20px] text-white">200 likes</span>
                            </div>
                            <div className='w-[40px] h-[40px] bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten'>
                            <MdPlayArrow className="size-7 md:size-5 " />
                            {/* text-[#ea8e05] */}
                        </div>
                            
                        </div>
                    </div>

                    <div className="w-full md:w-[213px] h-[230px] md:h-[234px] relative rounded-[20px] overflow-hidden">
                        <img src="/images/ms3(2).png" alt="muspic" className="w-full h-full absolute" />
                        <div className="relative w-full h-full flex justify-between items-end p-[20px]">
                            <div className="w-1/2 md:w-[70%] text-[#EFEEE0]">
                                <h2 className="text-xl md:text-lg p-0">Music name</h2>
                                <p className="text-xs">Artist</p>
                                <span className="text-sm pt-[20px] text-white">200 likes</span>
                            </div>
                            <div className='w-[40px] h-[40px] bg-[#ea8e05] flex items-center justify-center rounded-full shadow-[0_0_8px_0] shadow-[#ea8e05] mix-blend-lighten'>
                            <MdPlayArrow className="size-7 md:size-5 " />
                            {/* text-[#ea8e05] */}
                        </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )

}

export default MyCollection;