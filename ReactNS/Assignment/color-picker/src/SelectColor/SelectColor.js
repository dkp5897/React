import "./SelectColor.css"
function ColorBox(props){
    return(
        <div className="color-box" 
             style={{backgroundColor:props.color}}
             onClick = {()=>props.onSelectHandler(props.color)} >{props.color}</div>
    )
}

export default ColorBox;