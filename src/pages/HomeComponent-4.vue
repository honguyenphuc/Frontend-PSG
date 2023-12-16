<template>
     <div v-for="(component,index) in component4" :key="index" class="col-sm-6 cp-4">
            <div class="col-sm-6">
                <router-link to="/Home/HomeComponent4Detail">
                <div class="img-pc-4">
                    <img class="img-pc-4-main" :src="component.img" alt="">
                </div>
                </router-link>
            </div>
            <div class="col-sm-6">
                <div class="title-cp-4">
                    <h5>{{ component.title }}</h5>
                    <span>{{ component.titleMain }}</span>
                </div>
            </div>

    </div> 
</template>

<script>
import img7 from "../assets/img/Homes/cart-6.jpg"
import img8 from "../assets/img/Homes/cart-7.png"

export default {
    props: {
        component: {
            type:Object,
        }
    },
    data() {
        return {
            component4: [
            {
                img: img7,
                titleMain: 'Acheter',
                title: 'Le site pour acheter une voiture d’occasion en ligne'
            },
            {
                img: img8,
                titleMain: 'En profiter',
                title:'Jusqu’à -35% sur les maillots !'
            },
        ]        
    }
}
}
</script>

<style>

</style>