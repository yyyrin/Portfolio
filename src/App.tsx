import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImagePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/image" element={<ImagePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
