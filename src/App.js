import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Signup from "./components/Signup/Signup";
import Trainer from "./components/Trainer/Trainer";
import Purchase from "./components/Purchase/Purchase";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Payment from "./components/Payment/Payment";
import Footer from "./components/Footer/Footer";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/trainer" element={<Trainer></Trainer>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/forgotpassword"
          element={<ForgotPass></ForgotPass>}
        ></Route>
        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Payment></Payment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
