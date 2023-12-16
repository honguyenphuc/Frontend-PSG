<template>
        <the-header 
          :cartList="cartList" 
          @handle-delete-cart="handleDelete" 
          @handle-up-or-down-amount="handleUpOrDownAmount" 
        />
        <router-view @handle-addcart="handleAddCart" />
        <the-footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  data(){
    return{
      cartList :[],
    };
  },
  methods: {
    handleAddCart(productItem) {
      const index = this.cartList.findIndex(
        (cart) => cart.id === productItem.id
      );
      if (index !== -1) {
        this.cartList[index].number += 1;
      } else {
        const newProductItem = {...productItem, number: 1};
        this.cartList = [...this.cartList, newProductItem];
      }
    },
    handleDelete(cart) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.id !== cart.id);
    },
    handleUpOrDownAmount(params) {
      const { status, cart } = params;
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id === cart.id
      );
      if(index !== -1){
        if (status)
        {
          //tăng
          if (this.cartList[index].number < this.cartList[index].numberinStore) {
            this.cartList[index].number += 1;
          } else {
            alert("Đã Vượt Quá Số Lượng Trong Kho");  
          }
        } else {
          //giảm
          if (this.cartList[index].number > 1) {
            this.cartList[index].number -= 1;
          } else {
            alert("Sản Phẩm Không Được Âm !!!");
          }
        }
      }
    },  
  },
}
</script>

<style>
</style>
