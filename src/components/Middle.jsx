
import Data from "./Data";
const Middle = () => {
  return (
    <div>
    <div class="flex snap-x snap-proximity w-[1200px] overflow-auto scrollbar-hidden scroll-smooth">
      <div className="flex gap-6 ml-12 mt-3 ">
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">All</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Gaming</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Music</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Videos</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">News</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Mixes</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Comedy</h1>
        </div>
        <div className="shrink-0 w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Pubg Mobile</h1>
        </div>
        <div className="shrink-0 w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Movies</h1>
        </div>
        <div className="shrink-0 w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Entertainment</h1>
        </div>
        <div className="shrink-0 w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Electronics</h1>
        </div>
        <div className="shrink-0 w-[140px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer hover:bg-slate-400">
          <h1 className="text-base font-medium">Sports and Games</h1>
        </div>
        </div>
        
      </div>

      <div className="flex   flex-wrap justify-start gap-6 ml-20">
        {Data.map((item, index) => (
          <div key={index} className="shrink-0 w-[350px] h-[260px] bg-gray-300 rounded-xl mt-8   hover:scale-105 cursor-pointer hover:bg-slate-400 duration-">
            <div>
              <img src={item.image} alt="pp" className="shrink-0 w-[350px] h-[180px] rounded-xl " />
            </div>
            <div className="flex mt-1 ml-1 ">
              <img
                src={item.image}
                alt="pp"
                className="shrink-0 w-[40px] h-[40px] rounded-full "
              />
              <div className="ml-3 ">
                <p className="font-bold">{item.title}</p>
                <p className="font-medium">{item.id}</p>
                <p className="font-extrabold">
                  {item.Views} . {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
