import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImagePage, PortfolioPage } from "./pages";
import Header from "./components/common/header";
import Footer from "./components/common/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/image" element={<ImagePage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
