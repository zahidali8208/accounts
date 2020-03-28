import {LOGIN} from '../action/login'

let initState={
    loginData:{}
}
const loginReducer=(state=initState ,action)=>{
switch (action.type) {
    case LOGIN:
        console.log('Data in Reducer', action.payload);
        return{
            ...state,
            loginData:action.payload
        }
        

    default:
        return state
}
}

export default loginReducer