import './App.css';
import Header from "./MyComponents/Header";
import MainPage from "./MyComponents/MainPage";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import SignUpPage from "./MyComponents/SignUpPage";
import Loginpage from "./MyComponents/loginpage";
import Items from "./MyComponents/Items";
import PP from "./MyComponents/ProfilePage";
import EE from "./MyComponents/electronics";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route exact path="/mainpage/electronics" element={<EE />}/>
          <Route exact path="/" element={<SignUpPage />}/>
          <Route exact path="/mainpage" element={<MainPage />}/>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/loginpage" element={<Loginpage />}/>
          <Route exact path="/itempage" element={<Items/>}/>
          <Route exact path="/profile" element={<PP/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
