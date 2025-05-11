import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
