import { signUpAPI } from "../../api/auth";
import { signInAPI } from "../../api/auth";
const state = () => {
    return {
        userRegister: {},
        userLogin: {},
    };
};

const mutations = {
    setUserRegisterMutation(state ,payload){
        state.userRegister = payload;
    },
    setUserLoginMutation(state,payload){
        state.userLogin = payload;
    }
};

const actions = {
    async signUpAction({commit} ,{data , router}){
            const userRegister = await signUpAPI(data); 
            router.push("/Login");
            commit("setUserRegisterMutation" , userRegister);
    },
    async signInAction({commit} ,{data , router} ){
        try {
            const userLogin = await signInAPI(data);
            router.push("/Home");
            commit("setUserLoginMutation" , userLogin)
        } catch (error) {
            alert("Tài Khoản Chưa Được Đăng Ký")
        }
    }
}

export default {
    namespaced: true ,
    state,
    mutations,
    actions
}