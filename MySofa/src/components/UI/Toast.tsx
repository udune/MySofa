import { useEffect } from "react"

interface ToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration])

    return (
        <div className="toast">
            <div className="toast_content">
                {message}
            </div>
        </div>
    );
}

export default Toast;