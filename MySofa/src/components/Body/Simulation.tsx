import Detail from "./Detail";
import useMyItem from "../../hook/useMyitem";
import useTitle from "../../hook/useTitle";

import { useParams } from "react-router-dom";
import { CustomizationData, Product } from "@/types";

const Simulation: React.FC = () => {
  const params = useParams<{id: string}>();
  useTitle("MySofa :: 제품 상세 페이지");

  const item = useMyItem(params.id!);
  if (!item) {
    return <div>데이터 로딩중</div>;
  }

  const onSubmit = (item: Product): void => {
    // 시뮬레이션 유니티 WebGL 연결
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
        submitText={"시뮬레이션 해보기"}
        item={item}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Simulation;
