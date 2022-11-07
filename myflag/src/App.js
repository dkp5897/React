import Normal from "./Normal";
import "./index.css";

export default function App() {
  // const bgcolor = "grey"
  // const [bg,setBg] = useState(bgcolor)

  const bgColor = () => {
    // setBg('green')
    document.body.style.backgroundColor = " #FF7722";
    document.querySelector(".App").style.backgroundColor = "green";
    document.querySelector(".main").style.backgroundColor = "white";
    document.querySelector("button").innerHTML="Jai Hind!";

    Normal();
  };

  return (
    <div className="main">
      <div className="App">
        <button onClick={bgColor}>click me</button>
      </div>
    </div>
  );
}
