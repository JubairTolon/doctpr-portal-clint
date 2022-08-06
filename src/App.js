import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Nav from "./Pages/Shared/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppointments from "./Pages/DashBoard/MyAppointments";
import MyReview from "./Pages/DashBoard/MyReview";
import Users from "./Pages/DashBoard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/DashBoard/AddDoctor";
import ManageDoctor from "./Pages/DashBoard/ManageDoctor";
import Payment from "./Pages/DashBoard/Payment";

function App() {
  return (
    <div className='w-100vh mx-auto'>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }></Route>
        <Route path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}>
          </Route>
          <Route path="addDoctor" element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>}>
          </Route>
          <Route path="manageDoctor" element={
            <RequireAdmin>
              <ManageDoctor></ManageDoctor>
            </RequireAdmin>}>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
