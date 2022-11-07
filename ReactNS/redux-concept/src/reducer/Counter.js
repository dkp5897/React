import {createSlice} from '@reduxjs/toolkit'

const conuterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decreament:(state)=>{
            state.count-=1;
        }
    }
})

export const {increment,decreament} = conuterSlice.actions
export default conuterSlice.reducer