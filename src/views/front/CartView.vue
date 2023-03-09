<template>
    <main>        
        <section>
            
            <div class="container my-md-10 ">
                <div class="row justify-content-center ">
                    <div class="col-xl-10 ">
                        <!-- md以上顯示 -->
                        <div class="my-10 d-none d-md-block">
                            <h2 class="fs-28 px-5 my-10 text-center">我的購物車</h2>
                            <div class="border border-g-40" >                                
                                <ul class="row text-center fw-bold py-5 fs-19 bg-secondary m-0">
                                    <li class="col-5">品名</li>
                                    <li class="col-2">數量</li>                                
                                    <li class="col-2">單價</li>                                
                                    <li class="col-2">小計</li>                                
                                    <li class="col-1"></li>                                
                                </ul>                                
                                <div v-if="carts.length > 0" >                                                                       
                                    <ul class="row text-center py-5 align-items-center border-bottom m-0" v-for="cart in carts" :key="cart.id">
                                        <li class="col-5">{{ cart.product.title }}</li>
                                        <li class="col-2">
                                            <select class="form-select rounded-0" v-model="cart.qty" @change="updateCart(cart)" :disabled="cart.id === loadingItem">                                
                                                <option :value="i" v-for="i in 20" :key="`${i}12`">{{ i }}</option>                                                
                                            </select>
                                        </li>
                                        <li class="col-2 p-0">$ {{ toCurrency(cart.product.price) }}</li>
                                        <li class="col-2">$ {{ toCurrency(cart.total) }}</li>
                                        <li class="col-1 "><button type="button" class="border-0 bg-white" @click="deleteCartItem(cart)" :disabled="cart.id === loadingItem"><i class="fa-regular fa-trash-can fs-19"></i></button></li>
                                    </ul>                                    
                                </div> 
                                <div v-else class=" my-10">
                                    <p class="text-center fs-7 fw-bold">購物車目前是空的。</p>
                                </div>                                                   
                                <ul class="row text-end py-5 fs-19 bg-secondary align-items-center justify-content-between m-0">
                                    <li class="col-lg-7 col-8">優惠券</li>
                                    <li class="col-4">
                                        <div class="input-group ">
                                            <input type="text" class="form-control rounded-0" placeholder="請輸入優惠代碼" v-model="code">
                                            <button type="button" class="input-group-text rounded-0" @click="getCoupon">套用</button>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="row text-center py-4 align-items-center border-bottom m-0" v-if="total - final_total">
                                    <li class="col-9 text-end">優惠券折抵</li>
                                    <li class="col-3 text-danger text-end">- ${{ toCurrency(total - final_total) }}</li>
                                </ul>
                                <ul class="row text-center py-4 align-items-center border-bottom m-0">
                                    <li class="col-9 text-end">小計</li>
                                    <li class="col-3 text-end">$ {{ toCurrency(total) }}</li>
                                </ul>
                                <ul class="row text-center py-4 align-items-center border-bottom  m-0">
                                    <li class="col-9 fw-bold fs-19 text-end">總金額</li>
                                    <li class="col-3 fw-bold fs-19 text-end">$ {{ toCurrency(final_total) }}</li>
                                </ul> 
                            </div> 
                            <div class="d-flex flex-row justify-content-end mt-5">
                                <router-link to="/from" v-if="carts.length > 0" >
                                    <button type="button" class="btn btn-primary rounded-0 px-12 py-2 position-relative">結帳去 <span class="material-icons align-middle icon-right p-0"> trending_flat </span></button> 
                                </router-link>
                            </div> 
                        </div>
                        
                        <!-- md以下顯示 -->
                        <div class="mt-5 mb-10 d-block d-md-none container ">
                            <h2 class="fs-28 px-5 my-5 text-center ">我的購物車</h2>
                            <ul class="row text-center py-5 fs-19 bg-secondary ">
                                <li class="col-7">品名</li>
                                <li class="col-3 text-end">單價</li>                                
                            </ul>
                            <div v-if="carts.length > 0">
                                <ul class="row text-center py-4 gy-4 align-items-center border-bottom" v-for="cart in carts" :key="cart.id">
                                    <li class="col-7 p-0 text-start ps-3">{{ cart.product.title }}</li>
                                    <li class="col-3 p-0 text-end">$ {{ toCurrency(cart.product.price) }}</li>
                                    <li class="col-2 p-0"><button type="button" class="border-0 bg-white" @click="deleteCartItem(cart)"><i class="fa-regular fa-trash-can fs-7"></i></button></li>
                                    <li class="col-6">
                                        <select class="form-select rounded-0" v-model="cart.qty" @change="updateCart(cart)">                                
                                            <option :value="i" v-for="i in 10" :key="`${i}12`">{{ i }}</option>                                              
                                        </select>
                                    </li>
                                    <li class="col-6 d-flex flex-row justify-content-around">小計<span class="fw-bold">$ {{ toCurrency(cart.total) }}</span></li>
                                </ul>                            
                            </div>
                            <div v-else class=" my-10">
                                <p class="text-center fs-7 fw-bold">購物車目前是空的。</p>
                            </div> 
                            <ul class="row text-center py-5 fs-19 bg-secondary align-items-center">
                                <li class="col-3">優惠券</li>
                                <li class="col-9">
                                    <div class="input-group ">
                                        <input type="text" class="form-control rounded-0" placeholder="請輸入優惠代碼" >
                                        <button type="button" class="input-group-text rounded-0" >套用</button>
                                    </div>
                                </li>
                            </ul>
                            <ul class="row text-center py-4 gy-4 align-items-center border-bottom">
                                <li class="col-7 text-end">優惠券折抵</li>
                                <li class="col-5 text-danger text-end">-$500</li>
                            </ul>
                            <ul class="row text-center py-4 gy-4 align-items-center border-bottom">
                                <li class="col-7 text-end">小計</li>
                                <li class="col-5 text-end">$ {{ toCurrency(total) }}</li>
                            </ul>
                            <ul class="row text-center py-4 gy-4 align-items-center border-bottom">
                                <li class="col-7 fw-bold fs-19 text-end">總金額</li>
                                <li class="col-5 fw-bold fs-19 text-end">$ {{ toCurrency(final_total) }}</li>
                            </ul>
                            <div class="d-flex flex-row mt-5">
                                <router-link to="/from" class="btn btn-primary rounded-0 py-2 position-relative  w-100">結帳去 <span class="material-icons align-middle icon-right p-0"> trending_flat </span></router-link>
                            </div>
            
                        </div>

                        

                       
                    </div>
                </div>  
            </div>

             
        </section>
    </main>

</template>

<script>
import { mapState , mapActions } from "pinia";
import cartStore from "@/stores/cart.js";
import Swal from 'sweetalert2'

const {VITE_URL, VITE_PATH} = import.meta.env   

export default {
    data() {
        return {
            code: "",            
        }
    },
    computed: {
        ...mapState(cartStore, ['carts', 'total', 'final_total', 'loadingItem']),
    },
    methods: {
        ...mapActions(cartStore, ['getCart', 'updateCart', 'deleteCartItem']),
        toCurrency(num) {
            if (num === undefined || num === null) {
                return "";
            }
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        getCoupon() {
            const data =  {
                "code": this.code
            }            
            this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, { data } )  
                .then((res) => { 
                    Swal.fire({
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })    
                    this.getCart()
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: err.response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })  
                });
        },
    },
    mounted() {
        this.getCart()     
        Swal.fire({
            title: "開幕慶優惠好禮",
            text: "優惠券輸入 【 NEW80 】即可獲得8折券",
        })       
    },
}
</script>