import{a as k,Z as D}from"./tw-elements.es.min-5f64f089.js";import{_ as C,m as N,a as L,b as T,r as h,o as r,d as n,f as p,e as t,w as f,k as g,n as m,j as l,F as _,i as I,t as u,h as x,g as a,l as S,v as P,c as v,p as z}from"./index-28469c10.js";import{f as j}from"./favoriteStore-b52cb47a.js";const B={data(){return{productDetails:{},currentImages:"",currentImageOpacity:1,buyNum:1,cachePrice:0,state:{isLoading:!1,loadingIcon:""}}},computed:{...N(v,["cartList","cartTotalPrice","status","currentStep"]),...L(j)},methods:{...T(v,["delCartItem","updateCart","getCartList","updateCurrentStep","addToCart"]),getProductDetails(){const{id:i}=this.$route.params,s=`https://vue3-course-api.hexschool.io/api/yu-api/product/${i}`;this.$http.get(s).then(c=>{this.state.isLoading=!0,c.data.success&&(this.productDetails=c.data.product,this.currentImages=c.data.product.imageUrl,this.cachePrice=c.data.product.price,this.state.isLoading=!1)})},changeCurrentImage(i){this.currentImageOpacity=0,setTimeout(()=>{this.currentImages=i,this.currentImageOpacity=1},150)},updateBuyNum(i){i===1||i===-1?this.buyNum+=i:i<=0&&(this.buyNum=1,this.cachePrice=this.productDetails.price),this.cachePrice=this.productDetails.price,this.cachePrice*=this.buyNum}},mounted(){k({Collapse:D})},created(){this.getProductDetails(),this.getCartList()}},M={class:"container mb-16 mt-28"},U={class:"flex justify-center"},V={class:"w-4/12 pr-10"},A=t("div",{class:"flex items-center"},[t("span",{class:"mr-1 material-symbols-outlined"}," keyboard_double_arrow_left "),a("返回商品列表 ")],-1),O=["src","alt"],q={class:"flex gap-3"},F={href:"#"},H=["src","alt"],E=["src","alt","onClick"],Z={class:"w-5/12 pt-10"},R={class:"flex mb-2"},G={class:"inline-block w-11/12 text-4xl font-bold tracking-wide text-black font-noto-serif"},J={class:"inline-block"},K={key:0,class:"self-end px-2 ml-2 text-xs text-white rounded-full font-montserrat bg-success"},Q={key:0,class:"align-middle text-danger material-symbols-outlined",style:{"font-variation-settings":`'FILL' 1,\r
                  'opsz' 24`}},W={key:1,class:"align-middle text-brown-100 material-symbols-outlined"},X={class:"mb-3 text-black-light"},Y={key:0,class:"font-bold text-success"},$=["innerHTML"],tt=z('<button class="group relative pb-1 mb-1 flex w-full items-center rounded-none border-0 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&amp;:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><h3 class="font-noto-serif font-medium text-xl relative inline-block after:-z-[1] after:-left-1 after:-right-1 mb-2 after:bg-warning after:absolute after:top-1/2 after:bottom-0">詳細內容</h3><span class="ml-2 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></button>',1),et={id:"collapseTwo",class:"!visible hidden mb-4 mt-2","data-te-collapse-item":"","aria-labelledby":"headingTwo","data-te-parent":"#accordionExample"},st=["innerHTML"],ot={class:"mb-6"},it=t("h3",{class:"font-noto-serif font-medium text-xl relative inline-block after:-z-[1] after:-left-1 after:-right-1 mb-4 after:bg-warning after:absolute after:top-1/2 after:bottom-0"},"購買數量",-1),rt={class:"flex items-center"},nt=["disabled"],at=t("span",{class:"hidden pl-2 text-sm text-gray-400 sm:inline-block"}," 個",-1),lt=t("span",{class:"pl-1 text-2xl align-bottom text-brown-300 material-symbols-outlined"},"add",-1),ct=[lt],dt={class:"flex justify-between"},ut={class:"self-end text-sm"},pt={class:"mx-1 text-lg font-bold tracking-wider font-noto-serif"},mt={class:"flex gap-4"},bt={class:"px-5 py-4 mb-4 border-2 border-gray-300 border-dotted rounded-lg"},ft=t("p",{class:"mb-2"},"消費滿 NT $1,500，享有免運費優惠",-1),ht={class:"flex justify-between"},gt=t("p",{class:"text-sm text-black-light"},[a("[付款] 信用卡(一次付清)、貨到付款、ATM 轉帳"),t("br"),a("[運送] 黑貓低溫宅配、工作室自取")],-1),_t=t("span",{class:"mr-1 text-xl align-middle rotate-45 material-symbols-outlined text-info"}," link ",-1),xt=t("p",{class:"inline-block font-bold leading-[22px] border-b border-info text-info"},"常見問題",-1),vt=t("div",{class:"container"},[t("h3",{class:"text-[34px] font-medium text-center text-black font-maru mb-9"},"更多商品⋯")],-1);function yt(i,s,c,wt,e,d){const y=h("LoadingAnimation"),b=h("RouterLink");return r(),n(_,null,[p(y,{active:e.state.isLoading},null,8,["active"]),t("div",M,[t("div",U,[t("div",V,[p(b,{to:"/shop",class:"inline-block mb-4"},{default:f(()=>[A]),_:1}),t("img",{src:e.currentImages,alt:e.productDetails.title,class:"object-cover w-full mb-4 rounded-lg aspect-square",style:g({opacity:e.currentImageOpacity,transition:"opacity 0.15s"})},null,12,O),t("div",q,[t("a",F,[t("img",{src:e.productDetails.imageUrl,alt:e.productDetails.title+1,class:m(["w-[100px] object-cover aspect-square rounded-lg",{"opacity-50":e.currentImages===e.productDetails.imageUrl}]),onClick:s[0]||(s[0]=l(o=>d.changeCurrentImage(e.productDetails.imageUrl),["prevent"]))},null,10,H)]),(r(!0),n(_,null,I(e.productDetails.imagesUrl,(o,w)=>(r(),n("a",{href:"#",key:o},[t("img",{src:o,alt:e.productDetails.title+(w+2),class:m(["w-[100px] object-cover aspect-square rounded-lg",{"opacity-50":e.currentImages===o}]),onClick:l(kt=>d.changeCurrentImage(o),["prevent"])},null,10,E)]))),128))])]),t("div",Z,[t("div",R,[t("div",G,[t("h2",J,u(e.productDetails.title),1),e.productDetails.origin_price!==e.productDetails.price?(r(),n("span",K,"SALE")):x("",!0)]),t("button",{class:m(["border-2 rounded-full w-[40px] h-[40px] ml-auto inline-block border-brown-100",i.favoriteStore.favorite.some(o=>o.id===e.productDetails.id)?"border-danger":"border-brown-100"]),title:"加入收藏",onClick:s[1]||(s[1]=l(o=>i.favoriteStore.toggleFavorite(e.productDetails),["prevent"]))},[i.favoriteStore.favorite.some(o=>o.id===e.productDetails.id)?(r(),n("span",Q," favorite ")):(r(),n("span",W," favorite "))],2)]),t("p",X,[t("span",{class:m({"line-through mr-2 text-gray-400":e.productDetails.origin_price!==e.productDetails.price})},"NT "+u(e.productDetails.origin_price)+" 元",3),e.productDetails.origin_price!==e.productDetails.price?(r(),n("span",Y,"NT "+u(e.productDetails.price)+" 元",1)):x("",!0),a(" / "+u(e.productDetails.unit),1)]),t("div",{class:"mb-4",innerHTML:e.productDetails.description},null,8,$),t("div",null,[tt,t("div",et,[t("div",{innerHTML:e.productDetails.content,class:"ingredients-list !visible",id:"collapseOne","data-te-collapse-item":"","data-te-collapse-show":""},null,8,st)])]),t("div",ot,[it,t("div",rt,[t("button",{class:"pr-1",onClick:s[2]||(s[2]=l(o=>d.updateBuyNum(-1),["prevent"])),disabled:e.buyNum===1},[t("span",{class:"text-2xl align-bottom text-brown-300 material-symbols-outlined",style:g({color:e.buyNum===1?"#d1d5db":""})},"remove",4)],8,nt),S(t("input",{type:"number",min:"1",class:"outline-none focus:outline-none max-w-[60px] bg-transparent border text-center pt-[1px] pb-[2px]","onUpdate:modelValue":s[3]||(s[3]=o=>e.buyNum=o),onChange:s[4]||(s[4]=o=>d.updateBuyNum(e.buyNum))},null,544),[[P,e.buyNum]]),at,t("button",{onClick:s[5]||(s[5]=l(o=>d.updateBuyNum(1),["prevent"]))},ct)]),t("div",dt,[t("p",ut,[a("總計 "),t("span",pt,u(e.cachePrice),1),a(" 元 ")]),t("div",mt,[p(b,{to:"/checkout/cart",type:"button",class:"z-10 flex items-center px-8 py-2 text-sm font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border rounded-full border-brown-300 focus:outline-none focus:ring-1 hover:opacity-80 text-brown-300"},{default:f(()=>[a("前往結帳")]),_:1}),t("button",{type:"button",class:"z-10 flex items-center px-8 py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80",onClick:s[6]||(s[6]=l(o=>i.addToCart(e.productDetails,e.buyNum),["prevent"]))},"加入購物車 ")])])]),t("div",bt,[ft,t("div",ht,[gt,p(b,{to:"/faq",target:"_blank",class:"self-end text-sm"},{default:f(()=>[_t,xt]),_:1})])])])])]),vt],64)}const Lt=C(B,[["render",yt]]);export{Lt as default};
