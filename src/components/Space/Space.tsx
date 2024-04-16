import "./Space.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Number from "../Number/Number";

interface SpaceProps {
  spaceNumber: number;
  intCount: number;
}

function Space({ spaceNumber, intCount }: SpaceProps) {
  const { mainNumbers, secondNumbers } = useSelector(
    (state: RootState) => state.loto
  );

  const correctNumbers = spaceNumber === 1 ? mainNumbers : secondNumbers;
  return (
    <div className="space">
      <div className="space__wrapper">
        <h2 className="space__title">Поле {spaceNumber}</h2>
        <p className="space__discription">
          Отметьте {intCount} {intCount > 1 ? "чисел" : "число"}
        </p>
      </div>
      <div className="space__num-container">
        {correctNumbers.map((num) => {
          return <Number num={num} />;
        })}
      </div>
    </div>
  );
}

export default Space;
