<template>
<div class="PlayerDetail-page">
    <div class="playerDetail">
        <div class="playerDetail-main">
            <div class="bg-name">
                <span class="last-name-player">Gianluigi</span>
                <span class="name-player">DONNARUMA</span>
            </div>
            <div class="bg-player">
                <img src="../assets/img/player/bg-Gk/hero_22-23-donnarumma.png" alt="">
            </div>
        </div>
    </div>

    <div class="playerDetail-main-2">
        <div class="contaiter-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <div class="playerDetail-number">
                        <span class="number-player-gk">99</span>
                        <div class="bg-full-body-player">
                            <img src="../assets/img/player/bg-Gk/profile-22-23-donnarumma.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 ">
                    <div class="info-playerDetail">
                        <span class="">Gianluigi Donnaruma</span>
                    </div>
                    <div class="row info-main">
                        <div class="col-6">
                            <div class="profile-player">
                                <span>Birth</span>
                                <span>Nationality</span>
                                <span>Profile</span>
                                <span>Dexterity</span>
                                <span>At the club since</span>
                                <span>Position</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="profile-player-main">
                                <span>February 25, 1999, Castellammare di Stabia</span>
                                <span>Italian <img src="../assets/img/player/Nationality/Italya.png" alt=""></span>
                                <span>196 cm / 90 kg</span>
                                <span>right-handed</span>
                                <span>July 14, 2021</span>
                                <span>Gookeper</span>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components:{
        
    },
}
</script>

<style>
.PlayerDetail-page{
    box-sizing:border-box ;
}
.playerDetail-main{
    position: relative;
    z-index: -1;
    background: #151E2D;
}
.bg-name{
    position: absolute;
    z-index: 0;
    top: 20%;
    left: 10px;
    font-family: 'Bebas Neue', sans-serif;
}
 .name-player{
    width: 100%;
    font-size: 300px;
    overflow: hidden;
    color: red;
    box-shadow: rgba(224, 212, 212, 0.821);
}
.last-name-player{
    display: block;
    width: 100%;
    font-size: 80px;
    overflow: hidden;
    color: white;
    opacity: .5;
    box-shadow: rgba(224, 212, 212, 0.821);   
}
.bg-player{
   position: relative;
   left: 0;
}
.profile-player span{
    display: block;
    padding: 10px 0;
    font-size: 30px;
    font-family: 'Bebas Neue', sans-serif;
    margin-left: 50px;
}
.bg-full-body-player{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    left: 30%;
}
.bg-full-body-player img {
    width: 500px;
}
.profile-player-main img {
    width: 20px;
}
.profile-player-main span{
    display: block;
    padding: 14.5px 0;
    font-size: 24px;
    margin-left: -70px;
    font-family: 'Bebas Neue', sans-serif;
}
.info-playerDetail span {
    color: red;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
}
.info-main{
    width:700px;
    height: 550px;
    background: #f4f4f4;
    margin-bottom: 100px;
}
.playerDetail-number {
    position: relative;
 
}
.playerDetail-number span {
    font-size: 400px;
    margin-left: 300px;
    font-family: 'Bebas Neue', sans-serif;
}

</style>