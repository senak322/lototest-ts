import "./Number.css";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addToField, removeFromField } from "../../store/slices/lotoSlice";

interface NumberProps {
  num: number;
  isMain: boolean;
}

function Number({ num, isMain }: NumberProps) {
  const { firstField, secondField } = useSelector(
    (state: RootState) => state.loto
  );

  const appDispatch = useAppDispatch();
  const isActive = isMain
    ? firstField.includes(num)
    : secondField.includes(num);

  const handleClick = useCallback(() => {
    console.log();

    if (isMain) {
      if (!firstField.includes(num) && firstField.length < 8) {
        appDispatch(addToField({ number: num, isFirst: true }));
      } else if (firstField.includes(num)) {
        appDispatch(removeFromField({ number: num, isFirst: true }));
      }
    } else {
      // Здесь  логика для второго поля
      if (!secondField.includes(num) && secondField.length < 1) {
        appDispatch(addToField({ number: num, isFirst: false }));
      } else if (secondField.includes(num)) {
        appDispatch(removeFromField({ number: num, isFirst: false }));
      }
    }
  }, [num, isMain, firstField, secondField, appDispatch]);

  return (
    <button
      className={`number ${isActive ? "number_active" : ""}`}
      onClick={handleClick}
    >
      {num}
    </button>
  );
}

export default Number;
