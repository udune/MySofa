import "../styles/MainPage.css";
import Header from "../components/Header";
import Products from "../components/Products";
import Detail from "../components/Detail";
import My from "../components/My";
import Admin from "../components/Admin";
import Form from "../components/Form";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default MainPage;
