import{_ as b,r as g,o as l,W as _,X as t,Y as n,Z as i,a0 as y,a5 as v,a2 as h,a3 as u}from"./_plugin-vue_export-helper-a32a19e0.js";const{VITE_URL:f,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"hilda88",BASE_URL:"/Enjoy-Camp-Project/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{articles:[]}},methods:{getNewsList(){this.$http.get(`${f}/v2/api/${p}/articles`).then(e=>{this.articles=e.data.articles}).catch(e=>{alert(e.response.data.message)})},turnDate(e){const s=new Date(e*1e3),c=s.getFullYear(),r=("0"+(s.getMonth()+1)).slice(-2),o=("0"+s.getDate()).slice(-2);return`${c}-${r}-${o}`},getTags(e){this.$http.get(`${f}/v2/api/${p}/articles`).then(s=>{const d=s.data.articles.filter(r=>r.tag.includes(e));this.articles=d}).catch(s=>{alert(s.response.data.message)})}},mounted(){this.$router.afterEach((s,c)=>{s.path==="/news"&&this.getNewsList()});const e=this.$route.query.tag;e?this.getTags(e):this.getNewsList()}},x={class:"container"},$={class:"my-10 d-none d-md-block","aria-label":"breadcrumb",style:{"--bs-breadcrumb-divider":"'>'"}},D={class:"breadcrumb"},E={class:"breadcrumb-item"},T={class:"breadcrumb-item active"},L={class:"my-10 d-flex flex-column justify-content-center align-items-center"},V=t("h2",{class:"fs-28-rwd-19 fw-bold px-5 border-primary border-2 border-start border-end d-inline mb-10"},"最新消息",-1),k={class:"row gy-5 w-100"},N={class:"card rounded-0"},j=["src","alt"],A={class:"card-body"},B={class:"card-title fs-6 fw-bold my-4"},I={class:"card-text d-inline-block text-truncate",style:{"max-width":"300px"}},P={class:"card-footer bg-white border-0 d-flex justify-content-between"},R={class:"text-muted"};function U(e,s,c,d,r,m){const o=g("router-link");return l(),_("main",null,[t("section",null,[t("div",x,[t("nav",$,[t("ol",D,[t("li",E,[n(o,{to:"/"},{default:i(()=>[h("首頁")]),_:1})]),t("li",T,[n(o,{to:"/news"},{default:i(()=>[h("最新消息")]),_:1})])])]),t("div",L,[V,t("div",k,[(l(!0),_(y,null,v(r.articles,a=>(l(),_("div",{class:"col-md-6 col-xl-4 card-group",key:a.id},[t("div",N,[t("img",{class:"img-fluid",src:a.imageUrl,alt:a.title,style:{"aspect-ratio":"1/1.1","object-fit":"cover"}},null,8,j),t("div",A,[n(o,{to:`/content/${a.id}`,class:"hover-opacity"},{default:i(()=>[t("h3",B,u(a.title),1)]),_:2},1032,["to"]),t("p",I,u(a.description),1)]),t("div",P,[t("small",R,u(m.turnDate(a.create_at)),1),n(o,{to:`/content/${a.id}`,class:"hvr-underline-from-center"},{default:i(()=>[h("閱讀更多")]),_:2},1032,["to"])])])]))),128))])])])])])}const F=b(w,[["render",U]]);export{F as default};
