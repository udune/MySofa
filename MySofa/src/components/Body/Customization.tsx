import Detail from "./Detail";
import useProduct from "../../hook/useProduct";
import useTitle from "../../hook/useTitle";

import { useParams } from "react-router-dom";
import { Product } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { customSessionService } from "@/services/customSessionService";
import { CustomSessionRequest } from "@/types/customSession";

const Customization = () => {
  const { isAuthenticated, user } = useAuth();
  const params = useParams<{id: string}>();
  useTitle("MySofa :: 제품 상세 페이지");

  const item = useProduct(params.id!);
  if (!item) {
    return <div>데이터 로딩중</div>;
  }

  const onSubmit = async (item: Product): Promise<void> => {
    if (isAuthenticated()) {
      return;
    }
    
    try {
      const sessionRequest: CustomSessionRequest = {
        user_id: user?.id,
        product_id: item.id,
        name: item.name,
        custom_name: item.custom_name,
        color: item.color,
        material: item.material,
        size: item.size,
        model_type: item.model_type,
      }

      const sessionResponse = await customSessionService.createCustomSession(sessionRequest);

      const unityUrl = `https://unity.my-sofa.org/?sessionId=${sessionResponse.id}`;
      window.location.href = unityUrl;
    } catch (error) {
      console.log('커스텀 세션 생성 실패', error);
    }
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
