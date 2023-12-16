<template>
    <home-component-detail 
        :homedetail='{ 
            img :"https://www.psg.fr/media/246932/rcs-30-joie-messi.jpg?anchor=center&mode=crop&width=2000&height=1125&quality=80",
            titleH1: "Les Parisiens en tête du classement des buteurs et passeurs",
            titleType: "CLUB",
            titleTimes: "31 may 2023",
            titleP1: "Après avoir glané le 11e titre de Champion de France de lhistoire du Paris Saint-Germain ce samedi soir sur la pelouse de Strasbourg, nos Parisiens sont également en tête du classement des meilleurs buteurs et passeurs de notre championnat.",
            titleH3: "KYLIAN MBAPPÉ – LIONEL MESSI",
            titleP2: "Après avoir glané le 11e titre de Champion de France de l histoire du Paris Saint-Germain ce samedi soir sur la pelouse de Strasbourg, nos Parisiens sont également en tête du classement des meilleurs buteurs et passeurs de notre championnat. Sur une offrande de Kylian Mbappé, Lionel Messi a inscrit son 16e but cette saison avec les sdadsjakdjaskdlala phans extérieur cette saison, c est plus que toute autre équipe des cinq grands championnats européens sur la saison. Si Paris brille au classement après un 11e titre en Ligue 1l AS Saint-Etienne, il nest pas non plus en reste au classement des meilleurs buteurs et passeurs du championnat. Lattaquant français Kylian Mbappé",
        }'
    />
</template>
<script>
import HomeComponentDetail from "./HomeComponent-Detail.vue"
export default ({
    components: {
        HomeComponentDetail,
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