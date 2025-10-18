

function SearchBar() {
  const handleClose = () => {
    window.history.back();
  };
  return (
    <div className="">
      <div className="mt-10">
        <img
          src="/close_icon.svg"
          alt=""
          className="w-20 h-17 ml-215 
"
          onClick={handleClose}
        />
      </div>
      <div className="flex items-center ml-35 mt-3">
        <img src="/search_icon.svg" alt="" className="w-20 h-20   " />
        <input
          type="text"
          placeholder="Search"
          className="placeholder-[#6e6e73] w-100 px-20 py-10 text-7xl font-medium
 outline-none"
        />
      </div>
      <div>
        <h4 className="text-[#6e6e73] text-6xl mt-30  ml-40">Quick Links</h4>
        <ul className="text-5xl p-10 ml-40">
          <li className="p-3 mb-5  font-medium">
            <a href="find a store">Find a Store</a>
          </li>
          <li className="p-3 mb-5 font-medium">
            <a href="accessories">Accessories</a>
          </li>
          <li className="p-3 mb-5 font-medium">
            <a href="AirPods">AirPods</a>
          </li>
          <li className="p-3 mb-5 font-medium">
            <a href="Apple Intelligense">Apple Intelligense</a>
          </li>
          <li className="p-3 mb-5 font-medium">
            <a href="Apple Trade In">Apple Trade In</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
