function Normal() {
    setTimeout(() => {
      document.body.style = "grey";
      document.querySelector(".main").style.backgroundColor = "grey";
      document.querySelector(".App").style.backgroundColor = "grey";
      document.querySelector("button").innerHTML = "click me";
    }, 5000);
  }
  
  export default Normal;
  