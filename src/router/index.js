import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          name: "首頁",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "products",
          name: "商品列表",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "product/:id",
          name: "商品詳情",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "product/:category",
          name: "商品分類",
          component: () => import("../views/front/CategoryList.vue"),
        },
        {
          path: "about",
          name: "關於我們",
          component: () => import("../views/front/AboutView.vue"),
        },
        {
          path: "cart",
          name: "購物車",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "from",
          name: "表單填寫",
          component: () => import("../views/front/FromView.vue"),
        },
        {
          path: "check-order",
          name: "確認訂單",
          component: () => import("../views/front/CheckOrder.vue"),
        },
        {
          path: "order-finish",
          name: "訂單完成",
          component: () => import("../views/front/OrderFinish.vue"),
        },
        {
          path: "news",
          name: "文章列表",
          component: () => import("../views/front/NewsList.vue"),
        },
        {
          path: "content/:id",
          name: "文章內容",
          component: () => import("../views/front/ContentView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  scrollBehavior(to) {
    if (to.fullPath) {
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
