<template>
    <main>        
        <section>
            
            <div class="container my-md-10">
                <div class="row justify-content-center ">
                    <div class="col-xl-10">
                        <!-- 購物車明細 md以上顯示 -->
                        <div class="my-10  d-none d-md-block">
                            <h2 class="fs-28 px-5 my-10 text-center">確認訂單資料</h2>
                            <div class="border border-g-40">
                                <ul class="row fw-bold py-2 fs-19 bg-g-40 m-0">
                                    <li class="col">訂單明細</li>                              
                                </ul>
                                <ul class="row text-center fw-bold py-5 fs-19 bg-secondary m-0">
                                    <li class="col-6">品名</li>
                                    <li class="col-2">數量</li>                                
                                    <li class="col-2">單價</li>                                
                                    <li class="col-2">小計</li>
                                </ul>
                                <div>
                                    <ul class="row text-center py-5 align-items-center m-0" v-for="cart in carts" :key="cart.id">
                                        <li class="col-6">{{ cart.product.title }}</li>
                                        <li class="col-2">{{ cart.qty }}</li>
                                        <li class="col-2 p-0">$ {{ toCurrency(cart.product.price) }}</li>
                                        <li class="col-2">$ {{ toCurrency(cart.total) }}</li>
                                    </ul>                                   
                                </div>                           
                                <div class="border-top border-g-40">
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom m-0" v-if="total - final_total">
                                        <li class="col-10 text-end m-0">優惠券折抵</li>
                                        <li class="col-2 text-danger text-end pe-lg-20 m-0">- ${{ toCurrency(total - final_total) }}</li>
                                    </ul>
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom m-0">
                                        <li class="col-10 text-end m-0">小計</li>
                                        <li class="col-2 text-end pe-lg-20 m-0">$ {{ toCurrency(total) }}</li>
                                    </ul>
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom m-0">
                                        <li class="col-10 fw-bold fs-19 text-end m-0">總金額</li>
                                        <li class="col-2 fw-bold fs-19 text-end pe-lg-20 m-0">$ {{ toCurrency(final_total) }}</li>
                                    </ul>          
                                </div>               
                            </div>  
            
                        </div>

                        <!--購物車明細 md以下顯示 -->
                        <div class="d-block d-md-none">
                            <div class="my-5 container">
                                <h2 class="fs-28 px-5 my-5 text-center ">確認訂單資料</h2>
                                <ul class="row fw-bold py-2 fs-19 bg-g-40">
                                    <li class="col">訂單明細</li>                              
                                </ul>
                                <ul class="row text-center py-5 fs-19 bg-secondary ">
                                    <li class="col-8">品名</li>
                                    <li class="col-4">單價</li>                                
                                </ul>
                                <div>
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom" v-for="cart in carts" :key="cart.id">
                                        <li class="col-8 p-0 text-start ps-3">{{ cart.product.title }}</li>
                                        <li class="col-4 p-0 ">$ {{ toCurrency(cart.product.price) }}</li>
                                        <li class="col-6">{{ cart.qty }}</li>
                                        <li class="col-6 d-flex flex-row justify-content-around">小計<span class="fw-bold">$ {{ toCurrency(cart.total) }}</span></li>
                                    </ul>                                    
                                </div>   
                                <div class="border-top border-primary">
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom ">
                                        <li class="col-7 text-end">優惠券折抵</li>
                                        <li class="col-5 text-danger text-end px-6">-$500</li>
                                    </ul>
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom">
                                        <li class="col-7 text-end">小計</li>
                                        <li class="col-5 text-end px-6">$ {{ toCurrency(total) }}</li>
                                    </ul>
                                    <ul class="row text-center py-4 gy-4 align-items-center border-bottom">
                                        <li class="col-7 fw-bold fs-19 text-end">總金額</li>
                                        <li class="col-5 fw-bold fs-19 text-end px-6">$ {{ toCurrency(final_total) }}</li>
                                    </ul>
                                </div>  
                
                            </div>
                        </div>

                        <!-- 表單資訊 -->
                        <div class="mt-12 my-10">
                            <ul class="row fw-bold py-2 fs-19 bg-g-40 m-0">
                                <li class="col">訂單資訊</li>                              
                            </ul>                            
                            <div class=" border-rwd-0">
                                <ul class="row text-center py-5 align-items-center justify-content-center border-bottom m-0">
                                    <li class="col-3">姓名</li>
                                    <li class="col-xl-4 col-md-5 col-9">{{ form.user.name }}</li>                                  
                                </ul>
                                <ul class="row text-center py-5 align-items-center justify-content-center border-bottom m-0">
                                    <li class="col-3">手機</li>
                                    <li class="col-xl-4 col-md-5 col-9">{{ form.user.tel }}</li>                                    
                                </ul>   
                                <ul class="row text-center py-5 align-items-center justify-content-center border-bottom m-0">
                                    <li class="col-3">電子信箱</li>
                                    <li class="col-xl-4 col-md-5 col-9">{{ form.user.email }}</li>                                    
                                </ul>  
                                <ul class="row text-center py-5 align-items-center justify-content-center border-bottom m-0">
                                    <li class="col-3">地址</li>
                                    <li class="col-xl-4 col-md-5 col-9">{{ form.user.address }}</li>                                    
                                </ul>    
                                <ul class="row text-center py-5 align-items-center justify-content-center border-bottom m-0">
                                    <li class="col-3">備註</li>
                                    <li class="col-xl-4 col-md-5 col-9">{{ form.message }}</li>                                    
                                </ul>                             
                            </div>                                   
                        </div>

                        <div class="d-flex flex-row justify-content-center">
                            <button type="button" class="btn btn-primary rounded-0 px-12 py-2 position-relative" @click="createOrder">送出訂單</button>                                  
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

export default {
    computed: {
        ...mapState(cartStore, ['form', 'carts', 'total', 'final_total']),
    },
    
    methods: {
        ...mapActions(cartStore, ['createOrder', 'getCart']),
        toCurrency(num) {
            if (num === undefined || num === null) {
                return "";
            }
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
}
</script>