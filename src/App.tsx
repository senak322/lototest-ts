// import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useCallback } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { useAppDispatch } from "./hooks/useAppDispatch";
import {
  setResult,
  setIsTicketWon,
  addToField,
  removeField,
} from "./store/slices/lotoSlice";

function App() {
  const appDispatch = useAppDispatch();
  const { firstField, secondField, result } = useSelector(
    (state: RootState) => state.loto
  );

  const randomArr = useCallback((maxSize: number, maxCount: number) => {
    const numberSet = new Set();
    while (numberSet.size < maxCount) {
      const randomNum = Math.floor(Math.random() * maxSize) + 1;
      numberSet.add(randomNum);
    }
    return Array.from(numberSet);
  }, []);

  const handleResult = useCallback(() => {
    if (firstField.length === 8 && secondField.length === 1) {
      const bigArr = randomArr(19, 8);
      const smallArr = randomArr(2, 1);
      // Подсчёт совпадений в первом поле
      const matchesInFirstField = firstField.filter((number) =>
        bigArr.includes(number)
      ).length;
      // Подсчёт совпадений во втором поле
      const matchesInSecondField = secondField.filter((number) =>
        smallArr.includes(number)
      ).length;

      // Проверка условий победы
      const isWinner =
        matchesInFirstField >= 4 ||
        (matchesInFirstField >= 3 && matchesInSecondField === 1);

      // Вывод сообщения о результате
      if (isWinner) {
        appDispatch(setResult("Ого, вы выиграли! Поздравляем!"));
        appDispatch(setIsTicketWon(true));
      } else {
        appDispatch(setResult("Увы, в этот раз не повезло. Попробуйте снова!"));
        appDispatch(setIsTicketWon(false));
      }
    }
  }, [randomArr, firstField, secondField, appDispatch]);

  const hadleClickStick = useCallback(() => {
    appDispatch(removeField());
    const bigArr = randomArr(19, 8);
    const smallArr = randomArr(2, 1);
    bigArr.forEach((el) => {
      const elNumber = Number(el);
      appDispatch(addToField({ number: elNumber, isFirst: true }));
    });
    smallArr.forEach((el) => {
      const elNumber = Number(el);
      appDispatch(addToField({ number: elNumber, isFirst: false }));
    });
  }, [appDispatch, randomArr]);

  return (
    <div className="App">
      <Main
        handleClick={handleResult}
        result={result}
        hadleClickStick={hadleClickStick}
      />
    </div>
  );
}

export default App;
