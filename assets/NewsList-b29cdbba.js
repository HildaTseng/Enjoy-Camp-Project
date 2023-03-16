import{L as v}from"./index-13ab3c4e.js";import{_ as y,r as g,o as _,a9 as h,aa as t,A as n,ab as r,O as w,ah as x,ae as m,af as u}from"./_plugin-vue_export-helper-abac7618.js";import"./_commonjsHelpers-87174ba5.js";import"./runtime-dom.esm-bundler-5b269b82.js";const{VITE_URL:p,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"hilda88",BASE_URL:"/Enjoy-Camp-Project/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{articles:[],isLoading:!1}},components:{Loading:v},methods:{getNewsList(){this.isLoading=!0,this.$http.get(`${p}/v2/api/${b}/articles`).then(s=>{this.isLoading=!1,this.articles=s.data.articles}).catch(s=>{alert(s.response.data.message)})},turnDate(s){const e=new Date(s*1e3),c=e.getFullYear(),a=("0"+(e.getMonth()+1)).slice(-2),l=("0"+e.getDate()).slice(-2);return`${c}-${a}-${l}`},getTags(s){this.isLoading=!0,this.$http.get(`${p}/v2/api/${b}/articles`).then(e=>{this.isLoading=!1;const d=e.data.articles.filter(a=>a.tag.includes(s));this.articles=d}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.$router.afterEach(e=>{e.path==="/news"&&this.getNewsList()});const s=this.$route.query.tag;s?this.getTags(s):this.getNewsList()}},$=t("div",{class:"loadingio-spinner-rolling-gpnxmojb0d"},[t("div",{class:"ldio-swt2qk0614"},[t("div")])],-1),D={class:"container"},E={class:"my-10 d-none d-md-block","aria-label":"breadcrumb",style:{"--bs-breadcrumb-divider":"'>'"}},T={class:"breadcrumb"},k={class:"breadcrumb-item"},V={class:"breadcrumb-item active"},N={class:"my-10 d-flex flex-column justify-content-center align-items-center"},j=t("h2",{class:"fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start border-end d-inline mb-10"}," 最新消息 ",-1),A={class:"row gy-5 w-100"},U={class:"card rounded-0"},B=["src","alt"],I={class:"card-body"},P={class:"card-title fs-6 fw-bold my-4"},R={class:"card-text d-inline-block text-truncate",style:{"max-width":"300px"}},C={class:"card-footer bg-white border-0 d-flex justify-content-between"},O={class:"text-muted"};function q(s,e,c,d,a,f){const l=g("loading"),i=g("router-link");return _(),h("main",null,[t("section",null,[n(l,{active:a.isLoading,"onUpdate:active":e[0]||(e[0]=o=>a.isLoading=o)},{default:r(()=>[$]),_:1},8,["active"]),t("div",D,[t("nav",E,[t("ol",T,[t("li",k,[n(i,{to:"/"},{default:r(()=>[m("首頁")]),_:1})]),t("li",V,[n(i,{to:"/news"},{default:r(()=>[m("最新消息")]),_:1})])])]),t("div",N,[j,t("div",A,[(_(!0),h(w,null,x(a.articles,o=>(_(),h("div",{class:"col-md-6 col-xl-4 card-group",key:o.id},[t("div",U,[t("img",{class:"img-fluid",src:o.imageUrl,alt:o.title,style:{"aspect-ratio":"1/1.1","object-fit":"cover"}},null,8,B),t("div",I,[n(i,{to:`/content/${o.id}`,class:"hover-opacity"},{default:r(()=>[t("h3",P,u(o.title),1)]),_:2},1032,["to"]),t("p",R,u(o.description),1)]),t("div",C,[t("small",O,u(f.turnDate(o.create_at)),1),n(i,{to:`/content/${o.id}`,class:"hvr-underline-from-center"},{default:r(()=>[m("閱讀更多")]),_:2},1032,["to"])])])]))),128))])])])])])}const Y=y(L,[["render",q]]);export{Y as default};