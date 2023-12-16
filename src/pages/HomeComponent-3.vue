<template>
    <div v-for="(component,index) in component3" :key="index" class="col-sm-3">
        <div class="card-main">
            <router-link to="/Home/HomeComponent3Detail">
            <img class="card-img-top" :src="component.img" alt="">
            </router-link>
            <div class="card-body-home">
                <div class="card__leader">
                    <span>{{ component.titleMain }}</span>
                    <span>{{ component.times }}</span>
                </div> 
                <div>
                    <h4 class="card-title-component-3">{{ component.title }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import img3 from "../assets/img/Homes/cart-2.png"
import img4 from "../assets/img/Homes/cart-3.jpg"
import img5 from "../assets/img/Homes/cart-4.jpg"
import img6 from "../assets/img/Homes/cart-5.jpg"


export default {
    props: {
        component: {
            type:Object,
        }
    },
    data() {
        return {
            component3: [
            {
                img: img5,
                titleMain: 'Équipe Première',
                times: '28 may 2023',
                title: 'Un Classique pour une place en finale des Playoffs U19 !'
            },
            {
                img: img4,
                titleMain: 'Équipe Première',
                times: '28 may 2023',
                title: 'Stats & Facts : Retour sur le sacre des Parisiens à Strasbourg'
                },
            {
                img: img3,
                titleMain: 'Club',
                times: '28 may 2023',
                title: '2023, un titre historique'
                },
            {
                img: img6,
                titleMain: 'Judo',
                times: '28 may 2023',
                title: 'Les féminines du PSG Judo de nouveau sacrées'
            },
        ]        
    }
}
}
</script>

<style>

</style>