

let time = new Date().getHours();
let massage = ""
function Condition(){
    if(time >= 1 && time<12){
        massage="Goom Mornig"
    }else if(time>=12 && time<19){
        massage="Good Afternoon"
    }else{
        massage="Good Night"
    }
    return massage;
}
Condition();

export default massage;