import { ThumbnailProps } from "@/types";
import "../../styles/Thumbnail.css";

const Thumbnail: React.FC<ThumbnailProps> = ({ style, name, color, material, size, modelType }) => {
  const url = `https://mysofafile.s3.ap-northeast-2.amazonaws.com/${name}_${color}_${material}_${size}_${modelType}.png`;

  return (
    <>
      <img src={url} className={style} />
    </>
  );
};

export default Thumbnail;
