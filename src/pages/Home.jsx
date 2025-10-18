import { useNavigate } from "react-router-dom";
import CaroselSlider from "../CaroselSlider";
function Home() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/searchbar");
  };
  const handleMenuBar = () => {
    navigate("/menubar");
  };
  return (
    <>
      <div className="w-full ">
        <div className="flex items-center  bg-gray-100 p-10  text-black ">
          <p>
            <img
              src="/Apple_logo_black.svg"
              alt="apple icon"
              className="w-10 h-13 ml-2 lg:w-5 lg:h-7"
            />
          </p>
          <div className="flex items-center text-[#3f3f3f] ">
            <p className="ml-10 hidden lg:text-3x1 lg:block">
              <a href="Store">Store</a>
            </p>
            <p className="ml-10 hidden lg:text-lg lg:block">
              <a href="Mac">Mac</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="ipad">ipad</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="iphone">iphone</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="Watch">Watch</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="Airpods">Airpods</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="TV&home">TV&home</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="Entertainment">Entertainment</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="Acessories">Acessories</a>
            </p>
            <p className="ml-10 hidden lg:text-xs lg:block">
              <a href="Support">Support</a>
            </p>

            <p onClick={handleSearch} className="cursor-pointer">
              <img
                src="/search_icon.svg"
                alt="search icon"
                className="w-20 h-17 ml-120 mr-10 lg:w-5"
              />
            </p>

            <p >
              <img
                src="/shopping_bag.svg"
                alt="shopping_bag icon"
                className="w-20 h-17 ml-10 mr-10 lg:w-5 "
              />
            </p>
            <p onClick={handleMenuBar}>
              <img
                src="/menu_bar.svg"
                alt="apple icon"
                className="w-20 h-15 ml-10   lg:hidden"
              />
            </p>
          </div>
        </div>
        <div className="p-15 lg:4">
          <p className="flex justify-center text-5xl font-light lg:text-sm  ">
            Celebrate with up to ₹10000.00 instant cashback on your favourite
            products with eligible cards. footnote§§ Plus up to 12 months of No
            Cost EMI.footnote§
            <br></br>
            <p className="text-blue-700  hover:underline ">
              <a href="">See offers </a>
            </p>{" "}
            <span>
              <img
                src="/add_circle.svg"
                alt="add_circle"
                className="w-4 h-5 m-1"
              ></img>
            </span>
          </p>
        </div>
        <div className="bg-gray-100">
          {" "}
          <div className=" p-30 flex justify-between">
            <h1 className="text-8xl font-semibold ml-16  ">
              Store.
              <span className="text-8xl text-[#6e6e73] font-semibold">
                The best way to buy the
                <br /> products you love.
              </span>
            </h1>
            <div
              className=" text-5xl mr-16 
"
            >
              <p>Need shopping help?</p>
              <span className="text-blue-700 hover:underline  font-[350] flex row-auto">
                <a href="">
                  Ask a Specialist{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="14px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0066cc"
                  >
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                  </svg>
                </a>
              </span>
              <p>Visit an Apple store</p>
              <p className="text-blue-700 hover:underline font-[350]  ">
                <a href="">
                  Find near you
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0066cc"
                    >
                      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CaroselSlider />
    </>
  );
}
export default Home;
