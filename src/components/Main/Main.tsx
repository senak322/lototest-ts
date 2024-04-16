import "./Main.css";
import stick from "../../images/magic-wand.png";
import Space from "../Space/Space";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__wrapper">
          <h1 className="main__title">Билет 1</h1>
          <img
            className="main__stick-img"
            src={stick}
            alt="Волшебная палочка"
          />
        </div>
        <Space spaceNumber={1} intCount={8} />
        <Space spaceNumber={2} intCount={1} />
        <button className="main__result-btn">Показать результат</button>
      </div>
    </main>
  );
}

export default Main;
