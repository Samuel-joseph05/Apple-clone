import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Store from "./components/Store.jsx";
import SearchBar from "./pages/SearchBar.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/searchbar" element={<SearchBar />}></Route>
          <Route path="/menubar" element={<Menu />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
