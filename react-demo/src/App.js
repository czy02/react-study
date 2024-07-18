import { useSelector, useDispatch } from "react-redux";
import { inscrement, decrement } from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "./store/modules/chanelStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(10))}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement(20))}>+</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
