import axiosAPI from "."
export const signUpAPI = ( userRegister ) => {
    return axiosAPI.post("/user/register" , userRegister )
} 

export const signInAPI = ( userLogin ) => {
    console.log(userLogin)
    return axiosAPI.post("/user/login" , userLogin )
} 