import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
function CaroselSlider() {
  let slides = [
    {
      url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=781",
    },
    {
      url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      url: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      url: "https://images.unsplash.com/photo-1560699980-9dee78d1e874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
    {
      url: "https://images.unsplash.com/photo-1571453831211-63a63bc84b96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
    {
      url: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  if (currentIndex === 0) return; // Stop if at first slide
  setCurrentIndex(currentIndex - 1);
};

const nextSlide = () => {
  if (currentIndex === slides.length - 1) return; // Stop if at last slide
  setCurrentIndex(currentIndex + 1);
};


  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-5 px-12 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500  rounded-[4vw]"
      >
        {/* leftarrow */}
        <div className=" absolute bottom-[50%]  left-15 text-xl rounded-full p-2 bg-[#e2e2e5] text-[#545455] cursor-pointer">
          <BsChevronCompactLeft size={70} style={{ strokeWidth: 2}}  onClick={prevSlide} />
        </div>
        {/* rightarrow */}
        <div className="absolute bottom-[50%]   right-15 text-xl rounded-full p-2 bg-[#e2e2e5] text-[#545455] cursor-pointer ">
          <BsChevronCompactRight size={70} style={{ strokeWidth: 2}} onClick={nextSlide} className="" />
        </div>
      </div>
    </div>
  );
}

export default CaroselSlider;
