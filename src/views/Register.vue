<template>
   <div class="login-page">
        <div class=" register-main">
            <div class="container-register">
                <div class="register-form">
                    <div class="box register">
                        <h2>Register</h2>
                        <form @submit.prevent="handleSubmit">
                                <div class="form-group">
                                    <label for="email">Đia Chỉ Email:</label>
                                    <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="userRegister.email">
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Mật Khẩu:</label>
                                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="userRegister.password">
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Xác Nhận Mật Khẩu:</label>
                                    <input type="password" class="form-control" placeholder="Enter password" id="repeatpwd" v-model="userRegister.repeatPassword">
                                </div>

                                <input type="submit" value="Xác Nhận" class="submitRegister" />
                        </form> 

                    </div>
                </div> 
                <div class="FormBox-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import { reactive } from 'vue'
import { useRouter } from 'vue-router';

export default {
    name:'register-page',
    setup(){
        const router = useRouter(); 
      
        const userRegister =  reactive ({
            email :  "",
            password :  "",
            repeatPassword : "",
        });
        const handleSubmit = () => {
            if(userRegister.password === userRegister.repeatPassword){
                const data = {
                email : userRegister.email,
                password : userRegister.password,
                repeatPassword : userRegister.repeatPassword,
                };
                try {
                store.dispatch("auth/signUpAction" ,{data , router} );
                alert("Đăng Ký Thành Công Chuyển Sang Trang Đăng Nhập Ngay")
                } catch (error) {
                    console.log("Error: ", error);
                }
            }else {
                alert("Xác Nhận Mật Khẩu Chưa Đúng Vui Lòng Nhập Lại");
            }
        };
        return {
            userRegister,
            handleSubmit
        }
    },
 
    
}
</script>

<style>
.register-main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff ;
}
.container-register{
    position: relative;
    width: 800px;
    height: 530px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 100px;
}
.register-form{
    position: absolute;
    top: 40px;
    width: 100%;
    height: 450px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 45px rgba(0,0,0, 0.3); 
    display: flex;
    justify-content: left;
    align-items: center;
}
.register-form .box{
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}
.register-form .box h2 {
    color: rgb(18, 18, 78);
    font-size: 40px;
    font-weight: 500;
}
.FormBox-1{
    position:absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgb(18, 18, 78);
    z-index: 2;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 45px rgba(0,0,0, 0.25);
    left: 50%;
}
.submitRegister{
    background-color: rgb(18, 18, 78);
    border: 2px solid rgb(18, 18, 78);
    width: 100%;
    transition: all 0.5s ease-in-out;
    color: white;
    margin-top: 10px;
    padding: 5px 0;
    border-radius:6px ;
}
.submitRegister:hover{
    background-color: black;
    border: 2px solid orange;
    color: white;
}

</style>