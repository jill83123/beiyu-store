import{_ as L,m as p,b as m,r as f,o as i,d as a,f as x,e as t,n as d,j as n,l as z,v as P,I as K,g as h,t as u,h as g,F as b,i as _,c as w,p as j}from"./index-28469c10.js";import{P as A}from"./PaginationFrontend-96b66f71.js";import{f as v}from"./favoriteStore-b52cb47a.js";import{p as y}from"./productStore-cb498607.js";const M="/MarchHare-bakery/assets/shop-banner-9db32710.mp4",N={data(){return{sortStatus:"all",cacheSearch:"",searchKeyword:""}},computed:{...p(v,["favorite"]),...p(w,["status"]),...p(y,["productList","pagination","isLoading"]),filteredProducts(){return{all:this.productList,toast:this.productList.filter(s=>s.category==="麵包"),cake:this.productList.filter(s=>s.category==="蛋糕"),cookie:this.productList.filter(s=>s.category==="餅乾"),search:this.productList.filter(s=>s.title.match(this.searchKeyword)||Array.isArray(s.tag)&&s.tag.includes(this.searchKeyword))}}},methods:{...m(v,["toggleFavorite"]),...m(w,["getCartList","addToCart"]),...m(y,["getProducts"]),changeSort(s){s==="餅乾"?this.sortStatus="cookie":s==="蛋糕"?this.sortStatus="cake":s==="麵包"?this.sortStatus="toast":this.sortStatus=s},searchProducts(){this.sortStatus="search",this.searchKeyword=this.cacheSearch},tagSearch(s){this.searchKeyword=s,this.sortStatus="search"}},mounted(){this.getCartList()},created(){this.getProducts()},components:{Pagination:A}},B=j('<div class="relative"><video class="h-[468px] w-full object-cover object-bottom" src="'+M+'" autoplay muted loop></video><div class="absolute top-0 bottom-0 left-0 right-0 h-full bg-[#ffffff60] backdrop-blur-md z-1"><div class="absolute left-0 right-0 flex flex-col justify-center h-full mx-auto text-center"><span class="text-2xl tracking-[0.2rem] text-neutral-100 opacity-70 font-montserrat mb-2 font-bold">Online Shop</span><h2 class="sm:text-[64px] font-maru text-neutral-50 font-medium tracking-widest text-5xl">線上商店</h2></div></div></div>',1),T={class:"container"},V={class:"flex flex-col items-center mt-10 mb-6 md:mt-16 md:mb-12 sm:flex-row"},F=t("div",{class:"hidden xl:block xl:w-1/3"},null,-1),I={class:"flex flex-row justify-center w-full gap-2 pl-0 list-none sm:justify-start xl:justify-center md:gap-5 xl:w-2/3"},D={role:"presentation",class:"w-full sm:w-auto"},E=t("span",{class:"mb-1 material-symbols-outlined"}," package_2 ",-1),O=t("p",null,"全部",-1),R=[E,O],U={role:"presentation",class:"w-full sm:w-auto"},q=t("span",{class:"mb-1 material-symbols-outlined"}," breakfast_dining ",-1),H=t("p",null,"麵包",-1),G=[q,H],J={role:"presentation",class:"w-full sm:w-auto"},Q=t("span",{class:"mb-1 material-symbols-outlined"}," cake ",-1),W=t("p",null,"蛋糕",-1),X=[Q,W],Y={role:"presentation",class:"w-full sm:w-auto"},Z=t("span",{class:"material-symbols-outlined"}," cookie ",-1),$=t("p",null,"餅乾",-1),tt=[Z,$],et={class:"w-full md:block sm:w-7/12 md:w-1/2 xl:w-1/3"},st={class:"relative flex flex-wrap items-stretch w-full ml-auto card-img xl:w-4/5"},ot=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),rt=[ot],lt={key:0,class:"text-center"},it=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"inline-block w-5 h-5 mr-2"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),at=t("br",null,null,-1),nt={key:1,class:"mb-7"},ct={class:"flex items-center justify-center"},dt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"inline-block w-5 h-5 mr-2"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),ut={class:"mb-6"},ht={class:"transition-opacity duration-150 ease-linear opacity-100"},pt={class:"flex flex-wrap -mx-3 gap-y-5"},mt={class:"relative flex flex-col h-full overflow-hidden border rounded-xl"},ft={class:"relative overflow-hidden card-img aspect-square"},xt=["src","alt"],gt=["onClick"],bt={key:0,class:"text-3xl text-red-400 material-symbols-outlined",style:{"font-variation-settings":`'FILL' 1,\r
                        'opsz' 24`}},_t={key:1,class:"text-3xl text-red-400 material-symbols-outlined"},wt=t("div",{class:"absolute -translate-y-1/4 -translate-x-1/2 z-[5] left-1/2 top-1/2 view-detail hidden"},[t("p",{href:"#",class:"flex items-center py-2 pl-8 pr-6 text-sm font-medium leading-normal tracking-wider text-white uppercase z-5"},[h("查看商品資訊"),t("span",{class:"ml-1 material-symbols-outlined"}," keyboard_double_arrow_right ")])],-1),vt={class:"p-5 min-h-[150px] flex flex-col justify-between grow"},yt={class:"mb-1 text-lg font-medium text-black lg:text-2xl"},kt={class:"flex gap-1 -ml-1 text-sm text-gray-400"},St=["onClick"],Ct=["onClick"],Lt={class:"flex items-center justify-between"},zt={class:"flex flex-col"},Pt={key:0,class:"px-2 ml-2 text-xs text-white rounded-full font-montserrat op bg-success"},Kt=["disabled","onClick"],jt={key:0,class:"inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mr-2",role:"status"},At=t("span",{class:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Loading... ",-1),Mt=[At];function Nt(s,r,Bt,Tt,o,l){const k=f("LoadingAnimation"),S=f("RouterLink"),C=f("Pagination");return i(),a(b,null,[x(k,{active:s.isLoading},null,8,["active"]),B,t("main",T,[t("div",V,[F,t("ul",I,[t("li",D,[t("a",{href:"#pills-all",class:d(["my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="all"||o.searchKeyword===""&&o.sortStatus==="search","bg-neutral-100":o.sortStatus!=="all"&&!(o.searchKeyword===""&&o.sortStatus==="search")}]),onClick:r[0]||(r[0]=n(e=>l.changeSort("all"),["prevent"]))},R,2)]),t("li",U,[t("a",{href:"#pills-toast",class:d(["my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="toast","bg-neutral-100":o.sortStatus!=="toast"}]),id:"pills-toast-tab",onClick:r[1]||(r[1]=n(e=>l.changeSort("toast"),["prevent"]))},G,2)]),t("li",J,[t("a",{href:"#pills-cake",class:d(["my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="cake","bg-neutral-100":o.sortStatus!=="cake"}]),onClick:r[2]||(r[2]=n(e=>l.changeSort("cake"),["prevent"]))},X,2)]),t("li",Y,[t("a",{href:"#pills-cookie",class:d(["my-2 block rounded text-center px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="cookie","bg-neutral-100":o.sortStatus!=="cookie"}]),role:"tab",onClick:r[3]||(r[3]=n(e=>l.changeSort("cookie"),["prevent"]))},tt,2)])]),t("div",et,[t("div",st,[z(t("input",{type:"search",class:"relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:border focus:border-r-0 focus:border-brown-100 focus:outline-none",placeholder:"搜尋商品","aria-label":"Search","aria-describedby":"button-addon1",onKeyup:r[4]||(r[4]=K(e=>l.searchProducts(),["enter"])),"onUpdate:modelValue":r[5]||(r[5]=e=>o.cacheSearch=e)},null,544),[[P,o.cacheSearch]]),t("button",{class:"relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800",type:"button",onClick:r[6]||(r[6]=n(e=>l.searchProducts(),["prevent"]))},rt)])])]),l.filteredProducts.search.length===0&&o.sortStatus==="search"?(i(),a("div",lt,[t("p",null,[it,h(u(o.searchKeyword),1),at,h(" 查無資料")])])):l.filteredProducts.search.length>=0&&o.sortStatus==="search"&&o.searchKeyword!==""?(i(),a("div",nt,[t("p",ct,[dt,h("「 "+u(o.searchKeyword)+" 」的搜尋結果",1)])])):g("",!0),t("div",ut,[t("div",ht,[t("ul",pt,[(i(!0),a(b,null,_(l.filteredProducts[o.sortStatus],e=>(i(),a("li",{class:"w-full px-3 productCard sm:w-1/2 lg:w-1/3 xl:w-1/4",key:e.id},[t("div",mt,[t("div",ft,[t("img",{class:"relative w-full h-full",src:e.imageUrl,alt:e.title},null,8,xt),t("button",{class:"absolute top-0 right-0 z-10 p-4",onClick:n(c=>s.toggleFavorite(e),["prevent"])},[s.favorite.some(c=>c.id===e.id)?(i(),a("span",bt," favorite ")):(i(),a("span",_t," favorite "))],8,gt),wt]),t("div",vt,[t("div",null,[t("h3",yt,u(e.title),1),t("div",kt,[t("span",{class:"z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white",onClick:n(c=>l.changeSort(e.category),["prevent"])},"# "+u(e.category),9,St),(i(!0),a(b,null,_(e.tag,c=>(i(),a("span",{class:"z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white",onClick:n(Vt=>l.tagSearch(c),["prevent"]),key:c},"# "+u(c),9,Ct))),128))])]),t("div",Lt,[t("div",zt,[t("div",null,[t("span",{class:d(["text-xl font-medium text-black-light",{"text-success":e.price!==e.origin_price}])},"NT "+u(s.$filters.currency(e.price)),3),e.price!==e.origin_price?(i(),a("span",Pt,"SALE")):g("",!0)]),t("span",{class:d(["text-xs text-gray-500 line-through",{hidden:e.price===e.origin_price}])}," NT "+u(s.$filters.currency(e.origin_price)),3)]),t("button",{type:"button",class:d(["z-10 flex items-center px-6 py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full btn-add-cart bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80",{"bg-gray-300":s.status.loadingIcon===e.id}]),disabled:s.status.loadingIcon===e.id,onClick:n(c=>s.addToCart(e,1),["prevent"])},[s.status.loadingIcon===e.id?(i(),a("div",jt,Mt)):g("",!0),h(" 加入購物車 ")],10,Kt)])]),x(S,{to:"product/"+e.id,class:"after:z-[9] after:top-0 after:left-0 after:right-0 after:absolute after:inset-0"},null,8,["to"])])]))),128))])])])]),x(C,{pages:s.pagination},null,8,["pages"])],64)}const Ot=L(N,[["render",Nt]]);export{Ot as default};
