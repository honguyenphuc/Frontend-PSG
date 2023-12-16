<template>
    <div class="card-product text-left">
        <img class="card-img-top-product" :src=productItem.hinhanh>
        <div class="card-body-product">
            <span class="card-title-product">{{ productItem.gia }} $</span>
            <p class="card-text-product">{{ productItem.ten }}</p>
        </div>
            <i class="fa fa-shopping-bag icon-bag" @click="handleAddCart(productItem)"></i> 
        <div class="icon-add-to-cart"></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    state(){
        return {
            product:{}
        }
    },
    props:{
        productItem:{
            type: Array
        },
    },
 
    methods:{
        ...mapMutations(["addCart"]),
            handleAddCart(){
            this.addCart(this.productItem)
        }

            // console.log(productItem)
            // this.$emit("handle-addcart",productItem)
            
            // console.log(productItem)
    },
  
}
</script>

<style>

</style>