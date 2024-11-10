import { useState } from "react";

const useQe = () => {
  const [qe, setQe] = useState({ a: 1, b: 1, c: 1 });
  const handleChnageQe = (e) => {
    if (
      +e.target.value ||
      e.target.value.startsWith("-") ||
      e.target.value == ""
    ) {
      setQe({ ...qe, [e.target.id]: e.target.value });
    }
  };
  const [result, setResult] = useState("");
  const solveQe = () => {
    const { a, b, c } = qe;
    const delta = b ** 2 - 4 * a * c;
    
    const sqrtDelta = Math.sqrt(delta);
    if (a && b && c) {
        if (sqrtDelta > 0) {
            const f = Number.isInteger(-b + sqrtDelta)
            ? (-b + sqrtDelta) / (2 * a)
            : `${-b} + √${delta} / ${2 * a}`;
            const s = Number.isInteger(-b - sqrtDelta)
            ? (-b - sqrtDelta) / (2 * a)
            : `${-b} - √${delta} / ${2 * a}`;
            setResult(`two roots : ${f} , ${s}`);
        } else if (sqrtDelta == 0) {
            const r = -b / (2 * a);
            setResult(`one root : ${r}`);
        } else {
            setResult(`no root`);
        }
    }else{
        setResult('please enter a , b & c')
    }
    };
  return { result, solveQe, handleChnageQe, qe };
};

export default useQe;
