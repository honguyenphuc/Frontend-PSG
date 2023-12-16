<template>
     <aside class="aside-main">
            <div class="avatar">
              <img src="../assets//img//player//St/card-season-22-23-messi.png" alt="" />
              <div class="dropdown">
                <button
                  class="btn btn-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
              <div class="name-avatar">
                <h4>Hồ Nguyễn Phúc</h4>
                <span>Project Manager</span>
              </div>
            </div>
            <div class="Add-main">
              <router-link to="/admin/manager/AddProduct">
                <h3>
                  AddProduct
                  <i class="fa fa-angle-right"></i>
                </h3>
              </router-link>
            </div>

            <div class="Add-main">
              <router-link to="/admin/manager/AddContentHome">
                <h3>
                  AddContent
                  <i class="fa fa-angle-right"></i>
                </h3>
              </router-link>
            </div>
          </aside>
</template>

<script>
export default {

}
</script>

<style>

</style>