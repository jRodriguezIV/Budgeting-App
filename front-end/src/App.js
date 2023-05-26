import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Show from "./Pages/Show/Show";
import New from "./Pages/New/New";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/:id" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
