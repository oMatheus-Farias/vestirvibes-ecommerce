import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
