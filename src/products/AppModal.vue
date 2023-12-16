<template>
    <div v-if="isOpen" class="modal" @click="handleClose">
        <div class="modal__container text-center" @click.stop>
            <div class="modal__header"> 
                <h1 class="modal__title">Cart</h1>
                <div class="modal__close" @click="handleClose">
                    <i  class="fa fa-times"></i>
                </div>
            </div>
            <div class="modal__body">
                <slot></slot>
                <!-- <h1>Nội Dung</h1> -->
            </div>
            <div class="modal__footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type : Boolean,
        },
        handleCloseModal: {
            type: Function,
        },
    },
    methods: {
        handleClose() {
            this.handleCloseModal();
        },
    },
}
</script>

<style>
.modal{
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
.modal__container{
    width: 88% ;
    margin: auto;
    margin-top:110px ;
    background: #fff;
    border: 1px solid #888;
    padding: 10px 20px;
}
.modal__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal__close{
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius:50% ;
    text-align: center;
    font-size: 30px;
}
.modal__close:hover{
     background-color: rgba(0, 0, 0, 0.2);
     cursor: pointer;
}
.modal__footer {
    display: flex;
    justify-content: right;
    align-items: right;
    margin-right: 40px;
    margin-top: 20px;
    margin-bottom: 17px;
}
@media screen and (max-width: 575.999px) {
    .modal__container{
        width: 90%;
    }
    .modal{
        position: absolute;
        top: 0;
        left: 0;
    }
}

</style>