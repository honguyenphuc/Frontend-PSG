<template>
    <div class="page-header">
    <div class="header-1"></div> 
    <nav class="navbar navbar-expand-sm">
        <a class="navbar-brand logo-header" href="#">
            <img src="../assets/img/header/Psg-logo-removebg-preview.png" alt="">
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <i class="fa fa-bars"></i>
            </span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active current">
                    <router-link to="/Home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Product/Men" class="nav-link">Shop</router-link>
                </li>
                
                <li class="nav-item">
                    <router-link to="/Player" class="nav-link">Player</router-link>
                </li>
            </ul>
            
                <div class="icon-main">
                        <form class="form" id="icon-search">
                            <button>
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <input class="input" placeholder="Type your text" required="" type="text">
                            <button class="reset" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </form>
                
                    <div id="icon-user">
                        <span v-if="userLogin.user">
                            <router-link to="#" >Phúc</router-link>
                        </span> 
                        <div v-else>
                            <router-link to="/Login" >
                                <i class="fa fa-user-alt"></i>
                                <div class="log-out">
                                    <span>Log-Out</span>
                                </div>
                            </router-link> 
                        </div> 
                    </div>
                    
                    <div class="icon-shopbag" >
                            <i class="fa fa-shopping-cart" @click="hanldeOpenModalCartList"></i>
                            <span class="badge badge-light ml-2">{{ sumcartList }}</span>
                    </div>
                </div>
        </div>
    </nav>
    <teleport to='#app'> 
        <app-modal 
            :isOpen="isOpenModalCartList" 
            :handleCloseModal="hanldeCloseModalCartList"
        >
        <section>
            <cart-list 
                :cartList="cartList"
                @handle-delete-cart="handleDelete" 
                @handle-up-or-down-amount="handleUpOrDownAmount" 
            />
        </section>
        </app-modal>
    </teleport>
    <div class="logo-psg">
        <a href="#">
            <img src="https://www.psg.fr/img/logos/psg-logo.png" alt="logo">
        </a>
    </div>
</div>
</template>

<script>
import store from '@/store';

import CartList from '@/products/CartList.vue';
export default {
    name:"page-header",
    components:{
        CartList,
    },
    data() {
      return {
         cartList: [], //push dữ liệu vào data cartList
       },
      {
         isOpenModalCartList: false,
      }
   },
   computed:{
        sumcartList(){
            return this.cartList.reduce((sum , cart) => (sum += cart.soluong), 0 );
        },
        userLogin(){
           const userLogin = (() =>store.state.auth.userLogin)
           return {userLogin}
        },
   },
   created(){
    console.log(this.getCartList)
   },
   methods:{
    hanldeOpenModalCartList(){
        this.isOpenModalCartList = true;
    },
    hanldeCloseModalCartList(){
        this.isOpenModalCartList = false;
    },
    handleDelete(cart){
        this.$emit("handle-delete-cart" , cart);
    },
    handleUpOrDownAmount(cart){
        this.$emit("handle-up-or-down-amount" ,cart);
    },
   },
   props:{
    cartList:{
        type: Array
    }
   },
}
</script>

<style>
.header-1{
    height: 30px;
    width: 100%;
    background-color: #1A2434;
    border-bottom: 3px solid #FF1541 ;
}
.nav-link{
    color: black;
    font-size: 35px;
    margin-left: 20px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
}
.logo-psg{
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translate(-50%);
    background: transparent;
    z-index: 3;
}
.logo-psg img {
    width: 80px;
    box-shadow: rgba(0,0,0,0.2);
    background-size: 100% 100%;
}
.logo-header img{
    width: 200px;
    height: 125px;
    object-fit: cover;
}
.nav-item{
    padding: 30px 0;
}
.icon-main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 150px;
    
}
#icon-user{
    margin: 0 30px;
    position: relative;
}
#icon-user span {
    color: black;
}
#icon-user i{
    font-size: 30px;
    padding: 5px 10px;
    color: black;
}
.icon-shopbag i{
    padding: 0 5px;
    line-height: 25px;  
    color: white;
    width: 40px;
}
.icon-shopbag{
    background: red;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:5px ;
}
.log-out{
    border: 1px solid black;
    position: absolute;
    width: 100%;
    top: 45px;
    border-radius: 10px;
    left: 10px;
    padding: 10px;
    font-weight: 500;
    display: none;
    /* transition: .3s linear; */
}
#icon-user:hover .log-out {
    display: block;
}
@media screen and (max-width: 575.999px) {
    .logo-psg img {
        width: 60px;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,50%);
    }
    .icon{
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        margin-bottom: 30px;
        font-size: 20px;
    }
    .logo-header img{
        width: 100px;
    }
    .nav-link{
        font-size: 20px;
    }
    .nav-item{
        padding: 0;
    }
    .navbar-search{
      display: flex;
      flex-flow: nowrap;
      width: 350px;
      position: absolute;
      left: 250px;
   }
}
    /* From uiverse.io by @satyamchaudharydev */
    /* removing default style of button */

    .form button {
    border: none;
    background: none;
    color: #8b8ba7;
    }
    /* styling of whole input container */
    .form {
    --timing: 0.3s;
    --width-of-input: 200px;
    --height-of-input: 40px;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: rgb(18, 18, 78);
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: var(--input-bg,#fff);
    border: 1px solid black; 
    }
    /* styling of Input */
    .input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    }
    /* styling of animated border */
    .form:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
    }
    /* Hover on Input */
    .form:focus-within {
    border-radius: var(--after-border-radius);
    }

    input:focus {
    outline: none;
    }
    /* here is code of animated border */
    .form:focus-within:before {
    transform: scale(1);
    }
    /* styling of close button */
    /* == you can click the close button to remove text == */
    .reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
    }
    /* close button shown when typing */
    input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
    }
    /* sizing svg icons */
    .form svg {
    width: 17px;
    margin-top: 3px;
    }

</style>