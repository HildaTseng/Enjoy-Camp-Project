<template>
  <main>
    <section>
      <div class="container">
        <nav
          class="my-10"
          aria-label="breadcrumb"
          style="--bs-breadcrumb-divider: '>'"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/news">最新消息</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ article.title }}
            </li>
          </ol>
        </nav>

        <div class="row justify-content-between">
          <div class="col-xl-9 col-lg-8 mb-12">
            <div class="mb-lg-10 mb-5">
              <h2
                class="fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start mb-lg-10 mb-5"
              >
                {{ article.title }}
              </h2>
              <p class="text-muted">{{ turnDate(article.create_at) }}</p>
            </div>
            <img
              class="img-fluid"
              :src="article.imageUrl"
              :alt="article.title"
              style="aspect-ratio: 1/0.7; object-fit: cover"
            />
            <div
              class="mt-lg-10 mt-5 lh-lg text-lh"
              v-html="article.content"
            ></div>
          </div>
          <div class="col-xl-2 col-lg-3 my-10 my-lg-0">
            <div>
              <h4
                class="border-g-40 border-bottom border-2 text-center pb-5 fs-19"
              >
                文章標籤
              </h4>
              <div class="my-5">
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('帳篷')"
                >
                  帳篷
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('天幕')"
                >
                  天幕
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('配件')"
                >
                  配件
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('睡袋')"
                >
                  睡袋
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('家庭露營')"
                >
                  家庭露營
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('機車露營')"
                >
                  機車露營
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('戶外家具')"
                >
                  戶外家具
                </button>
                <button
                  type="button"
                  class="btn btn-outline-g-60 badge-hover-text-white badge rounded-pill fs-16 fw-normal m-1"
                  @click="getTags('野炊系列')"
                >
                  野炊系列
                </button>
              </div>
            </div>
            <div class="mt-10">
              <h4
                class="border-g-40 border-bottom border-2 text-center pb-5 fs-19"
              >
                最新文章
              </h4>
              <div class="my-5">
                <ul>
                  <li>
                    <router-link
                      :to="`/content/${article.id}`"
                      class="hover-text-primary text-truncate d-block my-3"
                      v-for="article in articles"
                      :key="article.id"
                      >{{ article.title }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      article: {},
      articles: [],
    };
  },
  watch: {
    "$route.params.id": {
      handler(newId) {
        this.id = newId;
        if (this.id) {
          this.getContent();
        }
      },
    },
  },
  methods: {
    getContent() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          this.article = res.data.article;
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
      return formattedDate;
    },
    getNewsList() {
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/articles`)
        .then((res) => {
          this.articles = res.data.articles;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getTags(tag) {
      this.$router.push({
        name: "文章列表",
        query: { tag: tag },
      });
    },
  },
  mounted() {
    this.getContent();
    this.getNewsList();
  },
};
</script>
