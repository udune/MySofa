import Detail from "./Detail";
import useProduct from "../../hook/useProduct";
import useTitle from "../../hook/useTitle";

import { useParams } from "react-router-dom";
import { CustomizationData, Product } from "@/types";

const Customization = () => {
  const params = useParams<{id: string}>();
  useTitle("MySofa :: 제품 상세 페이지");

  const item = useProduct(params.id!);
  if (!item) {
    return <div>데이터 로딩중</div>;
  }

  const onSubmit = (item: Product): void => {
    // 커스텀 유니티 WebGL 연결
    const customizationData: CustomizationData = {
      token: "abcdef",
      ...item,
    };

    localStorage.setItem(
      "mysofa_customdata",
      JSON.stringify(customizationData)
    );

    window.location.href = "https://unity.my-sofa.org/";
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
