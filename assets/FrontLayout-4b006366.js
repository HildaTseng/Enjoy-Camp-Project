import{m as C,b as v}from"./axios-71164d4a.js";import{c as b}from"./cart-fede3de7.js";import{_ as w,r as h,o as u,a9 as g,aa as s,A as a,ab as r,ac as d,O as x,ad as A,ae as n,af as k,ag as S}from"./_plugin-vue_export-helper-abac7618.js";import"./_commonjsHelpers-87174ba5.js";const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgB3ZXBcYMwEEUXJTOEm4EGSAeU4A6CK4hdQSanXHEFIRU4riC+5uYS3IFJATC6wQny1wOOAlgYm0vyLpJWYv9nJQTRX8fQTU6AEOLRMIxpWZY+Qh7H0d8hHqO7SZJkfZEAcgdIsuIu6YlhIDwldNMVdBwnwkOv6N5RP2wgME3TyPN82yuA5CGaFxoIl9GyrEmWZZ+/4urAdd056rvS5ImKooiklF+KoVJdgPkZ5jedAli8p2ojO3hP03TRDDYFgITIPUQkD4TqXpOcnb3ReRxOXj0QSoIH3VMwtKMf13t23uH+AMo8bQlgkzw6H+1a5PJbAsCn8fDqzm3fSmysoYudKlON+gYxjUfcEuD7hUZCzXUsETZmiyZoLq5LMKQsEDh+aOox5ctK0pUgeYwjvW4J8JcHkQVdCQRCdaxuMlV3SEQXAoOh6r4lwKDWz2hCGg5fgstmUHSthMiSy8X1pH64tLPK2HDwZ5vbtv2hxvgu4hjaJ/6t0r/mG3XTrG2RCkhmAAAAAElFTkSuQmCC",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGqSURBVHgB3VXbVcJAFLwJ8B9e32IFYgehArECKQEqACqADqQDtQKxAmMF4jcPtwGIM7rJ2QjJJvFL5pwlm91zZ+5O7l5E/juctI12u909HA5dsWC/36tarbZar9dBLgHP87qVSmUWhqEvxbBCQj2l1CpVAOQd13VfOZVyUFokPo1r7oL8+Q/khOc4zizBGe/AGjw6UgCwkbZcIrFetAYBX3N9oxpN4HsHAVlkSwTz6Iok+hspeg5Cnl4Mris8goSApFtDX/sgejHWpiC9Aemi0Wi8Z8Qmv8EpgHxAchBNMD71mGHtCQK38mNrOQHaQiIQzvE61kQcQ5xgvNlsaNsyiyNTwAi+Owp03aFOIpCyApKvZJWUFUB2UbnNT2wv+MOKkrICuqb93W431SLMllU1wdqo2Wz2bS2lKhbA6wcQDbbb7Qivo2i91Wr5ELq3xVsFAA9ZPtbr9ahi2A7Yaf20AHbYIwEsBuZt/A3tNYdk3XiNj2gSM7ID2mo6D9ifUrspTkGPlZSHgkDPXEgIUBneXjMLKQjeeusfjgndci/QGa2XDSd/M205L3wBhIrQKOZ50cUAAAAASUVORK5CYII=",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgB3VU9UsJAFN78zDB0DFDYGTpLuEEordTOTjkB3IB4AuQE4gk8AuQE4gmMnQUDW9JA/D5mk1kWkklipW9mJ2/fz/f+djdC/HWy8pQNkG3bD5Zl+XEcdyHylEpiv4RuttvtQillVDpAs9kM8Bkyjsgnud/vpwgSFArArB3HeUOGvihBrAirj0BSl9snES1rXhZc+XXpa8odfcO2wOheVCT4XtRqNbHdbsNUljDojIehfYrfE2fSSVqVtgjgN6Iisf/alodimOImDMq7zQJARgES8A2gRDeC/I6Za1j+SQB1zs+Co9qn1WoVbjabHkSBso+g86GbIvhYaMeZA0/5hMGAYxOcIADtmHLMiwAR+9xqtR5h92LarNfrA7YrcgiOgQJkdh7wDi1KvspmnIeh34PI0M0A9Nput3204J0LcQLdQN12T5wmliagt2iCz0htedR6AOXgJ4Y/ez/g0MFnZT9DiwZHAZgpHOd6FvqwypAafngUgISBVXomdGJi6rQd6OgtwtPLsqSoTlLdCXE2AN91lNevGIRzG5j/Bse0wkP1Xa/Xr8AW7j/vC9Y1wBemLuseFKoAoAsusFPzP5AbAKV+4Biy5Gc6YzVc170EmEc9ZkWwJTC/xL+nHyIJDWkwawHSAAAAAElFTkSuQmCC",E={data(){return{isScrollingDown:!1,headerClass:"",h1Class:"",ulClass:"",liClass:"",cartClass:"",menuClass:""}},computed:{...C(b,["carts"])},watch:{"$route.name"(){this.updateClasses()},isScrollingDown(){this.updateClasses()}},methods:{...v(b,["getCart"]),handleScroll(){this.isScrollingDown=window.scrollY>this.$refs.header.offsetHeight},getCategoryProducts(c){this.$router.push({name:"商品列表",query:{category:c}})},updateClasses(){this.$route.name!=="首頁"?this.isScrollingDown?(this.headerClass="bg-white sticky-top header-shadow transition-all-ease",this.h1Class="visible",this.ulClass="justify-content-end",this.liClass="text-primary hvr-underline-from-center pb-1",this.cartClass="scroll-header-cart-btn",this.menuClass="text-primary"):(this.headerClass="bg-white sticky-top transition-all-ease",this.h1Class="visible",this.ulClass="justify-content-end",this.liClass="text-primary hvr-underline-from-center pb-1",this.cartClass="scroll-header-cart-btn",this.menuClass="text-primary"):this.isScrollingDown?(this.headerClass="bg-white sticky-top transition-all-ease header-shadow",this.h1Class="visible",this.ulClass="justify-content-end transition-all-ease",this.liClass="text-primary hvr-underline-from-center pb-1",this.cartClass="scroll-header-cart-btn transition-all-ease",this.menuClass="text-primary transition-all-ease"):(this.headerClass="bg-transparent fixed-top transition-all-ease",this.h1Class="invisible",this.ulClass="justify-content-center transition-all-ease",this.liClass="text-white hvr-float",this.cartClass="header-cart-btn transition-all-ease",this.menuClass="text-white transition-all-ease")}},mounted(){this.updateClasses(),window.addEventListener("scroll",this.handleScroll),this.getCart(),this.$router.beforeEach((c,t,p)=>{this.$refs.offcanvas.classList.remove("show"),p()})}},Q={class:"container d-flex justify-content-between align-items-center py-5"},B=s("span",{class:"material-symbols-outlined fs-16"},"shopping_cart",-1),T={key:0,class:"badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle-x"},I={class:"d-md-none d-block d-flex align-items-center"},U={class:"btn btn-white d-flex align-items-center",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasStart","aria-controls":"offcanvasStart"},D={ref:"offcanvas",class:"offcanvas offcanvas-start d-md-none d-block border-0 overflow-auto vh-100",tabindex:"-1",id:"offcanvasStart","aria-labelledby":"offcanvasStartLabel","data-bs-scroll":"true","data-bs-backdrop":"false"},O={class:"vh-100"},j=s("div",{class:"offcanvas-header d-flex justify-content-end pt-10 pe-5"},[s("button",{type:"button",class:"btn-close opacity-100","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),F={class:"offcanvas-body py-0 d-flex flex-column justify-content-between",style:{height:"calc(100vh - 80px)"}},P={class:"fw-bold fs-6"},Y={class:"py-5 border-bottom border-secondary fs-5"},X={class:"border-bottom border-secondary"},H={class:"accordion accordion-flush",id:"accordionTitle"},N={class:"accordion-item"},V=s("h2",{class:"accordion-header",id:"flush-headingTitle"},[s("button",{class:"accordion-button collapsed fs-5 fw-bold bg-white ps-5 w-50 border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTitle","aria-expanded":"false","aria-controls":"flush-collapseTitle"}," 商品分類 ")],-1),M={id:"flush-collapseTitle",class:"accordion-collapse collapse","aria-labelledby":"flush-headingTitle","data-bs-parent":"#accordionTitle"},R={class:"accordion-body py-0",style:{width:"60%"}},L={class:"accordion accordion-flush",id:"accordionSmall"},Z={class:"accordion-item border-0"},J={class:"accordion-header"},G={class:"btn px-5 w-100 text-start py-3 lh-sm border-0",type:"button"},K={class:"accordion-item border-0"},W=s("h2",{class:"accordion-header",id:"headingOne"},[s("button",{class:"accordion-button collapsed py-3 bg-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"}," 精選系列 ")],-1),z={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},q={class:"accordion-body py-2 px-0"},$={class:"ps-4"},ss={class:"px-5"},ts={class:"px-5"},es={class:"px-5"},os={class:"accordion-item border-0"},as=s("h2",{class:"accordion-header",id:"headingTwo"},[s("button",{class:"accordion-button collapsed py-3 bg-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," 帳篷/天幕 ")],-1),ls={id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},rs={class:"accordion-body py-2 px-0"},ns={class:"ps-4"},is={class:"px-5"},ds={class:"px-5"},cs={class:"px-5"},ps={class:"accordion-item border-0"},bs=s("h2",{class:"accordion-header",id:"headingThree"},[s("button",{class:"accordion-button collapsed py-3 bg-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," 桌椅/家具 ")],-1),hs={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},us={class:"accordion-body py-2 px-0"},gs={class:"ps-4"},As={class:"px-5"},ms={class:"px-5"},fs={class:"px-5"},_s={class:"px-5"},ys={class:"px-5"},Cs={class:"accordion-item border-0"},vs=s("h2",{class:"accordion-header",id:"headingFour"},[s("button",{class:"accordion-button collapsed py-3 bg-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}," 燈具照明 ")],-1),ws={id:"collapseFour",class:"accordion-collapse collapse","aria-labelledby":"headingFour","data-bs-parent":"#accordionExample"},xs={class:"accordion-body py-2 px-0"},ks={class:"ps-4"},Ss={class:"px-5"},Es={class:"px-5"},Qs={class:"accordion-item border-0"},Bs=s("h2",{class:"accordion-header",id:"headingFive"},[s("button",{class:"accordion-button collapsed py-3 bg-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive"}," 爐具/餐具 ")],-1),Ts={id:"collapseFive",class:"accordion-collapse collapse","aria-labelledby":"headingFive","data-bs-parent":"#accordionExample"},Is={class:"accordion-body py-2 px-0"},Us={class:"ps-4"},Ds={class:"px-5"},Os={class:"px-5"},js={class:"accordion-item border-0"},Fs={class:"accordion-header"},Ps={class:"accordion-item border-0"},Ys={class:"accordion-header"},Xs={class:"accordion-item border-0"},Hs={class:"accordion-header"},Ns={class:"py-5 border-bottom border-secondary fs-5"},Vs={class:"py-5 border-bottom border-secondary fs-5"},Ms=A('<div class="ps-5 py-5"><ul class="d-flex"><li><a href="#"><img src="'+m+'" alt="facebook"></a></li><li class="mx-3"><a href="#"><img src="'+f+'" alt="instagram"></a></li><li><a href="#"><img src="'+_+'" alt="messenge"></a></li></ul><p class="my-3">service@gmail.com</p><p>星期一 ~ 星期五 09:00-18:00</p></div>',1),Rs={class:"container d-md-flex justify-content-between py-md-12 py-10 border-top border-g-40"},Ls={class:"d-flex flex-md-row flex-column"},Zs=A('<div class="text-md-end px-md-12 border-md-start order-2 order-md-1"><ul class="d-flex justify-content-md-end"><li><a href="#"><img src="'+m+'" alt="facebook"></a></li><li class="mx-3"><a href="#"><img src="'+f+'" alt="instagram"></a></li><li><a href="#"><img src="'+_+'" alt="messenge"></a></li></ul><p class="my-md-8 my-3">service@gmail.com</p><p>星期一 ~ 星期五 09:00-18:00</p></div>',1),Js={class:"ps-lg-12 my-10 my-md-0 border-md-start order-1 order-md-2"},Gs={class:"my-md-8 my-3"},Ks=s("div",{class:"bg-primary"},[s("p",{class:"text-center text-white fs-9 py-5 fw-bold"}," 此網站僅作品展示使用，無商業用途。 ")],-1);function Ws(c,t,p,zs,i,o){const l=h("router-link"),y=h("router-view");return u(),g(x,null,[s("header",{class:d(i.headerClass),ref:"header"},[s("div",Q,[s("h1",null,[a(l,{to:"/",class:d(["header-logo",i.h1Class])},{default:r(()=>[n("享露")]),_:1},8,["class"])]),s("ul",{class:d(["nav d-md-flex justify-content-end align-items-center d-md-block d-none w-100",i.ulClass])},[s("li",null,[a(l,{to:"/about",class:d(i.liClass)},{default:r(()=>[n("關於我們")]),_:1},8,["class"])]),s("li",null,[a(l,{to:"/products",class:d([i.liClass,"mx-10"])},{default:r(()=>[n("商品分類")]),_:1},8,["class"])]),s("li",null,[a(l,{to:"/news",class:d([i.liClass,"me-10"])},{default:r(()=>[n("最新消息")]),_:1},8,["class"])])],2),a(l,{to:"/cart",class:d([i.cartClass,"px-4 pt-4 pb-3 rounded-circle d-md-block d-none position-relative"])},{default:r(()=>{var e;return[B,((e=c.carts)==null?void 0:e.length)>0?(u(),g("span",T,k(c.carts.length),1)):S("",!0)]}),_:1},8,["class"]),s("nav",I,[s("button",U,[s("span",{class:d([i.menuClass,"material-symbols-outlined fs-5 bg-transparent"])},"menu",2)])])])],2),s("div",D,[s("div",O,[j,s("div",F,[s("ul",P,[s("li",Y,[a(l,{to:"/about",class:"ps-5"},{default:r(()=>[n("關於我們")]),_:1})]),s("li",X,[s("div",H,[s("div",N,[V,s("div",M,[s("div",R,[s("div",L,[s("div",Z,[s("h3",J,[s("button",G,[a(l,{to:"/products"},{default:r(()=>[n("全部商品")]),_:1})])])]),s("div",K,[W,s("div",z,[s("div",q,[s("ul",$,[s("li",ss,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[0]||(t[0]=e=>o.getCategoryProducts("家庭露營"))}," 家庭露營系列 ")]),s("li",ts,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[1]||(t[1]=e=>o.getCategoryProducts("機車露營"))}," 機車露營系列 ")]),s("li",es,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[2]||(t[2]=e=>o.getCategoryProducts("登山露營"))}," 登山露營系列 ")])])])])]),s("div",os,[as,s("div",ls,[s("div",rs,[s("ul",ns,[s("li",is,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[3]||(t[3]=e=>o.getCategoryProducts("帳篷"))}," 帳篷 ")]),s("li",ds,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[4]||(t[4]=e=>o.getCategoryProducts("天幕"))}," 天幕 ")]),s("li",cs,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[5]||(t[5]=e=>o.getCategoryProducts("帳篷配件"))}," 帳篷配件 ")])])])])]),s("div",ps,[bs,s("div",hs,[s("div",us,[s("ul",gs,[s("li",As,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[6]||(t[6]=e=>o.getCategoryProducts("戶外桌"))}," 戶外桌 ")]),s("li",ms,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[7]||(t[7]=e=>o.getCategoryProducts("露營椅"))}," 露營椅 ")]),s("li",fs,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[8]||(t[8]=e=>o.getCategoryProducts("睡袋"))}," 睡袋 ")]),s("li",_s,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[9]||(t[9]=e=>o.getCategoryProducts("床墊"))}," 床墊 ")]),s("li",ys,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[10]||(t[10]=e=>o.getCategoryProducts("枕頭"))}," 枕頭 ")])])])])]),s("div",Cs,[vs,s("div",ws,[s("div",xs,[s("ul",ks,[s("li",Ss,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[11]||(t[11]=e=>o.getCategoryProducts("燈具"))}," 燈具 ")]),s("li",Es,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[12]||(t[12]=e=>o.getCategoryProducts("煤油燈"))}," 煤油燈 ")])])])])]),s("div",Qs,[Bs,s("div",Ts,[s("div",Is,[s("ul",Us,[s("li",Ds,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[13]||(t[13]=e=>o.getCategoryProducts("爐具"))}," 爐具 ")]),s("li",Os,[s("button",{type:"button",class:"border-0 p-0 bg-transparent fs-16 fw-normal",onClick:t[14]||(t[14]=e=>o.getCategoryProducts("餐具"))}," 餐具 ")])])])])]),s("div",js,[s("h3",Fs,[s("button",{class:"btn py-3 px-5 w-100 text-start border-0",type:"button",onClick:t[15]||(t[15]=e=>o.getCategoryProducts("焚火/燒烤"))}," 焚火/燒烤 ")])]),s("div",Ps,[s("h3",Ys,[s("button",{class:"btn py-3 px-5 w-100 text-start border-0",type:"button",onClick:t[16]||(t[16]=e=>o.getCategoryProducts("保冷/水箱"))}," 保冷/水箱 ")])]),s("div",Xs,[s("h3",Hs,[s("button",{class:"btn py-3 px-5 w-100 text-start border-0",type:"button",onClick:t[17]||(t[17]=e=>o.getCategoryProducts("收納/配件"))}," 收納/配件 ")])])])])])])])]),s("li",Ns,[a(l,{to:"/news",class:"ps-5"},{default:r(()=>[n("最新消息")]),_:1})]),s("li",Vs,[a(l,{to:"/cart",class:"ps-5"},{default:r(()=>[n("購物車")]),_:1})])]),Ms])])],512),a(y),s("footer",null,[s("div",Rs,[s("div",null,[a(l,{to:"/",class:"footer-logo"})]),s("div",Ls,[Zs,s("ul",Js,[s("li",null,[a(l,{to:"/about"},{default:r(()=>[n(" - 關於我們")]),_:1})]),s("li",Gs,[a(l,{to:"/products"},{default:r(()=>[n(" - 商品分類")]),_:1})]),s("li",null,[a(l,{to:"/news"},{default:r(()=>[n(" - 最新消息")]),_:1})])])])]),Ks])],64)}const et=w(E,[["render",Ws]]);export{et as default};
