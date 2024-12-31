import Input from "components/input";
import Title from "components/title";
import useQe from "hooks/useQe";
import "./App.css";
import SubmitButton from "components/button/submit";
function App() {
  const { result, solveQe, qe, handleChnageQe } = useQe();
  return (
    <div className="App">
      <Title>Quadratic Equation</Title>
      {Object.keys(qe).map((item) => (
        <Input
          placeholder={item}
          id={item}
          onChange={handleChnageQe}
          value={qe[item]}
          label={item}
        />
      ))}

      <SubmitButton type="submit" value={"submit"} onClick={solveQe} />
      <p className="text-green-400 mt-14">{result}</p>
    </div>
  );
}

export default App;
