
import './App.css';
import {useSelector} from 'react-redux'

function App() {

  const count = useSelector((state)=>state.counter.count);
  console.log(count)

  return (
    <div className="App">
      <h1>the count is : {count}</h1>
    </div>
  );
}

export default App;
