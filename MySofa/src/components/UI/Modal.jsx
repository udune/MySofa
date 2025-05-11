import "../../styles/Modal.css";

const Modal = ({ message, confirmText, closeText, onConfirm, onClose }) => {
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_box" onClick={(e) => e.stopPropagation()}>
        <div className="modal_message_container">
          <span className="modal_message">{message}</span>
        </div>
        <div className="modal_buttons">
          <button className="modal_cancel" onClick={onClose}>
            {closeText}
          </button>
          <button className="modal_confirm" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
