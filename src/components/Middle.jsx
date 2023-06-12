
import Data from "./Data";
const Middle = () => {
  return (
    <div>
      <div className="flex gap-6 ml-10 mt-3">
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">All</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Gaming</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Music</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Videos</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">News</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Mixes</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Comedy</h1>
        </div>
        <div className="w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Pubg Mobile</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Movies</h1>
        </div>
        <div className="w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center cursor-pointer">
          <h1 className="text-base font-medium">Entertainment</h1>
        </div>
      </div>

      <div className="flex  flex-wrap ">
        {Data.map((item, index) => (
          <div key={index} className="w-[350px] h-[270px] bg-white rounded-xl mt-8 ml-12  border-[1px] hover:scale-105 cursor-pointer duration-">
            <div>
              <img src={item.image} alt="pp" className="w-[350px] h-[180px] rounded-xl " />
            </div>
            <div className="flex mt-3 ml-1">
              <img
                src={item.image}
                alt="pp"
                className="w-[40px] h-[40px] rounded-full "
              />
              <div className="ml-5 ">
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
