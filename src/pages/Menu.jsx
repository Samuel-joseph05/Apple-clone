function Menu() {
  const handleClose = () => {
    window.history.back();
  };
  return (
    <div>
      <div className="mt-7 ">
        <img
          src="/close_icon.svg"
          alt=""
          className="w-20 h-13 ml-222 
"
          onClick={handleClose}
        />
        <div className="mt-12 ">
          <p className="ml-25 mb-7 text-6xl font-semibold  ">
            <a href="Store">Store</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="Mac">Mac</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="ipad">ipad</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336] ">
            <a href="iphone">iphone</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="Watch">Watch</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="Airpods">Airpods</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="TV&home">TV&home</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="Entertainment">Entertainment</a>
          </p>
          <p className="ml-25 mb-7 text-6xl font-semibold text-[#333336]">
            <a href="Acessories">Acessories</a>
          </p>
          <p className="ml-25 text-6xl font-semibold  text-[#333336]">
            <a href="Support">Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
