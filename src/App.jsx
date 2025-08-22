import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Createpost.jsx";

import Update from "./components/Update.jsx";
import Navbar from "./components/Navbar";
import Read from "./components/Read.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
