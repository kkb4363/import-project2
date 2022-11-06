import {Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar";
import './style.css';

const Root = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default Root;
