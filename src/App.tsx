import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImagePage, PortfolioPage } from "./pages";
import Header from "./components/common/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/image" element={<ImagePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
