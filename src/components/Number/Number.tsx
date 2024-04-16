import "./Number.css";
import { useCallback, useState } from "react";

interface NumberProps {
  num: number;
}

function Number({ num }: NumberProps) {

    const [isActive, setIsActive] = useState(false)

    const handleClick = useCallback(() => {
        setIsActive(!isActive)
    }, [isActive])

  return <div className={`number ${isActive ? "number_active" : ""}`} onClick={handleClick}>{num}</div>;
}

export default Number;
