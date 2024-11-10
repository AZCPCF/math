import "./App.css";
import useQe from "./hooks/useQe";
function App() {
  const { result, solveQe, qe, handleChnageQe } = useQe();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl m-4 text-green-400">Quadratic Equation</h1>
        {Object.keys(qe).map((item) => (
          <input
            className="text-black w-[90%] md:w-1/3 sm:w-1/2 xl:w-1/5 border-[3px] border-green-400 rounded-lg m-2 p-2"
            placeholder={item}
            id={item}
            key={item}
            onChange={handleChnageQe}
            value={qe[item]}
          />
        ))}

        <input
          className="border-2 w-[90%] md:w-1/3 sm:w-1/2 xl:w-1/5 border-green-400 rounded-lg m-2 p-2 hover:bg-green-400"
          type="submit"
          value={'submit'}
          onClick={solveQe}
        />
        <p className="text-green-400 mt-14">{result}</p>
      </header>
    </div>
  );
}

export default App;