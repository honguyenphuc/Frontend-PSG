<template>
  <div class="home-page">
            <div class="home-page-first component-1">
                <div class="featured-article featured-article--firstTeam js-animate-in is-showing">
                    <HomeComponent1
                        :component1="{}"
                     />
                </div>
            </div>

            <div class="home-page-secondary container-fluid component-2">
                <div class="row">
                    <HomeComponent2></HomeComponent2>
                </div>
            </div>

    <!-- component-3 -->
            <div class="container-fluid component-3">
                <div class="row">
                    <HomeComponent3 />
                </div>
            </div>

    <!-- component-4 -->
            <div class="container-fluid component-4">
                 <div class="row">
                    <HomeComponent4 />
                 </div>
            </div>

    <!-- component-5 -->
            <div class="cp5-main">
                    <div class="cp-5">
                        <div class="container-fluid">
                            <div class="row">
                                <nav class="navbar navbar-expand-sm">
                                    <a class="navbar-brand" href="#">PSG TV</a>
                                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="#">Matchs complets</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Résumés 10 mn</a>
                                            </li>
                                        </ul>
                                        <form class="form-inline my-2 my-lg-0">
                                            <img src="../assets/img/footer/gorillas-23.png" alt="">
                                        </form>
                                    </div>
                                </nav>
                            </div>


                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="video-pc">
                                        <div class="cart-img">
                                            <img src="../assets/img/Homes/cart-8.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <HomeComponent5 />
                            </div>
                        </div>
                    </div>  
            </div> 
  </div>
</template>

<script>
import HomeComponent1 from "./HomeComponent-1.vue";
import HomeComponent2 from "./HomeComponent-2.vue";
import HomeComponent3 from "./HomeComponent-3.vue";
import HomeComponent4 from "./HomeComponent-4.vue";
import HomeComponent5 from "./HomeComponent-5.vue";

export default {
    name: 'home-page',
    components: {
        HomeComponent1,
        HomeComponent2,
        HomeComponent3,
        HomeComponent4,
        HomeComponent5,
    },
}
</script>

<style>
.home-page-first{
    background: linear-gradient(to left, #151E2D, transparent);
    overflow: hidden;
}
.featured-article {
    position: relative;
}
.imageBackgroundCover img:hover{
    transform: scale(1.2);
}
.home-title:hover .featured-article__arrow {
    left: 0;
    opacity: 1;
}
.imageBackgroundCover img {
    width: 65%;
    height: 600px;
    object-fit: cover;
    transition: .5s ease;
}
.home-title{
    /* background-color: #151E2D; */
    background: linear-gradient(to left top, #151E2D, transparent);
    position: absolute;
    right: 0;
    top: 0;
    width: 600px;
    height: 100%;
    z-index: 4;
    padding: 100px 150px;
    font-family: 'Montserrat Alternates', sans-serif;
}
.featured-article__title__inner{
    margin-top: 40px;
}
.home-title span:first-of-type{
    color: red;
    font-size: 20px;
}
.featured-article__arrow {
    border-color: red;
    width: 100px;
    height: 22px;
    border-bottom: 3px solid red;
    position: relative;
    display: inline-block;
    top: -14px;
    margin-top: 40px;
    left: -100px;
    opacity: 0;
    transition: .5s ease-in-out;
}
.featured-article__arrow::after{
    content: ' ';
    position: absolute;
    right: 1px;
    top: 14px;
    border-top: 2px solid red;
    border-left: 2px solid red;
    display: block;
    transform: rotate(135deg);
    width: 14px;
    height: 14px;
    transition: .3s ease-out;
}
.featured-article__title{
    color:white;
    font-weight: bold;
}
/* -------home-main-2 */
.cp2-main{
    margin-top: 40px;
    cursor: pointer;
}
.card-body-home{
    padding: 20px 0;
}
.card__leader{
    margin-bottom: 15px;
}
.card__leader{
    margin-bottom: 15px;
}
.card__leader span:first-of-type{
    color: red;
    margin-right: 10px;
}
.card__leader span:last-of-type{
    border-left:1px solid black ;
    padding: 0 10px;
    line-height: 4px;
}
.card-main{
    overflow: hidden;
}
.card-img{
    border-radius: 0;
    object-fit: cover;
    height: 350px;
    transition: .5s ease;
}
.card-main:hover .card-img{
    transform: scale(1.1);
}
/* --------------cp3 */
.component-3{
    cursor: pointer;
}
.card-img-top{
    transition: .5s ease;
}
.card-main:hover .card-img-top{
    transform: scale(1.1);
}
.card-title-component-3{
    font-size: 17px;
}
/* ----------cp4 */
.img-pc-4 img {
    width: 350px;
    margin-left: -30px;
    margin-top: -40px;
    transition: .5s ease;
}
.cp-4{
    background-color: #F4F4F4;
    overflow: hidden;
    display: flex;
}
.cp-4:hover .img-pc-4-main{
    transform: scale(1.1);
}
.title-cp-4{
    font-weight: bold;
    line-height: 70px;
    text-align: center;
}
.title-cp-4 span{
    font-weight: 400;
    color: red;
    border-bottom: 2px solid red;
    line-height: 100px;
}
/* ----cp5 */
.cp5-main{
    padding: 40px 0;
}
.cp-5{
    background-color: #0C1324;
}
.cp-5 .nav-link{
    color: white;
    font-size: 15px;
    text-align: center;
}
nav a {
    color: white;
}
.navbar-brand{
    font-weight: bold;
}
.form-inline img {
    width: 100px;
    margin-left: 40px;
}
.cart-img{
    margin-top: -20px;
    margin-bottom: 50px;
}
.cart-img img {
    width: 630px;
    margin-left: 40px;
}
.card-body-cp5{
    text-align: left;
    margin-top: 100px;
    margin-left: -50px;
}
.card-title-component-5{
    color: white;
    font-size: 40px;
    margin-top: 30px;
}
.card__leader__cp5 span:first-of-type{
    color: red;
    margin-right: 10px;
}
.card__leader__cp5 span:last-of-type{
    color: white;
    border-left: 1px solid white ;
    padding: 0 10px;
}
@media screen and (max-width: 575.999px) {
    .card-body-cp5{
    text-align: left;
    margin-left: 40px;
    margin-top: 0;
    }
    .cart-img img{
        width: 450px;
    }
}


</style>