import "./App.css";
import Dad3 from "./pages/store/Dad3.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
          <Route path="/store" element={<Dad3/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
