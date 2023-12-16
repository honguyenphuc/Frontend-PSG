<template>
  <div class="product-page">
        <div class="product-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 ">
                        <router-link to="/Product/Men" class="product-type">Men</router-link>
                    </div>
                    <div class="col-sm-3 active">
                        <router-link to="/Product/Women" class="product-type">Women</router-link>
                    </div>
                    <div class="col-sm-3">
                        <h3 class="product-type">Baby</h3>
                    </div>
                    <div class="col-sm-3">
                        <h3 class="product-type">Traning</h3>
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
import ProductItem from './ProductItem.vue'
import axios from 'axios'
export default {
    data(){
        return{
            product:[
                // {
                //     id:1,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-womens_ss4_p-13368082+u-125c4jsso8tqonay10qb+v-de8f16c6c8a04cf189383e4e5d329449.jpg?_hv=2&w=340",
                //     price: '94.99',
                //     numberinStore : 10,
                //     number : 1,
                //     total:'94.99',
                //     producttitle:'PSG Home Stadium Shirt 23/24 - Women'
                // },
                // {
                //     id:2,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-champions-2023-t-shirt-white-adults_ss4_p-14422512+u-pz20jribllmxegupdo2y+v-456324b2f4984967ba38812db0aa16b1.jpg?_hv=2&w=340",
                //     price: '22.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'22.99',
                //     producttitle:'PSG Champions 2023 T-Shirt - White - Adult'
                // },
                // {
                //     id:3,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-champions-2023-scarf-navy-adults_ss4_p-14422514+u-1eix5wv2jpisdjordtp8+v-014a13ce81cb44f4b81c3491916a7901.jpg?_hv=2&w=340",
                //     price: '20.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'20.99',
                //     producttitle:'PSG Champions 2023 Scarf - Blue - Adult'
                // },
                // {
                //     id:4,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shorts-2023-24-womens_ss4_p-13368073+u-hzgdgy21yb1s85mqm9rc+v-65fdeb5648d44f6aa716c05e77475b7f.jpg?_hv=2&w=340",
                //     price: '44.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'44.99',
                //     producttitle:'PSG Home Stadium Shorts 23/24 - Women'
                // },
                // {
                //     id:5,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-strike-pant-dark-blue-womens_ss4_p-13368124+u-x1ddnmkdec011eykwd9a+v-bcfc47927deb4d0abc7cebf83af10a32.jpg?_hv=2&w=340",
                //     price: '69.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'69.99',
                //     producttitle:'PSG Strike Pants - Blue - Womens'
                // },
                // {
                //     id:6,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-pre-match-top-navy-womens_ss4_p-13368100+u-1dtkp3z3elf3g2clhj2a+v-d125df1cbe804b85847b3aeaa79e34ab.jpg?_hv=2&w=340",
                //     price: '64.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'64.99',
                //     producttitle:'PSG Nike Pre-Match Dri-FIT Home Shirt 23/24 - Blue/Red - Womens'
                // },
                // {
                //     id:7,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-strike-crew-drill-top-dark-blue-womens_ss4_p-13368071+u-1ilett00hkpf8twg2tuu+v-45eaaad189ff430d921fe5ad60e341f7.jpg?_hv=2&w=340",
                //     price: '69.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'69.99',
                //     producttitle:'PSG Strike Drill Top - Blue - Womens'
                // },
                // {
                //     id:8,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-strike-short-sleeve-top-dark-blue-womens_ss4_p-13368127+u-1houcgmboab00tp045ct+v-f76f42794f5944ed8d6805a718b0b98a.jpg?_hv=2&w=340",
                //     price: '94.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'94.99',
                //     producttitle:'PSG Home Stadium Shirt 23/24 - Women'
                // },
                // {
                //     id:9,
                //     img: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-strike-shorts-dark-blue-womens_ss4_p-13368130+u-e29mpr61cpgkqs4rhmw2+v-c592f759a65940ccb2d9ae2322ab3ba2.jpg?_hv=2&w=340",
                //     price: '39.99',
                //     numberinStore : 1,
                //     number : 1,
                //     total:'39.99',
                //     producttitle:'PSG Home Stadium Shirt 23/24 - Women'
                // },
        ],
        }
    },
    components:{
        ProductItem
    },
    mounted() {
     this.fetchData();
     console.log(this.fetchData)
    },
    methods:{
        async fetchData(){
            try {
                const res = await axios.get(`http://localhost:3001/api/danhmuc/Men?page=${this.page}`)
                // console.log(res.data)
                this.product = res.data.product
                this.totalPage = res.data.totalPage
                console.log(this.products)
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


</style>