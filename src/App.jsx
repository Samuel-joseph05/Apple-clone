import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Store from "./components/Store.jsx";
import SearchBar from "./pages/SearchBar.jsx";
function App() {
  let slides = {
    // <img src="img_1.jpg" className="w-70 h-50"></img>
    //  [<img src="img_1.jpg" className="w-70 h-50"></img>] ,
    //   <img src="img_1.jpg" className="w-70 h-50"></img>,
    //   <img src="img_1.jpg" className="w-70 h-50"></img>
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home slides={slides} />}></Route>
          <Route path="/store" element={ <Store />}></Route>
          <Route path="/searchbar" element={<SearchBar />}></Route>
        </Routes>
      </Router>
     
     

    </>
  );
}

export default App;
