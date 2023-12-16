<template>
   <div class="container-fluid">
    <table class="table">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th>Hành Động</th>
            </tr>
        </thead>
        <tbody class="cart-body">
            <tr v-for="(cart,index) in cartList" :key="index" class="nameItem">
                <td scope="row">{{ index + 1 }}</td>
                <td >{{ cart.ten }}</td>
                <td>{{ cart.gia }} $</td>
                <!-- <td>{{ cart.soluongtrongkho }}</td> -->
                <td>
                        <button class="btn btn-success icon-up-down" @click="handleUpOrDownAmount(true,cart)">
                            <i class="fa fa-angle-up"></i>
                        </button>
                    <span class="mx-2">{{ cart.soluong }}</span>
                        <button class="btn btn-success icon-up-down" @click="handleUpOrDownAmount(false, cart)">
                                <i class="fa fa-angle-down"></i>
                        </button>
                </td>
                <td>{{ cart.soluong * cart.gia }} $</td>
                <td>
                    <button class="btn btn-danger" @click="handleDelete(cart)" >
                        <i class="fa fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </tbody>
        <tfoot>
          <th scope="row">Tổng Tiền</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            {{ sumMonney }} $
          </td>
          <td>
            <button class="btn btn-success" @click="handleOpenModalBuy">Thanh Toán</button>
          </td>
        </tfoot>
        
        <teleport to='#app'>
                <app-modal 
                    :isOpen="isOpenModalBuy"
                    :handleCloseModal="handleCloseModalBuy" 
                >
                <payment />
                </app-modal>
        </teleport>
    </table>
    </div>
</template>

<script>
import Payment from './Payment.vue';

import { mapState,mapGetters } from 'vuex';
export default {
  components: { Payment },
    // props: {
    //     cartList: {
    //         type: Array,
    //     },
    // },
    computed: {
        // sumMonney() {
        //     return this.cartList.reduce((sum , cart) => sum += cart.soluong * cart.gia, 0)
        // },
        ...mapState({
            cartList: (state) => state.cartList,
        }),
        ...mapGetters(['sumMonney']),
    },
    created(){
        const cartList = localStorage.getItem('cartList');
        if(cartList){
            this.$store.commit("setCartList",JSON.parse(cartList))
        }
    },
    methods: {
        handleDelete(cart) {
            this.$store.commit("deleteCart",cart)
        },
        handleUpOrDownAmount(increase  ,cart) {
            if(increase){
                this.$store.commit("increaseAmount", cart);
            }else {
                this.$store.commit("decreaseAmount", cart);
            }
        },
        handleOpenModalBuy() {
            this.isOpenModalBuy = true;
        },
        handleCloseModalBuy() {
            this.isOpenModalBuy = false;
        },
    },
    data() {
        return {
            isOpenModalBuy: false,
        };
    },
}
</script>

<style>
.table{
    width: 100%;
}
.nameItem{
    font-size: 14px;
}
@media screen and (max-width: 575.99px) {
    .table{
        width: 100vh;
    }
    .table thead{
        font-size: 10px;
    }
    .table tbody{
        width: 100vh;
        font-size: 10px;
    }
    .table tfoot{
        font-size: 8px;
    }
    .cart-body td {
        font-size: 10px;
    }
}
</style>