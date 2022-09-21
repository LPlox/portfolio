import Image from "next/image";
import style from "../styles/ImageContainer.module.css";
const imageClasses = { spin: style.spin };

export default function ImageContainer({ image, styling }) {
  const imageClass = imageClasses[styling] ? imageClasses[styling] : "";
  return (
    <div className={style.container}>
      <Image className={`${style.image} ${imageClass}`} src={"/images/" + image} alt="" width="100" height="100" />
    </div>
  );
}
