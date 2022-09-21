import style from "../styles/LinkDescription.module.css";

export default function LinkDescription({ description }) {
  return (
    <div className={style.description}>
      <p>{description}</p>
    </div>
  );
}
