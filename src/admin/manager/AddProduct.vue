<template>
  <div class="addproduct-page">
    <div class="bg-avatar"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
            <TheSideBarAdmin />
        </div>
        <div class="col-sm-9">
          <div class="header-sm-9">
            <h2>ADDPRODUCT</h2>
            <router-link to="/admin/manager/AddProduct/Overviews"
              ><span>Overview</span></router-link
            >
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <form @submit.prevent="handleSubmit" class="main-add-product">
                  <div class="form-group">
                    <label for="inputAddress">Choose Img</label>
                    <div class="custom-file">
                      <input type="text" class="addressImg" placeholder="Nhập địa chỉ hình ảnh" v-model="thumbnail" style="width : 100%"  />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="date">Price</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        v-model="price"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputCity">Name Product</label>
                      <input v-model="title" type="text" class="form-control" id="input" />
                    </div>
                  </div>
                  <button class="btn btn-primary">Post</button>
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
import TheSideBarAdmin from '@/components/TheSideBar-Admin.vue';
import axios from 'axios';
const result = {
  components: {
    TheSideBarAdmin
  },
  methods:{
        getdata(){
            axios.get('http://localhost:3001/api')
            .then(response =>{
                this.adminproduct = response.data
                console.log(response)
            })
            .catch(err=>{
                console.log(err);
            })
        },
        async deleteId(id){
            if(confirm("Bạn đã chắc chắn")){
                try{
                    await axios.delete("http://localhost:3001/api/"+id);
                    this.getdata();
                }catch(e){
                    console.log(e);
                }
            }

        },
        handleSubmit() {
            const product = {
              title: this.title,
              price: this.price,
              thumbnail: this.thumbnail
            }
            axios.post('http://localhost:3001/api/', product)
              .then(response => {
                  alert(response.data.message);
              })
              .catch(err => console.error(err));
        }
    },
};

export default result;
</script>

<style scoped>
  .addressImg{
    padding: 7px;
  }
</style>