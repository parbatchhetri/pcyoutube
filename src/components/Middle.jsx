
import Data from "./Data";
const Middle = () => {
  return (
    <div>
      <div className="flex gap-6 ml-10">
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">All</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Gaming</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Music</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Videos</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">News</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Mixes</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Comedy</h1>
        </div>
        <div className="w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Pubg Mobile</h1>
        </div>
        <div className="w-[90px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Movies</h1>
        </div>
        <div className="w-[120px] h-[30px] rounded-xl bg-gray-400 flex justify-center items-center">
          <h1 className="text-base font-medium">Entertainment</h1>
        </div>
      </div>

      <div className="flex justify-between gap-5 flex-wrap">
        {Data.map((item, index) => (
          <div key={index} className="w-[320px] h-[288px] bg-yellow-100 rounded-xl mt-8">
            <div>
              <img src={item.image} alt="pp" className="w-[320px] h-[180px] rounded-xl" />
            </div>
            <div className="flex mt-3 ml-1">
              <img
                src={item.image}
                alt="pp"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="ml-3">
                <p className="font-bold">{item.title}</p>
                <p className="">
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
