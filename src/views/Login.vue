<template>
    <div class="login-page">
        <div class=" login-main">
            <div class="container-login">
                <div class="login-form">
                    <div class="box login">
                        <h2>LoGin</h2>
                        <form>
                            <div class="form-group">
                                <label for="email">Đia Chỉ Email:</label>
                                <input type="email" class="form-control" placeholder="Enter email" id="email"
                                    v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="pwd">Mật Khẩu:</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="pwd"
                                    v-model="password">
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox"> Lưu Tài Khoản
                                </label>
                            </div>
                            <button @click="login" class="btn submitLogin">Đăng Nhập </button>
                            <router-link to="/Register" type="submit" class="btn submitLogin">Đăng ký</router-link>
                            <div class="icon-social">

                                <button class="button-social" @click="loginGoogle">
                                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                        alt="google">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="FormBox"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import store from '@/store';
// import { reactive } from 'vue'
import router from '@/router';
import Cookies from 'js-cookie'
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyBNUPLGjkyEMHyFjBGFDHKgq00EsYP-QjI",
    authDomain: "football-club-f93fc.firebaseapp.com",
    projectId: "football-club-f93fc",
    storageBucket: "football-club-f93fc.appspot.com",
    messagingSenderId: "223758696746",
    appId: "1:223758696746:web:fc1c5c311365c61e4c1e53"
};


// Your web app's Firebase configuration


// Initialize Firebase
export default {
    name: 'login-page',
    data() {
        return {
            email: "",
            password: "",
            token: null
        }
    },
    methods: {
        // back(){
        //     router.push("/Home")
        // },
        async login(e) {
            e.preventDefault();
            try {
                const res = await axios.post("http://localhost:3001/api/user/login", {
                    email: this.email,
                    password: this.password
                })
                this.token = res.data.token
                const expirationTime = new Date();
                expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
                Cookies.set("token", this.token, { expires: expirationTime });
                // console.log(this.token)
                // alert("Đăng nhập thành công")
                if (res.data.role === 'admin') {
                    //Go to admin
                    // ("/admin/manager")
                    router.push({ path: '/admin/manager' })
                }
                else {
                    //Go to home
                    router.push('/Home');
                }
            } catch (error) {
                console.log(error)
            }


        },
        async loginGoogle(e) {
            e.preventDefault()
            try {
                const app = initializeApp(firebaseConfig);
                const provider = new GoogleAuthProvider();
                const auth = getAuth(app);
                const getGoogle = await signInWithPopup(auth, provider)
                const credential = GoogleAuthProvider.credentialFromResult(getGoogle);
                const token = credential.accessToken;
                const user = getGoogle.user.displayName;
                console.log(token)
                console.log(user)
                router.push("/Home")
            } catch (error) {
                console.log(error)
            }
        }
    }
}

</script>

<style>
.login-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}

.container-login {
    position: relative;
    width: 800px;
    height: 530px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 100px;
}

.login-form {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 450px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: right;
    align-items: center;
}

.login-form .box {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.login-form .box h2 {
    color: rgb(18, 18, 78);
    font-size: 40px;
    font-weight: 500;
}

.FormBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgb(18, 18, 78);
    z-index: 2;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease;
}

.submitLogin {
    margin-top: 10px;
    background-color: rgb(18, 18, 78);
    border: 2px solid rgb(18, 18, 78);
    width: 100%;
    color: white;
    transition: all 0.5s ease-in-out;
}

.submitLogin:hover {
    background-color: black;
    border: 2px solid orange;
    color: white;
}

.FormBox {
    right: 50%;
}

.icon-social {
    text-align: center;
    padding: 20px;
}

.button-social {
    width: 45px;
    border-radius: 5px;
    margin-left: 10px;
}

.button-social img {
    width: 100%;
    height: 100%;
}</style>