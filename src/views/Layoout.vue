<script>  
import { mapState , mapActions } from "pinia";
import cartStore from "@/stores/cart.js";

export default {
  data() {
    return {
      isScrollingDown: false // 網頁是否向下捲動
    };
  },
  //監聽網頁向下滾動 不同CSS顯示
  computed: {
    ...mapState(cartStore, ['carts']),
    headerClass() {
      if (this.$route.name !== "首頁") {
        if ( this.isScrollingDown ) {
          return "bg-white sticky-top  header-shadow transition-all-ease"
        } else {
          return "bg-white sticky-top transition-all-ease";
        }
      } 
      if (this.$route.name === "首頁") {        
        if ( this.isScrollingDown ) {
          return "bg-white sticky-top transition-all-ease header-shadow";
        } else {
          return "bg-transparent  fixed-top transition-all-ease"  
        }
      }       
    },
    h1Class() {
      if (this.$route.name !== "首頁") {
        return "visible";
      } 
      if (this.$route.name === "首頁") {
        if (this.isScrollingDown) {
          return "visible ";
        } else {
          return "invisible ";
        }
      }      
    },
    ulClass() {
      if (this.$route.name !== "首頁") {
        return "justify-content-end";
      } 

      if (this.$route.name === "首頁") {
        if (this.isScrollingDown) {
          return "justify-content-end transition-all-ease";
        } else {
          return "justify-content-center transition-all-ease";
        }
      }
    },
    liClass() {
      if (this.$route.name !== "首頁") {
        return "text-primary hvr-underline-from-center pb-1";
      } 
      if (this.$route.name === "首頁") {
        if (this.isScrollingDown) {
          return "text-primary  hvr-underline-from-center pb-1";
        } else {
          return "text-white hvr-float";
        }
      } 
    },
    cartClass() {
      if (this.$route.name !== "首頁") {
        return "scroll-header-cart-btn";
      } 
      if (this.$route.name === "首頁") {
        if (this.isScrollingDown) {
          return "scroll-header-cart-btn transition-all-ease";
        } else {
          return "header-cart-btn transition-all-ease";
        }
      } 
    },
    menuClass() {
      if (this.$route.name !== "首頁") {
        return "text-primary";
      } 
      if (this.$route.name === "首頁") {
        if (this.isScrollingDown) {
          return "text-primary transition-all-ease";
        } else {
          return "text-white transition-all-ease";
        }
      } 
    },
    
  }, 
  beforeDestroy() {
    // 移除監聽事件
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    handleScroll() {      
      // 捲動時 isScrolled 設為 true  
      this.isScrollingDown = window.scrollY >  this.$refs.header.offsetHeight      
    },
    //取得類別參數 路由帶值跳轉
    getCategoryProducts(category) {
      console.log(category)
      this.$router.push({
          name: '商品列表',
          query: { category: category }
      })                
    },    

  },
  mounted() {
    // 監聽網頁滾動事件
    window.addEventListener("scroll", this.handleScroll);
    this.getCart()

    // 在路由切換前關閉Offcanvas的視窗
    this.$router.beforeEach((to, from, next) => {
      this.$refs.offcanvas.classList.remove('show');
      next();
    });
  },
}

</script>
<template>  
  <!-- 頁首 -->
  <header :class="headerClass" ref="header">
    <div class="container d-flex justify-content-between align-items-center py-5 ">    
      <h1><router-link to="/" class="header-logo" :class="h1Class">享露</router-link></h1>
      <ul class="nav d-md-flex justify-content-end align-items-center d-md-block d-none w-100" :class="ulClass">
        <li><router-link to="/about" :class="liClass" >關於我們</router-link></li>
        <li><router-link to="/products" :class="liClass" class="mx-10">商品分類</router-link></li>
        <li><router-link to="/news" :class="liClass" class="me-10">最新消息</router-link></li>           
      </ul>  
      <router-link to="/cart" :class="cartClass" class="px-4 pt-4 pb-3 rounded-circle d-md-block d-none position-relative">
        <span class="material-symbols-outlined  fs-16">shopping_cart</span>
        <span class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle-x" v-if="carts.length > 0">{{ carts.length }}</span>
      </router-link>      

      <!-- RWD 漢堡選單 -->
      <nav class="d-md-none d-block d-flex  align-items-center">
        <button class="btn btn-white d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" aria-controls="offcanvasStart">
          <span :class="menuClass" class="material-symbols-outlined fs-5 bg-transparent">menu</span>
        </button>
      </nav>  
       
    </div>
  </header>
  <!-- RWD選單  -->
  <div ref="offcanvas" class="offcanvas offcanvas-start d-md-none d-block border-0 overflow-auto vh-100" tabindex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel"  data-bs-scroll="true" data-bs-backdrop="false">
    <div class="vh-100 ">
      <div class="offcanvas-header d-flex justify-content-end pt-10 pe-5">
        <button type="button" class="btn-close opacity-100 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body py-0  d-flex flex-column justify-content-between" style="height: calc(100vh - 80px);">
        <ul class="fw-bold fs-6 ">
          <li class="py-5 border-bottom border-secondary fs-5"><router-link to="/about" class="ps-5">關於我們</router-link></li>
          <li class="border-bottom border-secondary ">
            <div class="accordion accordion-flush " id="accordionTitle">
              <div class="accordion-item ">
                <h2 class="accordion-header " id="flush-headingTitle">
                  <button class="accordion-button collapsed fs-5 fw-bold bg-white  ps-5 w-50 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTitle" aria-expanded="false" aria-controls="flush-collapseTitle">
                    商品分類
                  </button>
                </h2>
                <div id="flush-collapseTitle" class="accordion-collapse collapse" aria-labelledby="flush-headingTitle" data-bs-parent="#accordionTitle">
                  <div class="accordion-body  py-0" style="width: 60%;">
                    <div class="accordion accordion-flush " id="accordionSmall">
                      <div class="accordion-item border-0">
                        <h3 class="accordion-header">
                            <button class="btn px-5 w-100 text-start py-3 lh-sm border-0" type="button">
                              <router-link to="/products">全部商品</router-link>                            
                            </button>
                        </h3>   
                      </div>
                      <div class="accordion-item border-0">
                        <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button collapsed py-3 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            精選系列
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body py-2 px-0">
                            <ul class="ps-4">
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('家庭露營')">家庭露營系列</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('機車露營')">機車露營系列</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('登山露營')">登山露營系列</button></li>
                            </ul> 
                          </div>
                        </div>
                      </div>        
                      <div class="accordion-item border-0">
                        <h2 class="accordion-header" id="headingTwo">
                          <button class="accordion-button collapsed py-3 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            帳篷/天幕
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body py-2 px-0">
                            <ul class="ps-4">
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('帳篷')">帳篷</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('天幕')">天幕</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('帳篷配件')">帳篷配件</button></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item border-0">
                        <h2 class="accordion-header" id="headingThree">
                          <button class="accordion-button collapsed py-3 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            桌椅/家具
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div class="accordion-body py-2 px-0">
                            <ul class="ps-4">
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('戶外桌')">戶外桌</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('露營椅')">露營椅</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('睡袋')">睡袋</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('床墊')">床墊</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('枕頭')">枕頭</button></li>                                        
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item border-0">
                        <h2 class="accordion-header" id="headingFour">
                          <button class="accordion-button collapsed py-3 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            燈具照明
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div class="accordion-body py-2 px-0">
                            <ul class="ps-4">
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('燈具')">燈具</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('煤油燈')">煤油燈</button></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item border-0">
                        <h2 class="accordion-header" id="headingFive">
                          <button class="accordion-button collapsed py-3 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            爐具/餐具
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div class="accordion-body py-2 px-0">
                            <ul class="ps-4">
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('爐具')">爐具</button></li>
                              <li class="px-5 "><button type="button" class="border-0 p-0 bg-transparent fs-16 fw-normal " @click="getCategoryProducts('餐具')">餐具</button></li>                                     
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item border-0">
                        <h3 class="accordion-header">
                          <button class="btn py-3 px-5 w-100 text-start border-0 " type="button" @click="getCategoryProducts('焚火/燒烤')">
                              焚火/燒烤
                          </button>
                        </h3>                               
                      </div>  
                      <div class="accordion-item border-0">
                        <h3 class="accordion-header">
                            <button class="btn py-3 px-5 w-100 text-start border-0 " type="button" @click="getCategoryProducts('保冷/水箱')">
                                保冷/水箱
                            </button>
                        </h3>   
                      </div>
                      <div class="accordion-item border-0">
                          <h3 class="accordion-header">
                              <button class="btn py-3 px-5 w-100 text-start border-0 " type="button" @click="getCategoryProducts('收納/配件')">
                                  收納/配件
                              </button>
                          </h3>   
                      </div>
              
              
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </li>
          <li class="py-5 border-bottom border-secondary fs-5"><router-link to="/news" class="ps-5">最新消息</router-link></li>
          <li class="py-5 border-bottom border-secondary fs-5"><router-link to="/cart" class="ps-5">購物車</router-link></li>
        </ul>     
  
        <div class="ps-5 py-5">
          <ul class="d-flex">
            <li><a href="#"><img src="@/assets/image/icon/ic_twotone-facebook.png" alt="facebook"></a></li>
            <li class="mx-3"><a href="#"><img src="@/assets/image/icon/ph_instagram-logo-fill.png" alt="instagram"></a></li>
            <li><a href="#"><img src="@/assets/image/icon/mdi_facebook-messenger.png" alt="messenge"></a></li>
          </ul>
          <p class="my-3">service@gmail.com</p>
          <p>星期一 ~ 星期五 09:00-18:00</p>
        </div>
      </div>
    
    </div>
  </div>
 
  <!-- 頁首 END-->
  
  <!-- 內文 -->
  <router-view></router-view>
 

  <!-- 頁尾 -->
  <footer>
    <div class="container d-md-flex justify-content-between py-md-12 py-10 border-top border-g-40">
        <div>
          <router-link to="/" class="footer-logo"></router-link>
        </div>
        <div class="d-flex flex-md-row flex-column">
          <div class="text-md-end px-md-12 border-md-start order-2 order-md-1">
            <ul class="d-flex justify-content-md-end">
              <li><a href="#"><img src="../assets/image/icon/ic_twotone-facebook.png" alt="facebook"></a></li>
              <li class="mx-3"><a href="#"><img src="../assets/image/icon/ph_instagram-logo-fill.png" alt="instagram"></a></li>
              <li><a href="#"><img src="../assets/image/icon/mdi_facebook-messenger.png" alt="messenge"></a></li>
            </ul>
            <p class="my-md-8 my-3">service@gmail.com</p>
            <p>星期一 ~ 星期五 09:00-18:00</p>
          </div>
          <ul class="ps-lg-12 my-10 my-md-0 border-md-start order-1 order-md-2">
              <li><router-link to="/about"> - 關於我們</router-link></li>
              <li class="my-md-8 my-3"><router-link to="/products"> - 商品分類</router-link></li>
              <li><router-link to="/news"> - 最新消息</router-link></li>
            </ul>
        </div>
        
      </div>
    <div class="bg-primary">
      <p class="text-center text-white fs-9 py-5 fw-bold">此網站僅作品展示使用，無商業用途。</p>
    </div>
  </footer>
  
</template>
