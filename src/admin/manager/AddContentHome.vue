<template>
  <div class="admin-page">
    <div class="bg-avatar"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <TheSideBarAdmin />
        </div>
        <div class="col-sm-9">
            <div class="header-sm-9">
            <h2>ADDCONTENT</h2>
            <router-link to="/admin/manager/AddContentHome/Overviews"
              ><span>Overview</span>
            </router-link>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <form class="main-add-product">
                <div class="form-group">
                    <label for="inputAddress">Choose Img</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile">
                        <label class="custom-file-label" for="customFile"></label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="date">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Type</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="type..."
                      />
                    </div>
                  </div>
          
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputCity">Title H1</label>
                      <input type="text" class="form-control" id="input" />
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputCity">Title</label>
                       <textarea name="textarea" id="" cols="139" rows="10"></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSideBarAdmin from '../../components/TheSideBar-Admin.vue'

export default {
  components:{
    TheSideBarAdmin
  }
}
</script>

