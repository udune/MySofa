import "../../styles/Admin.css";

import AdminItem from "../UI/AdminItem.tsx";
import Modal from "../UI/Modal.tsx";
import useTitle from "../../hook/useTitle";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductState } from "../../contexts/ProductContext";
import { useProductDispatch } from "../../contexts/ProductContext";

const Admin: React.FC = () => {
  const nav = useNavigate();
  const productItems = useProductState();
  const { onDelete } = useProductDispatch();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);

  useTitle("MySofa :: 관리자 페이지");

  const onClickDelete = (id: string): void => {
    setId(id);
    setIsModal(true);
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
      <div className="admin">
        <div className="title">
          <span className="title_text">관리자 페이지</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="table_head_id">ID</th>
              <th className="table_head_name">제품명</th>
              <th className="table_head_type">종류</th>
              <th className="table_head_buttons">
                <button className="add_button" onClick={() => nav(`/home/add`)}>
                  추가
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {productItems.map((item, index) => {
              return (
                <AdminItem
                  key={item.id}
                  index={index}
                  item={item}
                  onDelete={() => onClickDelete(item.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
