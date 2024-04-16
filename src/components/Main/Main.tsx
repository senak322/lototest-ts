import "./Main.css";
import stick from "../../images/magic-wand.png";
import Space from "../Space/Space";

interface MainProps {
  handleClick: () => void;
  result: string;
  hadleClickStick: () => void;
}

function Main({ handleClick, result, hadleClickStick }: MainProps) {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__wrapper">
          <h1 className="main__title">Билет 1</h1>
          {!result && (
            <button className="main__stick-btn" onClick={hadleClickStick}>
              <img
                className="main__stick-img"
                src={stick}
                alt="Волшебная палочка"
              />
            </button>
          )}
        </div>
        {!result ? (
          <>
            <Space spaceNumber={1} intCount={8} />
            <Space spaceNumber={2} intCount={1} />
            <button className="main__result-btn" onClick={handleClick}>
              Показать результат
            </button>
          </>
        ) : (
          <p>{result}</p>
        )}
      </div>
    </main>
  );
}

export default Main;
