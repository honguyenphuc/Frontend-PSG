<template>
     <div class="col-sm-6">
        <div class="card-body-cp5">
            <div class="card__leader__cp5">
                <span>{{ titleMain }}</span>
                <span>{{ title }}</span>
            </div> 
            <div>
                <h4 class="card-title-component-5">{{ title }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import img1 from "../assets/img/Homes/home-1.jpg"
export default {
    props: {
        component: {
            type:Object,
        }
    },
    data() {
        return {
            img: img1,
            titleMain: 'Équipe Première',
            times: '28 may 2023',
            title: '2023, un titre historique match the fisrt ,secondary'
        }
    }
}
</script>

<style>

</style>