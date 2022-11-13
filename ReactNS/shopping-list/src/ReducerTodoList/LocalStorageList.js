import { useEffect } from "react"

let list = ['mango','apple']
useEffect(()=>{
    localStorage['myList'] = JSON.stringify(list)
},[])

console.log(object)