import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { User } from "./components/User";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <Counter />
      <User />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />
    </>
  );
}

export default App;
