<template>
   <div class="component2Detail">
        <div class="cp-2-detail-img">
            <img v-bind:src="homedetail.img" alt="">
            <div class="overlay-img"></div>
            <div class="container">
            <div class="cp-2-title-main">
                <div class="HomeComponentDetail.title-header">
                    <h1>{{ homedetail.titleH1 }}</h1>
                    <div class="info-bar">
                        <div class="info-bar__pub-info">
                            <span class="info-bar__context">{{ homedetail.titleType }}</span>
                            <span class="info-bar__date">{{ homedetail.titleTimes }}</span>
                        </div>
                    </div>
                </div>
                <div class="title-body">
                    <div class="title__summary">
                        <p>{{ homedetail.titleP1 }}</p>
                    </div>      
                    <div class="article__body__inner">
                        <h3>{{ homedetail.titleH3 }}</h3>
                        <p>{{ homedetail.titleP2 }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import img1 from "../assets/img/Homes/Home-Detail-2/cart-9.jpg"
export default ({
    props: {
        homedetail: {
            type: Object,
        }
    },
})
</script>


<style>
.cp-2-detail-img{
    position: relative;
    background: #f5f5f5;
    z-index: 0;
    max-height: 1100px;
}
.cp-2-title-main{
    position: relative;
    background: #ffff;
    top: -200px;
    left: 0;
    padding:50px 100px;
}
.cp-2-detail-img img{
    width: 100%;
    height: 640px;
    object-fit: cover;
}
.overlay-img{
    position: absolute;
    width: 100%;
    height: 640px;
    top:0;
    left: 0;
    background: linear-gradient(to top,rgb(18, 18, 78),transparent);
}
.info-bar__pub-info{
    padding: 40px 0;
    font-family: 'Bebas Neue', sans-serif;
}
.info-bar__context{
    color: red;
    margin-right: 10px;
}
.title__summary p {
    font-weight: 300;
    font-size: 18px;
    margin: 20px 0;
}
.article__body__inner h3{
    color: red;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 35px;
}
.article__body__inner p{
    font-weight: 300;
    font-size: 18px;
}

</style>