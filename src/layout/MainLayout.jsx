import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Todo from "../components/Todo.jsx";


const MainLayout = () => {
  return (
    <div>
      <Navbar />
{/* 
      <Todo /> */}



      <Outlet />
     

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
