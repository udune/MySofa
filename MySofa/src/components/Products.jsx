import test from "../assets/images/test.png";
import "../styles/Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="title">
        <span className="title_text">소파를 선택해주세요</span>
      </div>
      <div className="grid">
        <div className="card">
          <img src={test} alt="" className="card_img" />
          <span className="card_text">2-Seater Sofa</span>
        </div>
        <div className="card">
          <img src={test} alt="" className="card_img" />
          <span className="card_text">Modern Armchair</span>
        </div>
        <div className="card">
          <img src={test} alt="" className="card_img" />
          <span className="card_text">2-Seater Sofa</span>
        </div>
        <div className="card">
          <img src={test} alt="" className="card_img" />
          <span className="card_text">Classic Armchair</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
