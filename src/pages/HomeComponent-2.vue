<template>
   
    <!-- =------ -->
    <div v-for="(component, index) in component2" 
            :key="index" class="col-sm-6 cp2-main">
        <div  class="card-main"> 
                <router-link 
                to="/Home/HomeComponent2Detail"
                >
                    <img class="card-img" :src="component.img" alt="">
                </router-link>
                
                <div class="card-body-home">
                    <div class="card__leader">
                        <span>{{ component.titleMain }}</span>
                        <span>{{ component.times }}</span>
                    </div>
                    <div>
                        <h4 class="card-title">{{ component.title }}</h4>
                    </div>
                </div>
        </div>
       
    </div>
</template>

<script>
import img2 from "../assets/img/Homes/cart-9.jpg"
import img3 from "../assets/img/Homes/rcs-33-mbappe.jpg"

export default {
    props: {
        component: {
            type:Object,
        }
    },
    data() {
        return {
            component2: [
            {
                img: img2,
                titleMain: 'Équipe Première',
                times: '28 may 2023',
                title: 'Nasser Al Khelaïfi : « Un moment historique »'
                },
            {
                img: img3,
                titleMain: 'Équipe Première',
                times: '28 may 2023',
                title: 'Champions de France 2023 !'
            },
        ]        
    }
}
}
</script>

<style>

</style>