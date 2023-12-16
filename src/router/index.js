import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue"
import HomeComponent2Detail from '../homedetail/HomeComponent-2-Detail.vue'
import HomeComponent3Detail from '../homedetail/HomeComponent-3-Detail.vue'
import HomeComponent4Detail from '../homedetail/HomeComponent-4-Detail.vue'

import Player from '../player/Player.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PlayerDetail from '../player/PlayerDetail.vue'
import ProductMen from '../products/ProductMen.vue'
import ProductWomen from '../products/ProductWomen.vue'

// import Admin from '.././admin/manager/Admin.vue'
import AddProduct from '.././admin/manager/AddProduct.vue'
import AddContentHome from '.././admin/manager/AddContentHome.vue'
import Overviews from '.././admin/manager/detail/AddProductOverviews.vue'
import OverviewsContent from '.././admin/manager/detail/AddContentHomeOverviews.vue'
import EditProduct from '../admin/manager/edit/EditProduct.vue'
import EditContent from '../admin/manager/edit/EditContent.vue'
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

import bacsi from '../admin/bacsi/bacsi.vue'
import lichlamviec from '../admin/bacsi/LichLamViec.vue'

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Player",
    name: "Player",
    component: Player,
  },
  {
    path: "/Player/PlayerDetail-GK",
    name: "PlayerDetail",
    component: PlayerDetail,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Product/Men",
    name: "ProductMen",
    component: ProductMen,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/Product/Women",
    name: "ProductWomen",
    component: ProductWomen,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Home/HomeComponent2Detail",
    name: "HomeComponent2Detail",
    component: HomeComponent2Detail,
  },
  {
    path: "/Home/HomeComponent3Detail",
    name: "HomeComponent3Detail",
    component: HomeComponent3Detail,
  },
  {
    path: "/Home/HomeComponent4Detail",
    name: "HomeComponent4Detail",
    component: HomeComponent4Detail,
  },
  {
    path: "/bacsi",
    name: "bacsi",
    component: bacsi,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/bacsi/lichlamviec",
    name: "lichlamviec",
    component: lichlamviec,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/admin/manager/AddProduct",
    name: "AddProduct",
    component: AddProduct,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/admin/manager/AddContentHome",
    name: "AddContentHome",
    component: AddContentHome,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/admin/manager/AddProduct/Overviews",
    name: "Overviews",
    component: Overviews,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/admin/manager/AddContentHome/Overviews",
    name: "AddContentHomeOverviews",
    component: OverviewsContent,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/admin/manager/AddProduct/Overviews/EditProduct",
    name: "EditProduct",
    component: EditProduct,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/admin/manager/AddContentHome/Overviews/EditContent",
    name: "EditContent",
    component: EditContent,
    // meta: { requiresAuth: true, requiresAdmin: true },
  },
];
// const routes = [...HomeComponent2Detail];
const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from ,next)=>{
    const token = Cookies.get("token")
    if(to.matched.some((record)=> record.meta.requiresAuth)){
        if(!token){
            next("/login")
        }else{
            const decodedToken = jwt_decode(token)
            console.log(decodedToken)
            if(to.matched.some((record)=> record.meta.requiresAdmin && decodedToken.role === 'admin')){
                next()
            }else{
                next("/Home");
            }
        }
    }else{
        next();
    }
})
export default router;