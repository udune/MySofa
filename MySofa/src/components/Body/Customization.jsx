import Detail from "./Detail";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductState } from "../../contexts/ProductContext.jsx";

const Customization = () => {
  const nav = useNavigate();
  const params = useParams();
  const items = useProductState();
  const [item, setItem] = useState();

  useEffect(() => {
    const item = items.find((item) => String(item.id) === String(params.id));
    if (!item) {
      window.alert("존재하지 않는 제품입니다.");
      nav("/", { replace: true });
    }

    setItem(item);
    console.log(item);
  }, [params.id]);

  const onSubmit = (item) => {
    // 커스텀 유니티 WebGL 연결
  };

  return (
    <div>
      <Detail
        submitText={"커스터마이징 해보기"}
        item={item}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Customization;
