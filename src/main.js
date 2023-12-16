import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js/dist/popper";
import "bootstrap"
import "../node_modules/animate.css"
import router from "./router/index.js"
import AppModal from './products/AppModal.vue'
import axios from 'axios';
import { createStore } from 'vuex';
const store = createStore ({
    state() {
        return {
            cartList: [],
        }
    }, 
    getters:{
        getCartList(state){
            return state.cartList.length;
        },
        sumMonney: state => {
            return state.cartList.reduce((total, cart) => total + cart.gia * cart.soluong, 0);
        },
    },
    mutations:{
        setCartList(state,cartList){
            state.cartList = cartList;
        },
        addCart(state,payload){
            console.log(payload)
            const existingProduct  = state.cartList.find(cart => cart._id === payload._id);

            if(existingProduct){
                existingProduct.soluong +=1
            }else{
                payload.soluong = 1;
                state.cartList.push(payload);
                
            }
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        },
        increaseAmount(state, cart) {
            cart.soluong++;
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
          },
        decreaseAmount(state, cart) {
            if (cart.soluong > 1) {
              cart.soluong--;
              localStorage.setItem('cartList', JSON.stringify(state.cartList));
            }
    
        },
        deleteCart(state, payload){
            state.cartList = state.cartList.filter(cart => cart._id != payload._id);
            localStorage.setItem('cartList', JSON.stringify(state.cartList));

        }
    }
})

const app = createApp(App);
app.use(router);
app.component("app-modal",AppModal);
app.mount('#app');
app.use(store)

export default axios;





