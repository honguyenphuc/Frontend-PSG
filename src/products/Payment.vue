<template>
    <div class="container-fluid">
    <form>
      <div class="form-row">
                <div class="form-group col-sm-12 pay-input" >
                    <label for="inputHo">Họ Tên*</label>
                    <input type="text" class="form-control" id="inputEmail4" required v-model="customerName">
                </div>
               
                <div class="form-group col-sm-6 pay-input">
                    <label for="inputSDT">Số Điện Thoại*</label>
                    <input type="text" class="form-control" id="inputPassword4" required v-model="customerPhone">
                </div>
                <div class="form-group col-sm-6 pay-input">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" required v-model="customerEmail">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Địa Chỉ*</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required v-model="customerAddress">
            </div>
            <div class="form-row">
                <div class="form-group col-sm-12">
                <label for="inputPayMethod">Phương Thức Thanh Toán</label>
                <br>
                <select name="pay-method" id="payment">
                    <option value="1" selected>Thanh Toán Khi Nhận Hàng</option>
                    <option value="2">Thanh Toán Trực Tuyến</option>
                </select>
                </div>
            </div>
    </form>
    <button class="btn btn-success sb-mit-method-paying" @click="endPayment" >Xác Nhận Thanh Toán</button>
    <teleport to='#app'>
            <app-modal 
                :isOpen="isOpenStatus"
                :handleCloseModal="handleCloseStatusBuy" 
            >
            </app-modal>
    </teleport>
    </div>
</template>
<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex';
// import router from '@/router';
export default {
    name: 'payment-page',
    computed:{
        ...mapState({
            cartList: (state) => state.cartList,
        }),
        ...mapGetters(['sumMonney']),
    }, 
    methods:{
        async confirmPayment(){
            try {
            const orderData = {
                hoten: this.customerName,
                sdt : this.customerPhone,
                email : this.customerEmail,
                diachi : this.customerAddress,
                item: this.cartList.map(item => ({
                    product : item._id,
                    soluong: item.amount
                })),
                totalPrice: this.sumMonney
            }
            console.log(orderData)
            const res = await axios.post("http://localhost:3001/api/delivery",orderData)
            console.log(res)
            if(res.status === 200){
                alert("Cảm ơn bạn đã đặt")
                localStorage.removeItem("cartList")
            }else{
                alert("Cảm ơn bạn đã đặt")
                // router.push("/Home") 
            }
                
            } catch (error) {
                console.log(error)  
            }
        },
        async endPayment(){
            try {
                const orderData = {
                totalPrice: this.sumMonney
            }
            const res = await axios.post("http://localhost:3001/api/create-payment",orderData)
            console.log(res.data.approval_url)
            window.location.href = res.data.approval_url;
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style>

#payment{
    width: 100%;
    padding: 7px;
    margin-bottom: 0 ;
}
.form-group{
    text-align: left;
    font-weight: 500;
}
.sb-mit-method-paying{
    display: flex;
}

</style>