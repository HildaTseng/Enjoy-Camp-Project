<template>   
  <main>  
    <!-- Video -->
    <section>  
  
      <!-- 影片banner -->
      <div class="position-relative w-100 vh-100">
        <video  src="@/assets/image/Camping-Video.mp4" autoplay="true" loop="true" muted="true" playsinline class="video-banner "></video>
        <div class="d-flex justify-content-center video-15">
          <div class="banner-logo-title d-flex justify-content-end align-items-end">
            <div class="banner-logo-text"></div>
          </div> 
          <div class="container banner-text d-flex justify-content-center justify-content-md-end align-items-start flex-column-reverse text-white fw-bold fs-28-rwd-19">    
            <p class="pe-2 ps-3 position-relative"><span class="right-line"></span> 享 受 露 營 與</p>
            <p class="pe-2 ps-3 position-relative"><span class="right-line"></span> 萬 物 連 結 的</p>
            <p class="pe-2 ps-3 position-relative"><span class="right-line"></span> 每 一 刻 。</p>                
          </div>
        </div> 
      </div>
        
  
  
      <!-- 圖片banner -->
      <!-- <div class="logo-banner d-flex justify-content-center align-items-center">
        <div class="banner-logo-title d-flex justify-content-end align-items-end">
          <div class="banner-logo-text"></div>
        </div> 
        <div class="container banner-text d-flex justify-content-center justify-content-md-end align-items-start flex-column-reverse text-white fw-bold fs-28-rwd-19">    
          <p class="pe-2 ps-3 position-relative"><span class="right-line"></span> 享 受 露 營 與</p>
          <p class="pe-2 ps-3 position-relative"><span class="right-line"></span> 萬 物 連 結 的</p>
          <p class="pe-2 ps-3 position-relative"><span class="right-line"></span> 每 一 刻 。</p>                
        </div>
      </div> -->
  
    </section>
  
    <!-- banner -->
    <section>
      <div class="container my-14 my-md-16 position-relative " data-aos-once="true" data-aos="fade-up"  data-aos-duration="1500" >      
        <div class="text-banner offset-md-1 position-relative"></div>
        <div class="row g-0" >
          <div class="col-md-6 col-lg-5 col-xxl-3 p-md-5 mt-10 my-md-0 mb-11 text-box">
            <h2 class="mb-3 fw-bold" >與大自然共享</h2>
            <p class="fw-bold ">分享 x 獨享 x 生活露營</p>
          </div>
          <router-link to="/products"><button type="button" class="col-8 col-md-4 offset-md-1 banner-btn smart-animate hvr-icon-forward">
            SEE ALL
            <span class="material-icons fs-6 icon-right hvr-icon">trending_flat</span></button>
          </router-link>
        </div>
      </div>
    </section> 
  
    <!-- category -->
    <section>
      <div class="container mb-14 mb-md-17">
        <h2 class="fs-80-rwd-48 fn-EN mb-md-10 mb-5" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1500">HOT CATEGORY</h2>
        <h3 class="fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start border-end d-inline" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="300">精選系列</h3>
        <div class="row row-cols-1 row-cols-lg-3 mt-md-12 mt-10">
          <div class="col">
            <div class="card border-0 " data-aos-once="true" data-aos="fade-up"  data-aos-duration="1000" >  
              <button type="button" class="border-0 p-0 position-relative overflow-hidden hvr-icon-forward" @click="getCategoryProducts('家庭露營')">
                <div class="category-img-famaly img-scale-12 smart-animate"></div>
                <p class="p-bottom-0 text-white fs-28-rwd-19 fw-bold p-5 pt-0 d-flex flex-row justify-content-between align-items-center ">家庭露營 <span class="material-icons icon-fs-28-rwd-20 hvr-icon">trending_flat</span></p>              
              </button>
            </div>
  
            <div class="card border-0 mt-lg-6 my-3" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="100">
              <button type="button" class="border-0 p-0 position-relative overflow-hidden hvr-icon-forward" @click="getCategoryProducts('機車露營')">
                <div class="category-img-bike img-scale-12 smart-animate"></div>
                <p class="p-bottom-0 text-white fs-28-rwd-19 fw-bold p-5 pt-0 d-flex flex-row justify-content-between align-items-center">機車露營<span class="material-icons icon-fs-28-rwd-20 hvr-icon">trending_flat</span></p>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 my-3 my-lg-0" data-aos-once="true" data-aos="fade-up"   data-aos-duration="1000" data-aos-delay="200">
              <button type="button" class="border-0 p-0  position-relative overflow-hidden hvr-icon-forward" @click="getCategoryProducts('帳篷')">
                <div class="category-img-tool img-scale-12 smart-animate"></div>
                <p class="p-bottom-0 text-white fs-28-rwd-19 fw-bold p-5 pt-0 d-flex flex-row justify-content-between align-items-center">營地裝備<span class="material-icons icon-fs-28-rwd-20 hvr-icon">trending_flat</span></p>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card border-0" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
              <button type="button" class="border-0 p-0 position-relative overflow-hidden hvr-icon-forward" @click="getCategoryProducts('露營椅')">
                <div class="category-img-furniture img-scale-12 smart-animate"></div>
                <p class="p-bottom-0 text-white fs-28-rwd-19 fw-bold p-5 pt-0 d-flex flex-row justify-content-between align-items-center">家具系列<span class="material-icons fs-5 hvr-icon">trending_flat</span></p>
              </button>
            </div>
            <div class="card border-0  mt-lg-6 my-3" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="400">
              <button type="button" class="border-0 p-0 position-relative overflow-hidden hvr-icon-forward" @click="getCategoryProducts('焚火/燒烤')">
                <div class="category-img-fire img-scale-12 smart-animate"></div>
                <p class="p-bottom-0 text-white fs-28-rwd-19 fw-bold p-5 pt-0 d-flex flex-row justify-content-between align-items-center">野炊系列<span class="material-icons fs-5 hvr-icon">trending_flat</span></p>
              </button>
  
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- item -->
    <section class="bg-secondary" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1500">
      <div class="container position-relative pt-md-18 pt-19 pb-10">
        <h2 class="fs-80-rwd-48 fn-EN item-y-50 position-absolute top-0 start-0 translate-middle-y ms-3 ms-md-0">HOT ITEM</h2>
        <h3 class="fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start border-end d-inline ">精選商品</h3>
        
        <!-- swiper -->
        <swiper class="mt-12" 
        navigation
        :modules="modules"
        :breakpoints="{
          '576': {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          '1280': {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }" >
          <swiper-slide>
            <div class="card border-0 bg-secondary ">
              <router-link :to="`/product/${products['帳篷'].length > 1 ? products['帳篷'][9].id : ''  }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['帳篷'].length > 1 ? products['帳篷'][9].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover; ">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                    <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['帳篷'][9].id )">加入購物車</button>
                  </div>                          
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold" >{{  products['帳篷'].length > 1 ? products['帳篷'][9].title : '' }}</h4>
                  <p class="card-text">$ {{  products['帳篷'].length > 1 ? toCurrency( products['帳篷'][9].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['天幕'].length > 1 ? products['天幕'][7].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['天幕'].length > 1 ? products['天幕'][7].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['天幕'][7].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold">{{  products['天幕'].length > 1 ? products['天幕'][7].title : '' }}</h4>
                  <p class="card-text">$ {{  products['帳篷'].length > 1 ? toCurrency( products['天幕'][7].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['煤油燈'].length > 1 ? products['煤油燈'][3].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['煤油燈'].length > 1 ? products['煤油燈'][3].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover; ">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['煤油燈'][3].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                    <h4 class="card-title fs-19 fw-bold">{{  products['煤油燈'].length > 1 ? products['煤油燈'][3].title : '' }}</h4>
                    <p class="card-text">$ {{  products['煤油燈'].length > 1 ? toCurrency( products['煤油燈'][3].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['帳篷配件'].length > 1 ? products['帳篷配件'][0].id : ''}`">
                <div class="position-relative">
                  <img class="img-fluid "  :src="products['帳篷配件'].length > 1 ? products['帳篷配件'][0].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['帳篷配件'][0].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold">{{  products['帳篷配件'].length > 1 ? products['帳篷配件'][0].title : '' }}</h4>
                <p class="card-text">$ {{  products['帳篷配件'].length > 1 ? toCurrency( products['帳篷配件'][0].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary ">
              <router-link :to="`/product/${products['帳篷'].length > 1 ? products['帳篷'][11].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['帳篷'].length > 1 ? products['帳篷'][11].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover; ">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                    <button type="button" class="add-cart-btn" @click.prevent="addToCart( products['帳篷'][11].id)">加入購物車</button>
                  </div>                          
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold" >{{  products['帳篷'].length > 1 ? products['帳篷'][11].title : '' }}</h4>
                  <p class="card-text">$ {{  products['帳篷'].length > 1 ? toCurrency( products['帳篷'][11].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['天幕'].length > 1 ? products['天幕'][6].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['天幕'].length > 1 ? products['天幕'][6].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['天幕'][6].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold">{{  products['天幕'].length > 1 ? products['天幕'][6].title : '' }}</h4>
                  <p class="card-text">$ {{  products['帳篷'].length > 1 ? toCurrency( products['天幕'][6].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['煤油燈'].length > 1 ? products['煤油燈'][0].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['煤油燈'].length > 1 ? products['煤油燈'][0].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover; ">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['煤油燈'][0].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                    <h4 class="card-title fs-19 fw-bold">{{  products['煤油燈'].length > 1 ? products['煤油燈'][0].title : '' }}</h4>
                    <p class="card-text">$ {{  products['煤油燈'].length > 1 ? toCurrency( products['煤油燈'][0].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['帳篷配件'].length > 1 ? products['帳篷配件'][2].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid "  :src="products['帳篷配件'].length > 1 ? products['帳篷配件'][2].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['帳篷配件'][2].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold">{{  products['帳篷配件'].length > 1 ? products['帳篷配件'][2].title : '' }}</h4>
                <p class="card-text">$ {{  products['帳篷配件'].length > 1 ? toCurrency( products['帳篷配件'][2].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary ">
              <router-link :to="`/product/${products['帳篷'].length > 1 ? products['帳篷'][8].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['帳篷'].length > 1 ? products['帳篷'][8].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover; ">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                    <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['帳篷'][8].id)">加入購物車</button>
                  </div>                          
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold" >{{  products['帳篷'].length > 1 ? products['帳篷'][8].title : '' }}</h4>
                  <p class="card-text">$ {{  products['帳篷'].length > 1 ? toCurrency( products['帳篷'][8].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['天幕'].length > 1 ? products['天幕'][0].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['天幕'].length > 1 ? products['天幕'][0].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['天幕'][0].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold">{{  products['天幕'].length > 1 ? products['天幕'][0].title : '' }}</h4>
                  <p class="card-text">$ {{  products['帳篷'].length > 1 ? toCurrency( products['天幕'][0].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['煤油燈'].length > 1 ? products['煤油燈'][1].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid " :src="products['煤油燈'].length > 1 ? products['煤油燈'][1].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover; object-position:bottom ;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['煤油燈'][1].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                    <h4 class="card-title fs-19 fw-bold">{{  products['煤油燈'].length > 1 ? products['煤油燈'][1].title : '' }}</h4>
                    <p class="card-text">$ {{  products['煤油燈'].length > 1 ? toCurrency( products['煤油燈'][1].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card border-0 bg-secondary">
              <router-link :to="`/product/${products['帳篷配件'].length > 1 ? products['帳篷配件'][5].id : '' }`">
                <div class="position-relative">
                  <img class="img-fluid "  :src="products['帳篷配件'].length > 1 ? products['帳篷配件'][5].imageUrl : '' " alt=""  style="aspect-ratio: 1/1.1; object-fit: cover;">
                  <div class="swiper-btn-hover-add-cart d-flex justify-content-center align-items-center">
                      <button type="button" class="add-cart-btn" @click.prevent="addToCart(products['帳篷配件'][5].id)">加入購物車</button>
                  </div>
                </div>
                <div class="card-body p-0 pt-6">
                  <h4 class="card-title fs-19 fw-bold">{{  products['帳篷配件'].length > 1 ? products['帳篷配件'][5].title : '' }}</h4>
                <p class="card-text">$ {{  products['帳篷配件'].length > 1 ? toCurrency( products['帳篷配件'][5].price) : '' }}</p>
                </div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
  
      </div>
    </section>
  
    <!-- news -->
    <section>
      <div class="container my-14 my-md-16">
        <div class="row">
          <div class="col-md-4" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1500">
            <h2 class="fs-80-rwd-48 fn-EN mb-md-10 mb-5">NEWS</h2>
            <h3 class="fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start border-end d-inline">最新消息</h3>
          </div>
          <div class="col-md-8" data-aos-once="true" data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="200">
            <ul >
              <li class="border-bottom border-secondary hover-bg-secondary smart-animate" v-for="article in articles" :key="article.id">
                <router-link :to="`/content/${article.id}`"  class="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center py-lg-10 px-lg-5 py-5 mt-10 mt-lg-0">
                  <h4 class="fw-bold fs-8 order-2 order-lg-1 ">{{ article.title }}</h4>
                  <p class="mb-3 mb-lg-0 order-1 order-lg-2">{{ turnDate(article.create_at) }}</p>
                </router-link>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
import { mapState , mapActions } from "pinia";
import cartStore from "@/stores/cart.js";
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

const {VITE_URL, VITE_PATH} = import.meta.env   

SwiperCore.use([Navigation]);

export default {
  data() {
    return {
      articles: [],
      products:  {
        "帳篷配件": [{ }],
        "天幕": [{}],
        "帳篷": [{}],
        "煤油燈": [{}],
      },
      slidesPerView: 1,
    }
  }, 
  methods: {
    ...mapActions(cartStore ,["addToCart",]),
    turnDate(time) {
      const date = new Date(time * 1000); 
      const year = date.getFullYear(); 
      const month = date.getMonth() + 1; 
      const format_month = ("0" + month).slice(-2); 
      const day = date.getDate(); 
      const format_date = ("0" + day).slice(-2); 
      const formattedDate = `${year}-${format_month}-${format_date}`; 
      return formattedDate
    },
    //swiper商品
    getItemProducts() {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)  
        .then((res) => { 
            const products = res.data.products;
            const result = products.reduce((acc, currentObject) => {
              const category = currentObject.category;
              if (!acc[category]) {
                acc[category] = [];
              }
              acc[category].push(currentObject);
              return acc;
            }, {});
            this.products = result
        })
        .catch((err) => {
            alert(err.response.data.message);
        });
    },    
    // NEWS
    getNewsList() {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles`)  
        .then((res) => { 
          this.articles = res.data.articles
          this.lengthThreeArr()
        })
        .catch((err) => {
            alert(err.response.data.message);
        });
    },
    //文章顯示3筆
    lengthThreeArr() {            
      if (this.articles.length > 3) {
          this.articles = this.articles.slice(0, 3); 
      }
    },
    toCurrency(num){
        if (num === undefined || num === null) {
            return "";
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    //取得類別 router跳轉
    getCategoryProducts(category) {
      this.$router.push({
          name: '商品列表',
          query: { category: category }
      })                
    },
    //swiper
    updateSlidesPerView() {
      if (window.innerWidth < 768) {
        this.slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 3;
      }
    },
  },
  mounted() {
    this.getNewsList()
    this.getItemProducts()
  },
}
</script>