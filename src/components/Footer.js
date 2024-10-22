import { MdPlayArrow, MdFastForward } from "react-icons/md";

function Footer() {
    return (
        <div className="fixed bottom-0 left-0 max-h-32 w-full bg-[rgba(29,25,30,0.3)] border border-[rgba(80,72,86,0.1)] backdrop-blur-lg z-20">
            <div className="flex py-5 w-[90%] mx-auto my-0 justify-between">
                <div className="flex w-48 items-center">
                    <img src="/images/chart3.png" className="w-14 h-14 rounded-2xl " alt="artistImage"/>
                    <div className="pl-5">
                        <h2>Breathe</h2>
                        <p>James</p>
                    </div>
                </div>
                <div className="w-[30%] flex items-center justify-between">
                    <div className='w-10 h-10 bg-[#ea8e05] flex items-center justify-center rounded-full'>
                        <MdPlayArrow size="1.8em" />

                    </div>
                    <MdFastForward size="1.8em" />
                </div>
               
            </div>
        </div>
    )
   
}

export default Footer;