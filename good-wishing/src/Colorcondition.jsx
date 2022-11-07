
let cssStyle = {
  fontSize: "50px",
  textAlign: "center",
};

let time = new Date().getHours();

function CssCondition(){
    if(time >= 1 && time<12){
       cssStyle.color = "green"
    }else if(time>=12 && time<19){
        cssStyle.color="Orange"
    }else{
       cssStyle.color='Black'
    }
}

CssCondition();

export default cssStyle;