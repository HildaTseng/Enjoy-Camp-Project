<template>
    <main>
        <section>
            <div class="container">
                <nav class="my-10 d-none d-md-block" aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                      <li class="breadcrumb-item active"><router-link to="/news">最新消息</router-link></li>
                    </ol>
                </nav>
                <div class="my-10 d-flex flex-column justify-content-center align-items-center">
                    <h2 class="fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start border-end d-inline mb-10">最新消息</h2>
                    <div class="row gy-5 w-100">
                        <div class="col-md-6 col-xl-4 card-group" v-for="article in articles" :key="article.id">
                            <div class="card rounded-0  ">
                                <img class="img-fluid " :src="article.imageUrl" :alt="article.title" style="aspect-ratio: 1/1.1; object-fit: cover;">
                                <div class="card-body ">
                                    <router-link :to="`/content/${article.id}`" class="hover-opacity">
                                        <h3 class="card-title fs-6 fw-bold my-4">{{ article.title }}</h3>
                                    </router-link>
                                    <p class="card-text d-inline-block text-truncate" style="max-width: 300px;">{{ article.description }}</p>
                                </div>
                                <div class="card-footer bg-white border-0 d-flex justify-content-between">
                                    <small class="text-muted">{{ turnDate(article.create_at) }}</small>
                                    <router-link :to="`/content/${article.id}`"  class="hvr-underline-from-center">閱讀更多</router-link>
                                </div> 
                            </div>
                        </div>                    
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
            articles: [],
        }
    },    
    methods: {
        getNewsList() {
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles`)  
                .then((res) => { 
                  this.articles = res.data.articles
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
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
        getTags(tag) {
            this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles`)  
                .then((res) => {                    
                    const articles = res.data.articles;
                    const filteredArticles = articles.filter((article) => {
                        return article.tag.includes(tag)
                    });
                    this.articles = filteredArticles;                     
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });     
        },
    },    
    mounted() {
        this.$router.afterEach((to, from) => {
            if (to.path === '/news') {                
                this.getNewsList();
            }
        });
        const tag = this.$route.query.tag;
        if (tag) {
            this.getTags(tag);
        } else {
            this.getNewsList();
        }
    },
}
</script>