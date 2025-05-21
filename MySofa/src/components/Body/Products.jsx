import "../../styles/Products.css";
import ProductItem from "../UI/ProductItem";
import useTitle from "../../hook/useTitle";

import { useProductState } from "../../contexts/ProductContext";
import { useEffect, useState } from "react";

const Products = () => {
  const productItems = useProductState();
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState(productItems);

  useTitle("MySofa :: 제품 페이지");

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        setSearchedItems(productItems);
      } else {
        const filterItems = productItems.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchedItems(filterItems);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search, productItems]);

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
