

function SearchBar() {

    const handleClose=() =>{
        window.history.back();
    }
  return (
    <div className="">
        <div className="mt-10">   
            <img src="/close_icon.svg" alt=""  className="w-20 h-17 ml-215  "onClick={handleClose}/>
            </div>
       
            
      <div className="flex justify- ">
     <img src="/search_icon.svg" alt=""  className="w-20 h-17 "/>
        <input type="text" placeholder="Search" className="placeholder-[#6e6e73] w-100 px-20 py-10 text-7xl font-medium
 outline-none 
"/>
        
      </div>
    </div>
  )
}

export default SearchBar
