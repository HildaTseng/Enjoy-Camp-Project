<template>
    <main>
        <section>
            <div class="container my-12">               
                <div class="row">
                    <!-- 分類 -->
                    <div class="col-lg-3 d-none d-lg-block" >
                        <div class="accordion accordion-flush " id="accordionLarge">
                            <div class="accordion-item border-bottom">
                                <h3 class="accordion-header">
                                    <button class="btn px-5 pt-0 pb-4  w-100 text-start border-0" type="button" @click="getProducts">
                                        全部商品
                                    </button>
                                </h3>   
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header " id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    精選系列
                                </button>
                                </h3>
                                <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                                <div class="accordion-body pt-0">
                                    <ul class="ps-4">
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryCampModeProducts('家庭露營')">家庭露營系列</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryCampModeProducts('機車露營')">機車露營系列</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryCampModeProducts('登山露營')">登山露營系列</button></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    帳篷/天幕
                                </button>
                                </h3>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" >
                                <div class="accordion-body pt-0">
                                    <ul class="ps-4" >
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('帳篷')">帳篷</button></li> 
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryProducts('天幕')">天幕</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryProducts('帳篷配件')">帳篷配件</button></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    桌椅/家具
                                </button>
                                </h3>
                                <div id="flush-collapseThree" class="accordion-collapse collapse show" aria-labelledby="flush-headingThree" >
                                <div class="accordion-body pt-0">
                                    <ul class="ps-4">
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('戶外桌')">戶外桌</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('露營椅')">露營椅</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('睡袋')">睡袋</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('床墊')">床墊</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('枕頭')">枕頭</button></li>                                        
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    燈具照明
                                </button>
                                </h3>
                                <div id="flush-collapseFour" class="accordion-collapse collapse show" aria-labelledby="flush-headingFour" >
                                <div class="accordion-body pt-0">
                                    <ul class="ps-4">
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('燈具')">燈具</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0"  @click="getCategoryProducts('煤油燈')">煤油燈</button></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    爐具/餐具
                                </button>
                                </h3>
                                <div id="flush-collapseFive" class="accordion-collapse collapse show" aria-labelledby="flush-headingFive" >
                                <div class="accordion-body pt-0">
                                    <ul class="ps-4">
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryProducts('爐具')">爐具</button></li>
                                        <li class="p-3"><button type="button" class="border-0 bg-transparent p-0" @click="getCategoryProducts('餐具')">餐具</button></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header">
                                    <button class="btn py-4 px-5 w-100 text-start border-0" type="button"   @click="getCategoryProducts('焚火/燒烤')">
                                        焚火/燒烤
                                    </button>
                                </h3>                               
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header">
                                    <button class="btn py-4 px-5 w-100 text-start border-0" type="button"  @click="getCategoryProducts('保冷/水箱')">
                                        保冷/水箱
                                    </button>
                                </h3>   
                            </div>
                            <div class="accordion-item border-bottom">
                                <h3 class="accordion-header">
                                    <button class="btn py-4 px-5 w-100 text-start border-0" type="button"  @click="getCategoryProducts('收納/配件')">
                                        收納/配件
                                    </button>
                                </h3>   
                            </div>
                        </div>
                    </div>
                    <!-- card 列表內容 -->
                    <div class="col-lg-9">
                        <!-- title & 排序 -->
                        <div class="d-flex flex-row justify-content-between mb-11">
                            <h2 class="px-5 border-primary border-2 border-start fs-5">{{ title }}</h2>
                              
                            <select class="form-select w-25 rounded-0"  @change="changeSelect">
                                <option value="最新上架" selected>最新上架</option>
                                <option value="價格高至低排序" >價格高至低排序</option>
                                <option value="價格低至高排序" >價格低至高排序</option>
                            </select>
                        </div>
                        <!-- card item -->
                        <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5">
                            <div class="col card-group" v-for="product in products" :key="product.id">
                                <div class="card rounded-0  ">
                                    <router-link :to="`/product/${product.id}`">
                                        <div class="position-relative">
                                            <img class="img-fluid " :src="product.imageUrl" :alt="product.title"  style="aspect-ratio: 1/1.1; object-fit: cover;">
                                            <div class="btn-hover-add-cart d-flex justify-content-center align-items-center">
                                                <button type="button" class="add-cart-btn" @click.prevent="addToCart(product.id)">加入購物車</button>
                                            </div>                                                                                
                                        </div>
                                        <div class="card-body py-5 px-3 text-center border-0 d-flex flex-column">
                                            <h4 class="card-title fs-19 fw-bold mb-auto">{{ product.title }}</h4>
                                            <p class="card-text ">$ {{ toCurrency(product.price) }}</p>
                                        </div>
                                    </router-link>  
                                </div>
                            </div>                          
                            
                        </div>

                        <!-- 分頁 -->
                        <nav aria-label="Page navigation" v-if="pages.total_pages > 1">
                            <ul class="pagination my-10 d-flex justify-content-center ">
                                <li class="page-item rounded-0 " :class="{ disabled : !pages.has_pre }">
                                    <a class="page-link" href="#" aria-label="Previous"  @click.prevent="getProducts(pages.current_page - 1)">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"  
                                    v-for="page in pages.total_pages" 
                                    :key="page + 'page'" 
                                    :class="{ active : page === pages.current_page }">
                                        <a class="page-link" href="#" @click.prevent="getProducts(page)">{{ page }}</a>
                                </li>                              
                                <li class="page-item" :class="{ disabled : !pages.has_next }">
                                    <a class="page-link" href="#" aria-label="Next"  @click.prevent="getProducts(pages.current_page + 1)">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

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
            products: [],
            pages:{},
            title:"全部商品",
        }
    },    
    methods: {
        getProducts(page = 1) {
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)  
                .then((res) => { 
                    this.products = res.data.products
                    this.pages =  res.data.pagination;
                    this.title = "全部商品"  
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        toCurrency(num){
            if (num === undefined || num === null) {
                return "";
            }
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        //產品類別
        getCategoryProducts(category, page = 1) {
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}&category=${category}`)  
                .then((res) => {                    
                    this.products = res.data.products      
                    this.pages =  res.data.pagination;   
                    this.title = `${category}`
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });      
        },
        //精選系列類別
        getCategoryCampModeProducts(category, page = 1) {
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)  
                .then((res) => {                    
                    const products = res.data.products;
                    const filteredProducts = products.filter((product) => {
                        return product.category_campMode.includes(category);
                    });
                    this.products = filteredProducts; 
                    this.pages =  res.data.pagination;   
                    this.title = `${category}系列`  
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });      
        },

        changeSelect() {
            if (event.target.value === "最新上架") {
                this.getProducts()
            } else if (event.target.value === "價格高至低排序") {
                this.products = this.products.sort((a, b) => b.price - a.price);
            } else if (event.target.value === "價格低至高排序") {
                this.products = this.products.sort((a, b) => a.price - b.price);
            }
        },
        ...mapActions(cartStore ,["addToCart",]),
    }, 
    mounted() {       
        // this.getProducts() 
        const category = this.$route.query.category;
        if (category === "家庭露營" || category === "機車露營") {
            this.getCategoryCampModeProducts(category)
        } else if (category === "帳篷" || category === "露營椅" || category === "焚火/燒烤") {
            this.getCategoryProducts(category)
        } else {
            this.getProducts()
        }
    },
}
</script>