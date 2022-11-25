import { products } from "./Products";

const initialState = {
    items:products,
    totalItem:0,
    totalAmount : 0
}


const reducer = (state,action)=>{
    switch(action.type){
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((ele)=>{
                    return ele.id !== action.payload
                })
            }
        case 'CLEAR_ALL' :
            return {
                ...state,
                items:[]
            }
        case 'INCREMENT' :
            return{
               ...state,
               items:state.items.map((ele)=>{
                if(ele.id=== action.payload){
                    return {...ele,quantity:ele.quantity+1}
                }
                return ele;
               })
            }
        case 'DECREMENT' :
            return{
                ...state,
                items: state.items.map((ele)=>{
                    if(ele.id === action.payload){
                        if(ele.quantity<=1){
                            return {...ele,quantity:1}
                        }
                        return {...ele,quantity:ele.quantity-1}
                    }
                    return ele;
                })
            }
        case 'GET_TOTAL':
            {
                let {totalItem,totalAmount} = state.items.reduce((accum,curVal)=>{
                    let {quantity,price} = curVal
                    accum.totalItem+=quantity
                    
                    let updatesAmount = price * quantity ;
                    accum.totalAmount += updatesAmount
                    
                    return accum
                },{
                    totalItem:0,
                    totalAmount:0
                })

                return {...state,totalItem,totalAmount}
            }
            
        default :
            return state
    }
}

export {initialState,reducer}