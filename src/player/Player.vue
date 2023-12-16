<template>
    <div class="player-page">
       

        <div class="player-bottom-header">
            <h1>Team</h1>
            <div class="convert-team-coach">
                <button class="button">
                    <span class="button_lg">
                        <span class="button_sl"></span>
                        <span class="button_text">Club</span>
                    </span>
                </button>
            </div>
        </div>

        <div class="player-body">
            <div class="container-fluid">
                <h1>GK</h1>
                <div class="row">
                  <div v-for="(playerItem,index) in playerItemGK" :key="index" class="col-sm-3">
                    <router-link to="/Player/PlayerDetail-GK"> 
                        <PlayerItem :playerItem="playerItem"/>
                    </router-link> 
                    </div>
               
                </div>

                <h1>CB</h1>
                <div class="row">
                    <div v-for="(playerItem, index) in playerItemCB" :key="index" class="col-sm-3">
                        <PlayerItem :playerItem="playerItem"/>
                    </div>
                </div>

                <h1>MF</h1>
                <div class="row">
                    <div v-for="(playerItem, index) in playerItemMF" :key="index" class="col-sm-3">
                        <PlayerItem :playerItem="playerItem"/>
                    </div>
                </div>

                <h1>ST</h1>
                <div class="row">
                    <div v-for="(playerItem, index) in playerItemST" :key="index" class="col-sm-3 player-main">
                        <PlayerItem :playerItem="playerItem"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PlayerItem from './PlayerItem.vue';
//hình của Hậu vệ
import img1 from '../assets/img/player/Gk/card-donnarumma.png'
import img2 from '../assets/img/player/Gk/card-season-22-23-letellier.png'
import img3 from '../assets/img/player/Gk/card-season-22-23-rico.png'
// hình của Trung vệ
import img4 from '../assets/img/player/Cb/card-season-22-23-hakimi.png'
import img5 from '../assets/img/player/Cb/card-season-22-23-kimpembe.png'
import img6 from '../assets/img/player/Cb/card-season-22-23-ramos.png'
import img7 from '../assets/img/player/Cb/card-season-22-23-marquinhos.png'
//Hình ảnh tiền vệ
import img11 from '../assets/img/player/MF/card-season-22-23-verratti.png'
import img12 from '../assets/img/player/MF/card-season-22-23-danilo.png'
import img13 from '../assets/img/player/MF/card-season-22-23-vitinha.png'
import img14 from '../assets/img/player/MF/card-22-23_renato.png'
//Hình Ảnh Tiền đạo
import img15 from '../assets/img/player/St/card-season-22-23-mbappe.png'
import img16 from '../assets/img/player/St/card-22-23_neymar.png'
import img17 from '../assets/img/player/St/card-season-22-23-messi.png'
import img18 from '../assets/img/player/St/card-22-23_ekitike.png'

export default {
    name: 'player-page',
    components: {
        PlayerItem,
    },
    data() {
        return{
    playerItemGK: [
            {
                id: 1,
                img: img1,
                number:'1',
                position: 'GoalKeeper',
                namePlayer: 'Donnarumma',
                positionPlayer: 'GK'
                },
            {
                id: 2,
                img: img2,
                number:'3',
                position: 'GoalKeeper',
                namePlayer: 'Alexandre Letellier',
                positionPlayer: 'GK'
                },
            {
                id: 3,
                img: img3,
                number:'2',
                position: 'GoalKeeper',
                namePlayer: 'Sergio Rico',
                positionPlayer: 'GK'
                },
            ],
    playerItemCB: [
             {
                id: 1,
                img: img4,
                number:'6',
                position: 'Defenders',
                namePlayer: 'Achrafi Hakimi',
                positionPlayer: 'RB'

                 },
            {
                id: 2,
                img: img5,
                number:'12',
                position: 'Defenders',
                namePlayer: 'Presnel Kimpembe',
                positionPlayer: 'CB'
                 },
            {
                id: 3,
                img: img6,
                number:'4',
                position: 'Defenders',
                namePlayer: 'Sergio Ramos',
                positionPlayer: 'CB'
            },
            {
                id: 4,
                img: img7,
                number:'5',
                position: 'Defenders',
                namePlayer: 'Marquinhos',
                positionPlayer: 'CB'
            },
            ],
    playerItemMF: [
            {
                id: 1,
                img: img11,
                number:'7',
                position: 'Midfielder',
                namePlayer: 'Marco Varrati',
                positionPlayer: 'MF'

            },
            {
                id: 2,
                img: img12,
                number:'8',
                position: 'Midfielder',
                namePlayer: 'Danilo Pereira',
                positionPlayer: 'MF'

            },
            {
                id: 3,
                img: img13,
                number:'13',
                position: 'Midfielder',
                namePlayer: 'vitinha',
                positionPlayer: 'MF'

            },
            {
                id: 4,
                img: img14,
                number:'41',
                position: 'Midfielder',
                namePlayer: 'Renato Sanches',
                positionPlayer: 'MF'

            },
            ],
    playerItemST: [
            {
                id: 1,
                img: img15,
                number:'10',
                position: 'Striker',
                namePlayer: 'Kylian Mbappe',
                positionPlayer: 'ST'

            },
            {
                id: 2,
                img: img16,
                number:'11',
                position: 'Striker',
                namePlayer: 'Neymar Jr',
                positionPlayer: 'ST'

            },
            {
                id: 3,
                img: img17,
                number:'30',
                position: 'Striker',
                namePlayer: 'Lionel Messi',
                positionPlayer: 'ST'

            },
            {
                id: 4,
                img: img18,
                number:'77',
                position: 'Striker',
                namePlayer: 'Hugo Ekitike',
                positionPlayer: 'ST'
            },        
            ]
    }
    }
}
</script>

<style>
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}
.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}
.button::before {
  top: 0;
  border-bottom-width: 0;
}
.button::after {
  bottom: 0;
  border-top-width: 0;
}
.button:active,
.button:focus {
  outline: none;
}
.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}
.button:active::before {
  top: 3px;
}
.button:active::after {
  bottom: 3px;
}
.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}
.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}
.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}
.button_text {
  position: relative;
}
.button:hover {
  color: #1A2434;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}
.button:hover .button_lg::after {
background-color: #fff;
}
.player-body{
    padding: 0 70px;
    background: #1A2434;
    max-height: 4300px;
}
.img-header-player img{
    width: 100%;
    height: 500px;
    object-fit: cover;
}
.player-bottom-header h1 {
    text-align: center;
    color: #ff4655;
    border-bottom:2px solid #ff4655;
    font-family: 'Bebas Neue', sans-serif;
    padding-top: 40px;
}
.convert-team-coach{
    text-align: center;
    padding-top: 20px;
    background: #F4F4F4;
}
.convert-team-coach .button{
    margin-left: 10px;
    width: 100px;
}
.card{
   width:100%;
   height: 100%;
   border-radius: 0;
}
.card-body{
    position: relative;
}
.card-img-top-playerItem{
    height: 400px;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}
.player-main {
    margin-bottom: 50px;
}
.card-title{
    font-family: 'Bebas Neue', sans-serif;
    color: red;
    font-size: 20px;
}
.card-text{
    font-size: 30px;
    border-bottom:2px solid black;
    line-height: 70px;
    font-weight: 600;
    color: black;
}
a{
    color: black;
}
a:hover{
    text-decoration: none;
}
.player-overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #183d79fc;
    opacity: 0;
    transition: all 999ms ease;
   /* chưa hover */
    /* transform: translateX(-50%); */
}
.number-player{
    font-size: 100px;
    font-family: 'Bebas Neue', sans-serif;
    margin-left: 10px;
    color: white;
    top: -100px;
    left: 5px;
    position: absolute;
}
.card:hover .player-overlay{
    /* transform: translateX(0px); */
    opacity: 1;
    filter: blur(10px);
    transition: .5s ease;
}
.card:hover .card-text{
    color: white;
}
.positionPlayer{
    font-size: 20px;
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    transition: all .5s ease-in-out;
}

.card:hover .player-position{
    color: white;
    background: red ;
    text-align: center;
}
</style>