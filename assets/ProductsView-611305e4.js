import{b as k}from"./axios-71164d4a.js";import{c as x}from"./cart-fede3de7.js";import{L as w}from"./index-13ab3c4e.js";import{w as d}from"./runtime-dom.esm-bundler-5b269b82.js";import{_ as T,r as h,o as n,a9 as r,aa as t,A as b,ab as _,af as c,O as v,ah as y,ac as p,ag as L}from"./_plugin-vue_export-helper-abac7618.js";import"./_commonjsHelpers-87174ba5.js";const{VITE_URL:u,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"hilda88",BASE_URL:"/Enjoy-Camp-Project/",MODE:"production",DEV:!1,PROD:!0},F={data(){return{products:[],pages:{},title:"全部商品",isLoading:!1}},components:{Loading:w},methods:{...k(x,["addToCart"]),getProducts(o=1){this.isLoading=!0,this.$http.get(`${u}/v2/api/${g}/products/?page=${o}`).then(s=>{this.isLoading=!1,this.products=s.data.products,this.pages=s.data.pagination,this.title="全部商品"}).catch(s=>{alert(s.response.data.message)})},toCurrency(o){return o==null?"":o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getCategoryProducts(o,s=1){this.isLoading=!0,this.$http.get(`${u}/v2/api/${g}/products?page=${s}&category=${o}`).then(l=>{this.isLoading=!1,this.products=l.data.products,this.pages=l.data.pagination,this.title=`${o}`}).catch(l=>{alert(l.response.data.message)})},getCategoryCampModeProducts(o,s=1){this.isLoading=!0,this.$http.get(`${u}/v2/api/${g}/products/?page=${s}`).then(l=>{this.isLoading=!1;const i=l.data.products.filter(a=>a.category_campMode.includes(o));this.products=i,this.pages=l.data.pagination,this.title=`${o}系列`}).catch(l=>{alert(l.response.data.message)})},changeSelect(){event.target.value==="最新上架"?this.getProducts():event.target.value==="價格高至低排序"?this.products=this.products.sort((o,s)=>s.price-o.price):event.target.value==="價格低至高排序"&&(this.products=this.products.sort((o,s)=>o.price-s.price))},getCategoryInRoute(o){o==="家庭露營"||o==="機車露營"||o==="登山露營"?this.getCategoryCampModeProducts(o):o!=="家庭露營"||o!=="機車露營"||o!=="登山露營"?this.getCategoryProducts(o):this.getProducts()},updatePage(o){this.title==="全部商品"?this.getProducts(o):this.title.endsWith("系列")?this.getCategoryCampModeProducts(this.title.slice(0,-2),o):this.getCategoryProducts(this.title,o)}},mounted(){const o=this.$route.query.category;o?this.getCategoryInRoute(o):this.getProducts(),this.$router.afterEach(s=>{s.query.category?this.getCategoryInRoute(s.query.category):this.getProducts()})}},E={class:"container my-lg-12 my-10"},V=t("div",{class:"loadingio-spinner-rolling-gpnxmojb0d"},[t("div",{class:"ldio-swt2qk0614"},[t("div")])],-1),M={class:"row"},O={class:"col-lg-3 d-none d-lg-block"},$={class:"accordion accordion-flush",id:"accordionLarge"},j={class:"accordion-item border-bottom"},I={class:"accordion-header"},R={class:"accordion-item"},S=t("h3",{class:"accordion-header",id:"flush-headingOne"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"}," 精選系列 ")],-1),A={id:"flush-collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"flush-headingOne"},B={class:"accordion-body pt-0"},U={class:"ps-4"},q={class:"p-3"},D={class:"p-3"},N={class:"p-3"},H={class:"accordion-item"},z=t("h3",{class:"accordion-header",id:"flush-headingTwo"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"}," 帳篷/天幕 ")],-1),W={id:"flush-collapseTwo",class:"accordion-collapse collapse show","aria-labelledby":"flush-headingTwo"},G={class:"accordion-body pt-0"},J={class:"ps-4"},K={class:"p-3"},Q={class:"p-3"},X={class:"p-3"},Y={class:"accordion-item"},Z=t("h3",{class:"accordion-header",id:"flush-headingThree"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"}," 桌椅/家具 ")],-1),tt={id:"flush-collapseThree",class:"accordion-collapse collapse show","aria-labelledby":"flush-headingThree"},st={class:"accordion-body pt-0"},et={class:"ps-4"},ot={class:"p-3"},at={class:"p-3"},it={class:"p-3"},lt={class:"p-3"},nt={class:"p-3"},rt={class:"accordion-item"},dt=t("h3",{class:"accordion-header",id:"flush-headingFour"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseFour","aria-expanded":"false","aria-controls":"flush-collapseFour"}," 燈具照明 ")],-1),ct={id:"flush-collapseFour",class:"accordion-collapse collapse show","aria-labelledby":"flush-headingFour"},pt={class:"accordion-body pt-0"},ut={class:"ps-4"},gt={class:"p-3"},ht={class:"p-3"},bt={class:"accordion-item"},_t=t("h3",{class:"accordion-header",id:"flush-headingFive"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseFive","aria-expanded":"false","aria-controls":"flush-collapseFive"}," 爐具/餐具 ")],-1),vt={id:"flush-collapseFive",class:"accordion-collapse collapse show","aria-labelledby":"flush-headingFive"},yt={class:"accordion-body pt-0"},ft={class:"ps-4"},Ct={class:"p-3"},mt={class:"p-3"},Pt={class:"accordion-item"},kt={class:"accordion-header"},xt={class:"accordion-item"},wt={class:"accordion-header"},Tt={class:"accordion-item border-bottom"},Lt={class:"accordion-header"},Ft={class:"col-lg-9"},Et={class:"d-lg-flex flex-lg-row justify-content-lg-between align-items-center mb-10"},Vt={class:"px-5 mb-5 border-primary border-2 border-start fs-5"},Mt=t("option",{value:"最新上架",selected:""},"最新上架",-1),Ot=t("option",{value:"價格高至低排序"},"價格高至低排序",-1),$t=t("option",{value:"價格低至高排序"},"價格低至高排序",-1),jt=[Mt,Ot,$t],It={class:"row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5"},Rt={class:"card rounded-0"},St={class:"position-relative"},At=["src","alt"],Bt={class:"btn-hover-add-cart d-flex justify-content-center align-items-center"},Ut=["onClick"],qt={class:"card-body py-5 px-3 text-center border-0 d-flex flex-column"},Dt={class:"card-title fs-19 fw-bold mb-auto"},Nt={class:"card-text"},Ht={key:0,"aria-label":"Page navigation"},zt={class:"pagination my-10 d-flex justify-content-center"},Wt=t("span",{"aria-hidden":"true"},"«",-1),Gt=[Wt],Jt=["onClick"],Kt=t("span",{"aria-hidden":"true"},"»",-1),Qt=[Kt];function Xt(o,s,l,f,i,a){const C=h("loading"),m=h("router-link");return n(),r("main",null,[t("section",null,[t("div",E,[b(C,{active:i.isLoading,"onUpdate:active":s[0]||(s[0]=e=>i.isLoading=e)},{default:_(()=>[V]),_:1},8,["active"]),t("div",M,[t("div",O,[t("div",$,[t("div",j,[t("h3",I,[t("button",{class:"btn px-5 pt-0 pb-4 w-100 text-start border-0",type:"button",onClick:s[1]||(s[1]=(...e)=>a.getProducts&&a.getProducts(...e))}," 全部商品 ")])]),t("div",R,[S,t("div",A,[t("div",B,[t("ul",U,[t("li",q,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[2]||(s[2]=e=>a.getCategoryCampModeProducts("家庭露營"))}," 家庭露營系列 ")]),t("li",D,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[3]||(s[3]=e=>a.getCategoryCampModeProducts("機車露營"))}," 機車露營系列 ")]),t("li",N,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[4]||(s[4]=e=>a.getCategoryCampModeProducts("登山露營"))}," 登山露營系列 ")])])])])]),t("div",H,[z,t("div",W,[t("div",G,[t("ul",J,[t("li",K,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[5]||(s[5]=e=>a.getCategoryProducts("帳篷"))}," 帳篷 ")]),t("li",Q,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[6]||(s[6]=e=>a.getCategoryProducts("天幕"))}," 天幕 ")]),t("li",X,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[7]||(s[7]=e=>a.getCategoryProducts("帳篷配件"))}," 帳篷配件 ")])])])])]),t("div",Y,[Z,t("div",tt,[t("div",st,[t("ul",et,[t("li",ot,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[8]||(s[8]=e=>a.getCategoryProducts("戶外桌"))}," 戶外桌 ")]),t("li",at,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[9]||(s[9]=e=>a.getCategoryProducts("露營椅"))}," 露營椅 ")]),t("li",it,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[10]||(s[10]=e=>a.getCategoryProducts("睡袋"))}," 睡袋 ")]),t("li",lt,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[11]||(s[11]=e=>a.getCategoryProducts("床墊"))}," 床墊 ")]),t("li",nt,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[12]||(s[12]=e=>a.getCategoryProducts("枕頭"))}," 枕頭 ")])])])])]),t("div",rt,[dt,t("div",ct,[t("div",pt,[t("ul",ut,[t("li",gt,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[13]||(s[13]=e=>a.getCategoryProducts("燈具"))}," 燈具 ")]),t("li",ht,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[14]||(s[14]=e=>a.getCategoryProducts("煤油燈"))}," 煤油燈 ")])])])])]),t("div",bt,[_t,t("div",vt,[t("div",yt,[t("ul",ft,[t("li",Ct,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[15]||(s[15]=e=>a.getCategoryProducts("爐具"))}," 爐具 ")]),t("li",mt,[t("button",{type:"button",class:"border-0 bg-transparent p-0",onClick:s[16]||(s[16]=e=>a.getCategoryProducts("餐具"))}," 餐具 ")])])])])]),t("div",Pt,[t("h3",kt,[t("button",{class:"btn py-4 px-5 w-100 text-start border-0",type:"button",onClick:s[17]||(s[17]=e=>a.getCategoryProducts("焚火/燒烤"))}," 焚火/燒烤 ")])]),t("div",xt,[t("h3",wt,[t("button",{class:"btn py-4 px-5 w-100 text-start border-0",type:"button",onClick:s[18]||(s[18]=e=>a.getCategoryProducts("保冷/水箱"))}," 保冷/水箱 ")])]),t("div",Tt,[t("h3",Lt,[t("button",{class:"btn py-4 px-5 w-100 text-start border-0",type:"button",onClick:s[19]||(s[19]=e=>a.getCategoryProducts("收納/配件"))}," 收納/配件 ")])])])]),t("div",Ft,[t("div",Et,[t("h2",Vt,c(i.title),1),t("select",{class:"form-select rounded-0 w-auto",onChange:s[20]||(s[20]=(...e)=>a.changeSelect&&a.changeSelect(...e))},jt,32)]),t("div",It,[(n(!0),r(v,null,y(i.products,e=>(n(),r("div",{class:"col card-group",key:e.id},[t("div",Rt,[b(m,{to:`/product/${e.id}`},{default:_(()=>[t("div",St,[t("img",{class:"img-fluid",src:e.imageUrl,alt:e.title,style:{"aspect-ratio":"1/1.1","object-fit":"cover"}},null,8,At),t("div",Bt,[t("button",{type:"button",class:"add-cart-btn",onClick:d(P=>o.addToCart(e.id),["prevent"])}," 加入購物車 ",8,Ut)])]),t("div",qt,[t("h4",Dt,c(e.title),1),t("p",Nt,"$ "+c(a.toCurrency(e.price)),1)])]),_:2},1032,["to"])])]))),128))]),i.pages.total_pages>1?(n(),r("nav",Ht,[t("ul",zt,[t("li",{class:p(["page-item rounded-0",{disabled:!i.pages.has_pre}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[21]||(s[21]=d(e=>a.updatePage(i.pages.current_page-1),["prevent"]))},Gt)],2),(n(!0),r(v,null,y(i.pages.total_pages,e=>(n(),r("li",{class:p(["page-item",{active:e===i.pages.current_page}]),key:e+"page"},[t("a",{class:"page-link",href:"#",onClick:d(P=>a.updatePage(e),["prevent"])},c(e),9,Jt)],2))),128)),t("li",{class:p(["page-item",{disabled:!i.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[22]||(s[22]=d(e=>a.updatePage(i.pages.current_page+1),["prevent"]))},Qt)],2)])])):L("",!0)])])])])])}const as=T(F,[["render",Xt]]);export{as as default};
