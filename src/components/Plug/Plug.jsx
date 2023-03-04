import s from "./Plug.module.css";
import cats from "../../images/cats.png";

export const Plug = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>You have no todo yet</h2>
      <img className={s.image} src={cats} alt="cats" />
    </div>
  );
};
