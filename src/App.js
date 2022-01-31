import Home from "./components/Home";
import Listing from "./components/Listing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie" element={<Listing />} />
        <Route path="/series" element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
