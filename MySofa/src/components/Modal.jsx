import "../styles/Modal.css";

const Modal = () => {
  return (
    <div className="modal_overlay">
      <div className="modal_box">
        <div className="modal_message_container">
          <span className="modal_message">정말 삭제하시겠어요?</span>
        </div>
        <div className="modal_buttons">
          <button className="modal_cancel">취소</button>
          <button className="modal_confirm">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
