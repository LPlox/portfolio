import style from "../styles/TitleContainer.module.css";
const fontClasses = { gulax: style.gulax, picnic: style.picnic, pilowlava: style.pilowlava, typefesse: style.typefesse, solidemirage: style.solidemirage };

//https://codesandbox.io/s/thirsty-lewin-k3j1y?file=/src/index.js
export default function TitleContainer({ title, fonttype }) {
  const fontClass = fontClasses[fonttype];
  return <h1 className={`${style.title} ${fontClass}`}>{title}</h1>;
}
