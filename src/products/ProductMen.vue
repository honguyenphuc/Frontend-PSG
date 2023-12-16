<template>
    <div class="product-page">
        <div class="product-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 active">
                        <router-link to="/Product/Men" class="product-type">Men</router-link>
                    </div>
                    <div class="col-sm-3">
                        <router-link to="/Product/Women" class="product-type">Women</router-link>
                    </div>
                    <div class="col-sm-3">
                        <router-link to="#" class="product-type">Baby</router-link>
                    </div>
                    <div class="col-sm-3">
                        <router-link to="#" class="product-type">Traning</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-body">
            <div class="container-fluid">
                <div class="row">
                    <div v-for="(productItem ,index) in product" :key="index" class="col-sm-3 product-main">
                        <product-item 
                            :productItem="productItem" @handle-addcart="handleAddCart"
                        />
                    </div>
                </div>
                <nav aria-label="Page navigation example" id="pagination">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous" @click="previousPage">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item" v-for="pageNumber in totalPage" :key="pageNumber" :class="{ 'active': pageNumber === page }">
                            <a class="page-link" href="#" @click="changePage(pageNumber)">{{ pageNumber }}</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProductItem from './ProductItem.vue'
// import Cookies from 'js-cookie';

export default {
    name : 'product-page',
    // state(){
    //     return {
    //         product:{}
    //     }
    // },
    data(){
        return {
            product: 
            [
                // {
                // id : 1 ,
                // img :"https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-dri-fit-adv-match-shirt-2023-24_ss4_p-13368107+u-6swpap3ahgp3lvfzx2td+v-b9d974f0ee1647239a47695dac55586b.jpg?_hv=2&w=340" ,
                // price : '149.99',
                // size:'M',
                // numberinStore : 10,
                // number : 1,
                // total:'149.99',
                // producttitle : 'PSG Home Match Dri-FIT ADV Jersey 23/24'
                // },
            ],
        }
    },

    components:{
        ProductItem,
    },
    mounted() {
     this.fetchData();
     console.log(this.fetchData)
    },
   
    methods:{
        async fetchData(){
            try {
                const res = await axios.get(`http://localhost:3001/api/danhmuc/Men?page=${this.page}`)
                console.log(res.data)
                this.product = res.data.product
                this.totalPage = res.data.totalPage
                console.log(this.product)
                // console.log(this.totalPage)
            } catch (error) {
                console.log(error)
            }
        },
        previousPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchData();
            }
        }, 
        nextPage() {
            if (this.page < this.totalPage) {
                this.page++;
                this.fetchData();
            }
        },
        changePage(pageNumber){
            if(pageNumber != this.page ){
                this.page = pageNumber
                this.fetchData();
            }
        }
    },
}
</script>

<style>
.product-header{
    background: #1A2434;
}
.product-type{
    color: white;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-weight: 600;
}
.product-type:hover{
    color: white;
}
.active .product-type{
    color: red;
}
.product-main{
    padding: 20px 10px;
}
.card-product{
    position: relative;
    border: 1px solid black;
    height: 470px;
}
.card-product:hover .icon-add-to-cart{
    opacity: 1;
    top: 0;
}
.card-product:hover .icon-bag{
    opacity: 1;
}
.icon-add-to-cart {
    position: absolute;
    top: -150px;
    left: 0;
    display: block;
    font-size: 25px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .6s ease;
    pointer-events: none;
    background: linear-gradient(to top , rgb(18, 18, 78) ,transparent);
}
.icon-bag{
    position: absolute;
    top: 50%;   
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius:50% ;
    color: white;
    font-size: 40px;
    cursor: pointer;
    opacity: 0;
    color: white;
    z-index: 10;
    transform: translate(-50%,-50%);
}   
.card-body-product{
    padding-top: 20px;
    margin: 0 20px;
    width: 90%;
    font-size: 16px;
    font-weight: 600;
    border-top:2px solid black ;
}
.card-text-product{
    font-size: 20px;
}
.card-title-product{
    color: red;
}
.card-product:hover .card-body-product{
    position: absolute;
    z-index: 10;
    border-top:2px solid white ;
}
.card-product:hover .card-text-product{
    color: white;
}
.size{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 150px 50px; 
}
.size button {
    width: 60px;
    cursor: pointer;
}
</style>