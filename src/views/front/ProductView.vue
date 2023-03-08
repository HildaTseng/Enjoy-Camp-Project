<template>
    <main>
        <!-- 商品資訊 -->
        <section>
            
            <div class="container my-12">
                <div class="row justify-content-around ">
                    <div class="col-lg-6 ">
                        <img class="img-fluid " :src="product.imageUrl" :alt="product.title" style="aspect-ratio: 1/0.8; object-fit: cover;">
                    </div>
                    <div class="col-lg-5  d-flex flex-column justify-content-between mt-10 mt-lg-0">
                        <div class=" mb-6 mb-xl-0">
                            <h3 class="fw-bold mb-5">{{ product.title }}</h3>
                            <p>{{ product.description }}</p>
                        </div>
                        <div class="">
                            <div class="d-flex flex-xl-row justify-content-between align-items-xl-end flex-column align-items-start">
                                <div class="d-flex flex-row align-items-center w-75" >
                                    <p class="me-5 fs-19">數量</p>
                                    <div class="d-flex flex-row align-items-center border border-secondary border-3 w-75">
                                        <button type="button" class="border-0 bg-white px-5 py-2" @click="minusCount"><span class="material-icons align-middle ">add</span></button>
                                        <input class="form-control border-0 text-center fs-28-rwd-19" type="text" readonly v-model="qty">
                                        <button type="button" class="border-0 bg-white px-5 py-2" @click="addCount"><span class="material-icons align-middle">remove</span></button>
                                    </div>
                                </div>
                                <div v-if="product.price === product.origin_price" class="mt-3 mt-xl-0">
                                    <p class="fs-28-rwd-19 fw-bold">$ {{ toCurrency(product.price) }}</p>
                                </div>
                                <div v-else class="mt-3 mt-xl-0">
                                    <p class=" text-xl-end">定價<span class="text-decoration-line-through"> $ {{ toCurrency(product.origin_price) }}</span></p>
                                    <p class="fs-28-rwd-19 fw-bold">$ {{ toCurrency(product.price) }}</p>
                                </div>
                            </div>
                            <div class="row justify-content-end mt-xl-10 mt-5">
                                <div class="col-xl-5 mb-3 mb-xl-0">                                
                                    <button type="button" class="btn btn-outline-primary rounded-0 w-100 py-2" @click="addToCart(product.id, qty)"><span class="material-icons align-middle me-5">shopping_cart</span>加入購物車</button>
                                </div>
                                <div class="col-xl-5">
                                    <router-link to="/cart">
                                        <button type="button" class="btn btn-primary rounded-0 w-100 py-2" @click="addToCart(product.id, qty)"><span class="material-icons align-middle me-5 ">shopping_bag</span>立即購買</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>

        <!-- 相似商品 -->
        <section>
            <div class="container my-12">
                <h3 class="border-bottom pb-3 border-2">你可能也會喜歡</h3>

                <div class="row  row-cols-lg-4 row-cols-md-2 row-cols-1 pt-md-12 pt-11 pb-10" >
                    <div class="col gy-4 gy-lg-0" v-for="item in categoryProducts" :key="item.id">
                        <div class="card rounded-0  ">
                            <router-link :to="`/product/${item.id}`" >
                                <div class="position-relative">
                                    <img class="img-fluid " :src="item.imageUrl" :alt="item.title"  style="aspect-ratio: 1/1.1; object-fit: cover;">
                                    <div class="btn-hover-add-cart d-flex justify-content-center align-items-center">
                                        <button type="button" class="add-cart-btn"  @click="addToCart(product.id)">加入購物車</button>
                                    </div>                                        
                                </div>
                                <div class="card-body p-0 py-5 text-center border">
                                    <h4 class="card-title fs-16 fw-bold">{{ item.title }}</h4>
                                    <p class="card-text ">$ {{ toCurrency(item.price) }}</p>
                                </div>
                            </router-link>
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

const {VITE_URL, VITE_PATH} = import.meta.env   
    
export default {
    data() {
        return {
            product: {},
            categoryProducts: [],
            qty: 1,
        }
    },
    watch: {
        '$route.params.id': {            
            handler(newId) {
                this.id = newId;
                if (this.id) {
                    this.getProduct();
                }
            }
        },
    },
    methods: {
        getProduct() {
            const { id } = this.$route.params
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)  
                .then((res) => { 
                    this.product = res.data.product                    
                    this.getCategoryProduct()
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        toCurrency(num) {
            if (num === undefined || num === null) {
                return "";
            }
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        getCategoryProduct() {
            const { category } = this.product;
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)  
                .then((res) => {                    
                    this.categoryProducts = res.data.products 
                    this.lengthFourArr()
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
      
        },
        //相似產品陣列處理
        lengthFourArr() {            
            if (this.categoryProducts.length > 4) {
                this.categoryProducts = this.categoryProducts.slice(0, 4); 
            }
        },
        ...mapActions(cartStore ,["addToCart",]),
        addCount() {
            if (this.qty < 10) {
                this.qty++;
            }
        },
        minusCount() {
            if (this.qty > 1) {
                this.qty--;
            }
        }
    },
    mounted() {
        this.getProduct()
    },
}
</script>