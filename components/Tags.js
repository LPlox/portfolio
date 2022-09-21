import style from "../styles/Tags.module.css";

export default function Tags({ tags }) {
  return (
    <div className={style.tagswrapper}>
      {tags.map((tag, index) => (
        <button key={index} className={style.tagbutton}>
          {tag}
        </button>
      ))}
    </div>
  );
}
