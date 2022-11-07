import "./App.css"
import Display from "./DisplayBox";
import {useState} from "react"

const App = ()=>{

  // multiple state--------------->

  // const [getMobile,setMobile] = useState("Mobile Name")

  // const [getPrice, setPrice] = useState("Mobile Price");

  // const [getDiscount, setDiscount] = useState("Mobile Discount");

  // const onChangeHandler=(event)=>{
  //   if(event.target.id==="mobile"){
  //     setMobile(event.target.value)
  //   }
  //   else if(event.target.id=== "price"){
  //     setPrice(event.target.value)
  //   }
  //   else if(event.target.id==="discount"){
  //     setDiscount(event.target.value+"%")
  //   }
  // }

  // Single State---------------->

  const [getDisplay, setDisplay] = useState({
    mobile:"Mobile Name",
    price:"Mobile Price",
    discount:"Mobile Discount"
  });

  const onChangeHandler =(event)=>{
    setDisplay({...getDisplay,[event.target.name]:event.target.value})
  }


 return(
  <><div className="form">
     Enter Mobile Name:<input type="text" name="mobile" id="mobile" onChange={onChangeHandler} />
     <br /><br />
     Enter Mobile Price:<input type="text" name="price" id="price" onChange={onChangeHandler} />
     <br /><br />
     Enter Mobile Discount:<input type="text" name="discount" id="discount" onChange={onChangeHandler} />
   </div>
   <div className="container">
    {/* <Display mobile={getMobile} price={getPrice} discount={getDiscount} /> */}
    <Display mobile={getDisplay.mobile} price={getDisplay.price} discount={`${getDisplay.discount}%`} />
   </div>
   </>
 )
}

export default App;