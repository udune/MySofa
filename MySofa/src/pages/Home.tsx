import "../styles/Home.css";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
