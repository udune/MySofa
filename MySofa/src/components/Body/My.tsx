import "../../styles/My.css";
import MyItem from "../UI/MyItem.tsx";
import Modal from "../UI/Modal.tsx";
import useTitle from "../../hook/useTitle";

import { useState } from "react";
import { useMyItemState } from "../../contexts/MyItemContext";
import { useMyItemDispatch } from "../../contexts/MyItemContext";

const My: React.FC = () => {
  const myItems = useMyItemState();
  const { onDelete } = useMyItemDispatch();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);

  useTitle("MySofa :: 마이 페이지");

  const onClickDelete = (id: string): void => {
    setIsModal(true);
    setId(id);
  };

  const confirm = (): void => {
    if (id !== null) {
      onDelete(id);
    }
    close();
  };

  const close = (): void => {
    setIsModal(false);
    setId(null);
  };

  return (
    <>
      {isModal && (
        <Modal
          message={"정말 삭제하시겠어요? 복구는 안 되요."}
          confirmText={"삭제"}
          closeText={"취소"}
          onConfirm={confirm}
          onClose={close}
        />
      )}
      <div className="my">
        <div className="title">
          <span className="title_text">마이 페이지</span>
          <span className="subtitle_text">내가 저장한 커스텀 목록</span>
        </div>
        <div className="saved_list">
          {myItems.map((item) => {
            return (
              <MyItem
                key={item.id}
                item={item}
                onDelete={() => onClickDelete(item.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default My;
