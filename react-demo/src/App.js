import { useSelector, useDispatch } from "react-redux";
import { inscrement, decrement } from "./store/modules/counterStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(10))}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement(20))}>+</button>
    </div>
  );
}

export default App;
