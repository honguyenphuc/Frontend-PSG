<template>
    <footer class="footer">
        <div class="footer-sponsors">
            <ul class="footer-ul">
                <li>
                    <a class="js-trackLink" href="">
                        <img class="no-src u-blur-up lazyloaded" src="../assets/img/footer/nike-23-alt.png" alt="">
                    </a>
                </li>
                <li>
                    <a class="js-trackLink" href="">
                        <img class="no-src u-blur-up lazyloaded" src="../assets/img/footer/qatarairways-23-alt.png" alt="">
                    </a>
                </li>
                <li>
                    <a class="js-trackLink" href="">
                        <img class="no-src u-blur-up lazyloaded" src="../assets/img/footer/goat-23-alt3.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer-common">
        <div class="footer-sponsors-secondary">
            <div class="footer-sponsors-secondary-main container">
                <ul class="footer-secondary-ul">
                    <li v-for="(cart,index) in ImgFooter" :key="index">
                        <img :src=cart.img alt="">
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-sponsors-third container footer-links">
            <div class="footer-links__inner row">
                <div class="col-sm-3 grid footer-links__grid">
                    <h3>PARIS SAINT-GERMAIN</h3>
                    <ul>
                        <li><h4>Equipe première</h4></li>
                        <li><h4>Féminines</h4></li>
                        <li><h4>Handball</h4></li>
                        <li><h4>PSG TV</h4></li>
                        <li><h4>Club</h4></li>
                        <li><h4>Fondation</h4></li>
                        <li><h4>Judo</h4></li>
                    </ul>
                </div>

                <div class="col-sm-3 grid footer-links__grid">
                        <h3>SERVICES</h3>
                        <ul>
                            <li><h4>Mon compte</h4></li>
                            <li><h4>Billetterie</h4></li>
                            <li><h4>Boutique</h4></li>
                            <li><h4>MyParis</h4></li>
                            <li><h4>Stadium Tour</h4></li>
                        </ul>
                </div>

                <div class="col-sm-3 grid footer-links__grid">
                        <h3>LANGUES</h3>
                        <ul>
                            <li><h4>Français</h4></li>
                            <li><h4>English</h4></li>
                            <li><h4>Português</h4></li>
                            <li><h4>Español</h4></li>
                            <li><h4>العربية</h4></li>
                            <li><h4>Bahasa Indonesia</h4></li>
                            <li><h4>中文</h4></li>
                            <li><h4>日本語</h4></li>
                        </ul>
                </div>

                <div class="col-sm-3 grid footer-links__grid">
                        <h3>REJOIGNEZ-NOUS</h3>
                        <ul>
                            <li><i class="fab fa-facebook-square"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li><i class="fab fa-youtube"></i></li>
                            <li><i class="fab fa-snapchat-ghost"></i></li>
                        </ul>
                </div>
            </div>
        </div>
        </div>
    </footer>
</template>

<script>
import img1 from '../assets/img/footer/visit-qatar-22-23-new.png'
import img2 from '../assets/img/footer/all-23-footer-new.png'
import img3 from '../assets/img/footer/ooredoo-22-23.png'
import img4 from '../assets/img/footer/visit-rwanda-23.png'
import img5 from '../assets/img/footer/qnb-23.png'
import img6 from '../assets/img/footer/gorillas-23.png'
import img7 from '../assets/img/footer/autohero-23.png'
import img8 from '../assets/img/footer/orange-23.png'
import img9 from '../assets/img/footer/beinsports-23.png'
import img10 from '../assets/img/footer/ea-sports-23.png'
import img11 from '../assets/img/footer/logo-aspetar-23.png'
import img12 from '../assets/img/footer/footer-parions-sport-23b.png'
export default {
    data() {
        return {
            ImgFooter: [
                {
                    id:1,
                    img: img1
                },
                {
                    id: 2,
                    img: img2
                },
                {
                    id: 3,
                    img: img3
                },
                {
                    id: 4,
                    img: img4
                },
                {
                    id: 5,
                    img: img5
                },
                {
                    id: 6,
                    img: img6
                },
                {
                    id: 7,
                    img: img7
                },
                {
                    id: 8,
                    img: img8
                },
                {
                    id: 9,
                    img: img9
                },
                {
                    id: 10,
                    img: img10
                },
                {
                    id: 11,
                    img: img11
                },
                {
                    id: 12,
                    img: img12
                },
            ]
        }
    }
}
</script>

<style>
.footer-sponsors{
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-ul li{
    list-style: none;
    display: inline;
}
.footer-ul li a {
    text-decoration: none;
}
.footer-ul li a img{
    padding: 0 20px;
    height: 50px;
}
/* ------- */
.footer-common{
    background-color: #151E2D;
}
.footer-secondary-ul li{
    list-style: none;
    display: inline;
}
.footer-secondary-ul li img {
    margin-top: 20px;
    padding: 0 30px;
    margin-left: 0;
    width: 160px;
    cursor: pointer;
}
/* ---------------- */
.footer-sponsors-third{
    border-top: 2px solid #FF1541 ;
}
.footer-links__grid h3{
    margin: 40px 0;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: bold;
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    margin-left: 50px;
}
.footer-links__grid li{
    list-style: none;
    margin-left:10px;
   
}
.footer-links__grid li h4{
    color: #a6adbb;   
    font-size: 13px;
}
.footer-links__grid li i {
    color: #a6adbb;
    font-size: 28px;
    padding: 5px 0;
    text-align: left;
}
@media screen and (max-width: 575.999px) {
    .footer-ul li a img{
        width: 100px;
        object-fit: contain;
    }
    .footer-secondary-ul li img{
        width: 100px;
    }
}
</style>