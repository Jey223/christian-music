import { BiHeart } from "react-icons/bi";
import { Link } from "react-router";


function MusicCharts() {
    // console.log(key, arr);
    return (
      <>

        <div className="keen-slider__slide w-64 min-w-64 lg:w-full lg:min-w-full min-h-56 max-h-56 lg:min-h-[100px] lg:max-h-[100px] p-4 flex bg-[#1c191e] rounded-[20px] lg:items-center justify-between">
          <div className="lg:flex lg:items-center">
            <img src="https://th.bing.com/th?q=Dunsin+Oyekan+Gospel+Music&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247" alt="" className="w-20 lg:w-16 h-20 lg:h-16 object-cover rounded-xl" />
            <div className="mt-2.5 lg:mt-0 lg:ml-2.5">
              <h3 className="text-sm font-bold text-white cursor-pointer">Morning Worship</h3>
              <p className="text-xs text-slate-400 mt-1 font-bold">Dunsin Oyekan</p>
              <span className="mt-3.5 lg:mt-2.5 text-sm font-bold inline-block">2:34:45</span>
            </div>
          </div>
          <div>
            <div className="w-10 h-10 border border-[#9effa9] flex items-center justify-center rounded-full">
              <BiHeart className="w-6 h-6 text-[#ea8e05]"/>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide w-64 min-w-64 lg:w-full lg:min-w-full min-h-56 max-h-56 lg:min-h-[100px] lg:max-h-[100px] p-4 flex bg-[#1c191e] rounded-[20px] lg:items-center justify-between">
          <div className="lg:flex lg:items-center">
            <img src="https://rnn.ng/wp-content/uploads/2022/09/Gospel-Music-in-Nigeria-1024x536.jpg" alt="" className="w-20 lg:w-16 h-20 lg:h-16 object-cover rounded-xl" />
            <div className="mt-2.5 lg:mt-0 lg:ml-2.5">
              <h3 className="text-sm font-bold text-white cursor-pointer">Trending Gospel Songs
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-bold">All artists</p>
              <span className="mt-3.5 lg:mt-2.5 text-sm font-bold inline-block">1:02:42</span>
            </div>
          </div>
          <div>
            <div className="w-10 h-10 border border-[#9effa9] flex items-center justify-center rounded-full">
              <BiHeart className="w-6 h-6 text-[#ea8e05]"/>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide w-64 min-w-64 lg:w-full lg:min-w-full min-h-56 max-h-56 lg:min-h-[100px] lg:max-h-[100px] p-4 flex bg-[#1c191e] rounded-[20px] lg:items-center justify-between">
          <div className="lg:flex lg:items-center">
            <img src="https://assets.audiomack.com/revelationmusik/a4debabd43e2ff81663318694f2f249b719657044fa5eeb16c9d12c9d5226e97.jpeg?width=1000&height=1000&max=true" alt="" className="w-20 lg:w-16 h-20 lg:h-16 object-cover rounded-xl" />
            <div className="mt-2.5 lg:mt-0 lg:ml-2.5">
              <Link to="./playlist">
              <h3 className="text-sm font-bold text-white cursor-pointer">Nathaniel's tunes</h3>
              </Link>
              
              <p className="text-xs text-slate-400 mt-1 font-bold">Nathaniel Bassey</p>
              <span className="mt-3.5 lg:mt-2.5 text-sm font-bold inline-block">2:01:25</span>
            </div>
          </div>
          <div>
            <div className="w-10 h-10 border border-[#9effa9] flex items-center justify-center rounded-full">
              <BiHeart className="w-6 h-6 text-[#ea8e05]"/>
            </div>
          </div>
        </div>

      </>
        
    )
}
// "musiccharts" : [
//         {
//             "imgchart": "https://th.bing.com/th?q=Dunsin+Oyekan+Gospel+Music&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
//             "musictype": "Morning Worship",
//             "artist": "Dunsin Oyekan",
//             "time": "2:34:45"
//         },
//         {
//             "imgchart": "https://rnn.ng/wp-content/uploads/2022/09/Gospel-Music-in-Nigeria-1024x536.jpg",
//             "musictype": "Trending Gospel Songs",
//             "artist": "All artists",
//             "time": "1:02:42"
//         },
//         {
//             "imgchart": " https://assets.audiomack.com/revelationmusik/a4debabd43e2ff81663318694f2f249b719657044fa5eeb16c9d12c9d5226e97.jpeg?width=1000&height=1000&max=true",
//             "musictype": "Nathaniel's tunes",
//             "artist": "Nathaniel Bassey",
//             "time": "2:01:25"
//         }
       
//     ],

export default MusicCharts