import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import LifeCyclePage from "./pages/LifeCyclePage/LifeCyclePage";

function App() {
  return (
    <div>
      {/* react router */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/LifeCycle' element={<LifeCyclePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
