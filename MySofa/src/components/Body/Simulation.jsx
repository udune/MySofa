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

    const jsonData = JSON.stringify(customizationData);

    document.cookie = `customData=${encodeURIComponent(
      jsonData
    )}; path=/; SameSite=None; Secure; expires=${new Date(
      Date.now() + 3600 * 1000
    ).toUTCString()}`;

    window.location.href = "https://d8txu43mg2cok.cloudfront.net";
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
