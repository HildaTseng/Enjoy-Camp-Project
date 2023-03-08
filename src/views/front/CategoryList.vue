<template>
    <main>
        <section>
            <div class="container my-12">
                <div class="row">
                    <!-- 分類 -->
                    <div class="col-lg-3 d-none d-lg-block">
                        <div class="accordion accordion-flush " id="accordionLarge">
                            <div class="accordion-item border-bottom">
                                <h3 class="accordion-header">
                                    <button class="btn px-5 pt-0 pb-4  w-100 text-start border-0" type="button">
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
                                        <li class="p-3"><a href="#">家庭露營系列</a></li>
                                        <li class="p-3"><a href="#">機車露營系列</a></li>
                                        <li class="p-3"><a href="#">登山露營系列</a></li>
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
                                    <ul class="ps-4">
                                        <li class="p-3"><a href="#">帳篷</a></li>
                                        <li class="p-3"><a href="#">天幕</a></li>
                                        <li class="p-3"><a href="#">帳篷配件</a></li>
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
                                        <li class="p-3"><a href="#">戶外桌</a></li>
                                        <li class="p-3"><a href="#">露營椅</a></li>
                                        <li class="p-3"><a href="#">睡袋</a></li>
                                        <li class="p-3"><a href="#">床墊</a></li>
                                        <li class="p-3"><a href="#">枕頭</a></li>                                        
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
                                        <li class="p-3"><a href="#">燈具</a></li>
                                        <li class="p-3"><a href="#">煤油燈</a></li>
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
                                        <li class="p-3"><a href="#">爐具</a></li>
                                        <li class="p-3"><a href="#">餐具</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header">
                                    <button class="btn py-4 px-5 w-100 text-start border-0" type="button">
                                        焚火/燒烤
                                    </button>
                                </h3>                               
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header">
                                    <button class="btn py-4 px-5 w-100 text-start border-0" type="button">
                                        保冷/水箱
                                    </button>
                                </h3>   
                            </div>
                            <div class="accordion-item border-bottom">
                                <h3 class="accordion-header">
                                    <button class="btn py-4 px-5 w-100 text-start border-0" type="button">
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
                            <h2 class="px-5 border-primary border-2 border-start fs-5">全部商品</h2>
                            <div class="dropdown ">
                                <a class="btn btn-secondary dropdown-toggle rounded-0 bg-white border border-g-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    熱賣商品
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end rounded-0" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">熱賣商品</a></li>
                                    <li><a class="dropdown-item" href="#">最新上架</a></li>
                                    <li><a class="dropdown-item" href="#">價格高至低排序</a></li>
                                    <li><a class="dropdown-item" href="#">價格低至高排序</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- card item -->
                        <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5">
                            <div class="col" v-for="product in products" :key="product.id">
                                <div class="card rounded-0  ">
                                    <router-link :to="`/product/${product.id}`">
                                        <div class="position-relative">
                                            <img class="img-fluid " :src="product.imageUrl" :alt="product.title"  style="aspect-ratio: 1/1.1; object-fit: cover;">
                                            <div class="btn-hover-add-cart d-flex justify-content-center align-items-center">
                                                <button type="button" class="add-cart-btn">加入購物車</button>
                                            </div>                                                                                
                                        </div>
                                        <div class="card-body p-0 py-5 text-center border">
                                            <h4 class="card-title fs-19 fw-bold">{{ product.title }}</h4>
                                            <p class="card-text ">$ {{ toCurrency(product.price) }}</p>
                                        </div>
                                    </router-link>  
                                </div>
                            </div>                          
                            
                        </div>

                        <!-- 分頁 -->
                        <nav aria-label="Page navigation">
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
const {VITE_URL, VITE_PATH} = import.meta.env   
    
export default {
    data() {
        return {
            products: [],
            pages:{},
        }
    },
    methods: {
        getProducts(page = 1) {
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)  
                .then((res) => { 
                    this.products = res.data.products
                    this.pages =  res.data.pagination;
                    this.getCategoryProducts()
                    // console.log(res.data.products)
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
        getCategoryProducts() {
            const { category } = this.$route.params;
            console.log(this.$route.params.category)
      
        }
    },
    mounted() {
       this.getProducts()
    },
}
</script>