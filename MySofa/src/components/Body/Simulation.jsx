import Detail from "./Detail";
import useMyItem from "../../hook/useMyitem";
import useTitle from "../../hook/useTitle";

import { useParams } from "react-router-dom";

const Simulation = () => {
  const params = useParams();
  useTitle("MySofa :: 제품 상세 페이지");

  const item = useMyItem(params.id);
  if (!item) {
    return <div>데이터 로딩중</div>;
  }

  const onSubmit = (item) => {
    // 시뮬레이션 유니티 WebGL 연결
    const customizationData = {
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
