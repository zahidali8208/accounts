

export const LOGIN ='LOGIN'

export const login=(loginData)=>{
    console.log('Data in Action',loginData);
    return{
        type:LOGIN,
        payload:loginData
    }    
}
