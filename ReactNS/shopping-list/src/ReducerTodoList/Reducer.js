
const initialState = {
    getText:'',
    dataList:[],
    setEdit:false,
    getIndex: -1
}

function Reducer(state,action) {
  switch(action.type){
    case 'change':
        return{
            ...state,
            getText : action.event.target.value
        }
    case 'addition':
        return {
            ...state,
            dataList : [...state.dataList,state.getText],
            getText: ""
        }
    case 'delete':
        return{
            ...state,
            dataList:state.dataList.filter((ele)=>{
                return ele != state.dataList[action.index]
            })
        }
    case 'setEdit':
        return{
            ...state,
            setEdit:true,
            getIndex : action.index,
            getText : state.dataList[action.index]

        }
    case 'editSubmit':
        return{
            ...state,
            dataList : state.dataList.splice(state.getIndex,1,state.getText),
            setEdit : false
        }
    default :
        return state
  }
}


export {initialState,Reducer}