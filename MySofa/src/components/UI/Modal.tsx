import { ModalProps } from "@/types";
import "../../styles/Modal.css";
import "../../styles/buttons.css";

const Modal: React.FC<ModalProps> = ({ message, confirmText, closeText, onConfirm, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }
  
  return (
    <div className="modal_overlay" onClick={handleOverlayClick}>
      <div className="modal_box" onClick={handleModalClick}>
        <div className="modal_message_container">
          <span className="modal_message">{message}</span>
        </div>
        <div className="modal_buttons">
          <button className="button-cancel" onClick={onClose}>
            {closeText}
          </button>
          <button className="button-confirm" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
