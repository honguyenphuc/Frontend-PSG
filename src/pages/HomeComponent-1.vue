<template>
    <div class="imageBackgroundCover">
        <img v-bind:src="img" alt="">
        </div>
        <div class="home-title">
            <span>{{ titleMain }}</span>
            <h1 class="featured-article__title">
                <div class="featured-article__title__inner">
                    {{ title }}
                </div>
            </h1>
            <span class="featured-article__arrow thin-arrow  thin-arrow--firstTeam"></span>
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
            title: 'Le Paris Saint-Germain Champion de France pour la 11e fois !'
        }
}
}
</script>

<style>

</style>