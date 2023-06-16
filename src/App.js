import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Secondpart } from "./components/Secondpart";
import Page1 from "./pages/Page1";
import { Thirdpart } from "./components/Thirdpart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Page1 />} />
          <Route path="/search" exact element={<Secondpart />} />
          <Route path="/playvideo" exact element={<Thirdpart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
