import "./DisplayBox.css"

function Display(props) {
  return (
    <div>
      <h1>{props.mobile}</h1>
      <h2>{props.price}</h2>
      <h3>{props.discount}</h3>
    </div>
  );
}


export default Display;