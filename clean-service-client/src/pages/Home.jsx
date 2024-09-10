import IntroImages from "../assets/images/intro - Copy.jpg"

const Home = () => {
  return (
    <div className="gap-4 flex flex-col md:flex-row items-center h-screen">
      {/* discription */}
      <div className="flex-[1]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-3 md:pb-4 xl:pb-6 xl:leading-tight">Quality Cleaning <br /> for Your Home</h1>
        <p className="text-base md:text-lg xl:text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          molestiae quo voluptate optio minima omnis possimus explicabo earum,
          commodi obcaecati!
        </p>
        <div className="pt-6">
          <button className="bg-green-400 py-2 px-8 rounded-sm font-semibold cursor-pointer">Book a Service</button>
        </div>
        <div className="divider"></div>

        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-12">
              <span>+99</span>
            </div>
          </div>
        </div>

        <div className="">
          <p>Rated 5 of by our dients</p>
        </div>
      </div>
      {/* image */}
      <div className="flex-[1]">
        <img className="md:h-[550px] object-cover" src={IntroImages} alt="" />
      </div>
    </div>
  );
};

export default Home;
