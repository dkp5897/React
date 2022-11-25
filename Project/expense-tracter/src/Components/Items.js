import React from "react";
import { useContext } from "react";
import { UserContext } from "./Cart";

const Items = (props) => {
    const{id,title,description,price,img,quantity} = props
    const {removeItem,increament,decrement} = useContext(UserContext)
  return (
    <>
      <div className="item-container">
        <div className="item-img">
          <img
            src={img}
            alt="img-1"
          />
        </div>

        <div className="item-title">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="item-addition">
          <i className="fa-solid fa-minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fa-solid fa-plus" onClick={()=>increament(id)}></i>
        </div>

        <div className="item-price">{price}rs</div>

        <div className="item-delete">
          <i className="fa-solid fa-trash delete" onClick={()=>removeItem(id,title)}></i>
        </div>
      </div>
    </>
  );
};

export default Items;
