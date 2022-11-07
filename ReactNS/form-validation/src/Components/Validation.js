export const alphaNumericValidation = (input)=>{
    let result = /^[a-zA-Z0-9]{3,16}$/.test(input)
    if(result){
        return false
    }
    return true
}

export const emailValidation = (input) =>{
    let result = /^[a-zA-Z0-9]{3,40}@[a-zA-Z0-9]{4,10}\.[a-z]{3,10}$/.test(input)
    if(result){
        return false
    }
    return true
}

export const passwordValidation = (input) =>{
    let result = /^[a-zA-Z0-9@,_-]{6,14}$/.test(input)
    if(result){
        return false
    }
    return true;
}

export const phoneValidation = (input) =>{
    let result = /^([0-9]{11}|[0-9]{3}-[0-9]{3}-[0-9]{4} )$/.test(input)
    if(result){
        return false
    }
    return true;
}