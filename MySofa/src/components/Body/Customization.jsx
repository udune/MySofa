import Detail from "./Detail";
import useProduct from "../../hook/useProduct";
import useTitle from "../../hook/useTitle";

import { useParams } from "react-router-dom";

const Customization = () => {
  const params = useParams();
  useTitle("MySofa :: 제품 상세 페이지");

  const item = useProduct(params.id);
  if (!item) {
    return <div>데이터 로딩중</div>;
  }

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
