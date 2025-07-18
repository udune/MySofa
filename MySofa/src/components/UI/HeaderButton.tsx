import { HeaderButtonProps } from "@/types";
import "../../styles/HeaderButton.css";
import { Link } from "react-router-dom";

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, link, onClick }) => {
  return (
    <div className="headerButton">
      <Link to={link} onClick={onClick} className="item_text">
        {text}
      </Link>
    </div>
  );
};

export default HeaderButton;
