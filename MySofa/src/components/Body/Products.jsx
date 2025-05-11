import "../../styles/Products.css";
import ProductItem from "../UI/ProductItem";
import { useProductState } from "../../contexts/ProductContext";

import { useState } from "react";

const Products = () => {
  const productItems = useProductState();
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const searching = () => {
    if (search === "") {
      return productItems;
    }

    return productItems.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const searchedItems = searching();

  return (
    <div className="products">
      <div className="title">
        <span className="title_text">제품을 선택해주세요</span>
        <p className="subtitle">당신의 공간을 위한 맞춤형 소파를 찾아보세요</p>
        <div className="search_box">
          <input
            type="text"
            value={search}
            onChange={onChangeSearch}
            placeholder="제품명을 입력하세요"
            className="searchInput"
          />
        </div>
      </div>
      <div>
        <div className="grid">
          {searchedItems.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
