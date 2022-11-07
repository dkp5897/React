import "./Selection.css";

function Selection(props) {
  return (
    <div>
      <h2>Selection</h2>
      <div
        onClick={() => {
          props.applyColor(props.id);
        }}
        className="selection-box"
        style={{ background: props.fillColor }}
      ></div>
    </div>
  );
}
export default Selection;
