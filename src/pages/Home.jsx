// import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate=useNavigate();
  const handleSearch=()=>{
    navigate("/searchbar");
  }
 
return (
    <>
     
      <div className="w-full ">
        <div
         
          className="flex items-center  bg-gray-100 p-10  text-black "
        >
          <p>
            <img
              src="/Apple_logo_black.svg"
              alt="apple icon"
              className="w-10 h-13 ml-2"
            />
          </p>
          <div className="flex items-center text-[#3f3f3f] ">
            <p className="ml-10 hidden lg:text-5x1">
              <a href="Store">Store</a>
            </p>
            <p className="ml-10 hidden lg:text-lg">
              <a href="Mac">Mac</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="ipad">ipad</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="iphone">iphone</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="Watch">Watch</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="Airpods">Airpods</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="TV&home">TV&home</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="Entertainment">Entertainment</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="Acessories">Acessories</a>
            </p>
            <p className="ml-10 hidden lg:text-xs">
              <a href="Support">Support</a>
            </p>

            <p onClick={handleSearch}className="cursor-pointer">
              <img
                src="/search_icon.svg"
                alt="search icon"
                className="w-20 h-17 ml-120 mr-10"
              />
            </p>

            <p>
              <img
                src="/shopping_bag.svg"
                alt="shopping_bag icon"
                className="w-20 h-17 ml-10 mr-10 "
              />
            </p>
              <p>
              <img
                src="/menu_bar.svg"
                alt="apple icon"
                className="w-20 h-15 ml-10   lg:hidden"
              />
            </p>
          </div>
        </div>
        <div className="p-15">
          <p className="flex justify-center text-5xl font-light  ">
                Get up to 6 months of No Cost EMIfootnote§ plus up to ₹10000.00
            instant cashbackfootnote§§ on selected products with eligible cards.<br></br><p className="text-blue-700  hover:underline ">
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
            <div className=" text-5xl mr-16 ">
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
    </>
  );
}
export default Home;
