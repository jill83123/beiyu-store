import{_ as z,m as f,b as g,r as m,o as l,c as i,e as x,d as t,n as d,f as n,k as P,v as K,u as M,g as p,t as u,h,F as b,i as _,s as j,q as A}from"./index-da4ca6a0.js";import{c as w}from"./cartStore-0768b281.js";import{f as v}from"./favoriteStore-d889dbea.js";import{p as y}from"./productStore-245cd2e0.js";import{P as B}from"./PaginationFrontend-eafa9a7f.js";import{C as N}from"./CurrentCouponModal-f23f58c4.js";import"./swalMixin-4fc7cb71.js";import"./tw-elements.es.min-5f64f089.js";import"./modalMixin-e43cb9db.js";const T="/MarchHare-bakery/assets/shop-banner-9db32710.mp4",V={data(){return{sortStatus:"all",cacheSearch:"",searchKeyword:"",firstLoad:!1}},computed:{...f(v,["favorite"]),...f(w,["status"]),...f(y,["productList","pagination","isLoading"]),filteredProducts(){return{all:this.productList,toast:this.productList.filter(s=>s.category==="麵包"),cake:this.productList.filter(s=>s.category==="蛋糕"),cookie:this.productList.filter(s=>s.category==="餅乾"),search:this.productList.filter(s=>s.title.match(this.searchKeyword)||Array.isArray(s.tag)&&s.tag.includes(this.searchKeyword)||s.category.includes(this.searchKeyword))}}},watch:{sortStatus:{handler(){this.sortStatus!=="all"?this.getAllProducts():this.firstLoad&&this.getProducts(1)},immediate:!0}},methods:{...g(v,["toggleFavorite"]),...g(w,["getCartList","addToCart"]),...g(y,["getProducts","getAllProducts"]),changeSort(s){s==="餅乾"?this.sortStatus="cookie":s==="蛋糕"?this.sortStatus="cake":s==="麵包"?this.sortStatus="toast":this.sortStatus=s},searchProducts(){this.sortStatus="search",this.searchKeyword=this.cacheSearch},tagSearch(s){this.searchKeyword=s,this.sortStatus="search"}},mounted(){this.getCartList(),this.getProducts(),this.firstLoad=!0},components:{Pagination:B,CurrentCouponModal:N}},F=A('<header class="relative"><video class="h-[468px] w-full object-cover object-bottom" src="'+T+'" autoplay muted loop></video><div class="absolute top-0 bottom-0 left-0 right-0 h-full bg-[#ffffff60] backdrop-blur-md z-1"><div class="absolute left-0 right-0 flex flex-col justify-center h-full mx-auto text-center"><h3 class="text-2xl tracking-[0.2rem] text-neutral-100 opacity-70 font-montserrat mb-2 font-bold">Online Shop </h3><h2 class="md:text-[64px] font-maru text-neutral-50 font-medium tracking-widest text-5xl">線上商店</h2></div></div></header>',1),I={class:"container"},q={class:"flex flex-col items-center mt-10 mb-6 md:mt-16 md:mb-12 sm:flex-row"},D=t("div",{class:"hidden xl:block xl:w-1/3"},null,-1),E={class:"flex flex-row justify-center w-full gap-2 pl-0 list-none sm:justify-start xl:justify-center md:gap-5 xl:w-2/3"},O={role:"presentation",class:"w-full sm:w-auto"},R=t("span",{class:"mb-1 material-symbols-outlined"}," package_2 ",-1),U=t("p",null,"全部",-1),H=[R,U],G={role:"presentation",class:"w-full sm:w-auto"},J=t("span",{class:"mb-1 material-symbols-outlined"}," breakfast_dining ",-1),Q=t("p",null,"麵包",-1),W=[J,Q],X={role:"presentation",class:"w-full sm:w-auto"},Y=t("span",{class:"mb-1 material-symbols-outlined"}," cake ",-1),Z=t("p",null,"蛋糕",-1),$=[Y,Z],tt={role:"presentation",class:"w-full sm:w-auto"},et=t("span",{class:"material-symbols-outlined"}," cookie ",-1),st=t("p",null,"餅乾",-1),ot=[et,st],rt={class:"w-full md:block sm:w-7/12 md:w-1/2 xl:w-1/3"},lt={class:"relative flex flex-wrap items-stretch w-full ml-auto card-img xl:w-4/5"},it=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),at=[it],nt={key:0,class:"text-center"},ct=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"inline-block w-5 h-5 mr-2"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),dt=t("br",null,null,-1),ut={key:1,class:"mb-7"},ht={class:"flex items-center justify-center"},pt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"inline-block w-5 h-5 mr-2"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1),mt={class:"flex flex-wrap -mx-3 gap-y-5"},ft={class:"relative flex flex-col h-full overflow-hidden border rounded-xl"},gt={class:"relative overflow-hidden card-img aspect-square"},xt=["src","alt"],bt=["onClick"],_t={key:0,class:"text-3xl text-red-400 material-symbols-outlined",style:{"font-variation-settings":`'FILL' 1,\r
                      'opsz' 24`}},wt={key:1,class:"text-3xl text-red-400 material-symbols-outlined"},vt={key:0,class:"absolute top-0 left-0 z-10 p-4"},yt=t("p",{class:"w-[36px] h-[36px] flex justify-center items-center text-white text-sm font-medium rounded-full bg-brown-300"},"推",-1),kt=[yt],St=t("div",{class:"absolute -translate-y-1/4 -translate-x-1/2 z-[5] left-1/2 top-1/2 view-detail hidden"},[t("p",{href:"#",class:"flex items-center py-2 pl-8 pr-6 text-sm font-medium leading-normal tracking-wider text-white uppercase whitespace-nowrap z-5"},[p("查看商品資訊"),t("span",{class:"ml-1 material-symbols-outlined"}," keyboard_double_arrow_right ")])],-1),Ct={class:"p-5 min-h-[150px] flex flex-col justify-between grow"},Lt={class:"mb-1 text-lg font-medium text-black lg:text-2xl"},zt={class:"flex gap-1 mb-2 -ml-1 text-sm text-gray-400"},Pt=["onClick"],Kt=["onClick"],Mt={class:"flex items-center justify-between"},jt={class:"flex flex-col"},At={key:0,class:"px-2 ml-2 text-xs text-white rounded-full font-montserrat op bg-success"},Bt=["disabled","onClick"],Nt={key:0,class:"inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mr-2",role:"status"},Tt=t("span",{class:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Loading... ",-1),Vt=[Tt];function Ft(s,r,It,qt,o,a){const k=m("LoadingAnimation"),S=m("RouterLink"),C=m("Pagination"),L=m("CurrentCouponModal");return l(),i(b,null,[x(k,{active:s.isLoading,"lock-scroll":!0},null,8,["active"]),F,t("main",I,[t("div",q,[D,t("ul",E,[t("li",O,[t("a",{href:"#pills-all",class:d(["my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="all"||o.searchKeyword===""&&o.sortStatus==="search","bg-neutral-100":o.sortStatus!=="all"&&!(o.searchKeyword===""&&o.sortStatus==="search")}]),onClick:r[0]||(r[0]=n(e=>a.changeSort("all"),["prevent"]))},H,2)]),t("li",G,[t("a",{href:"#pills-toast",class:d(["my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="toast","bg-neutral-100":o.sortStatus!=="toast"}]),id:"pills-toast-tab",onClick:r[1]||(r[1]=n(e=>a.changeSort("toast"),["prevent"]))},W,2)]),t("li",X,[t("a",{href:"#pills-cake",class:d(["my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="cake","bg-neutral-100":o.sortStatus!=="cake"}]),onClick:r[2]||(r[2]=n(e=>a.changeSort("cake"),["prevent"]))},$,2)]),t("li",tt,[t("a",{href:"#pills-cookie",class:d(["my-2 block rounded text-center px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500",{"bg-brown-100 text-white":o.sortStatus==="cookie","bg-neutral-100":o.sortStatus!=="cookie"}]),role:"tab",onClick:r[3]||(r[3]=n(e=>a.changeSort("cookie"),["prevent"]))},ot,2)])]),t("div",rt,[t("div",lt,[P(t("input",{type:"search",class:"relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:border focus:border-r-0 focus:border-brown-100 focus:outline-none",placeholder:"搜尋商品","aria-label":"Search","aria-describedby":"button-addon1",onKeyup:r[4]||(r[4]=M(e=>a.searchProducts(),["enter"])),"onUpdate:modelValue":r[5]||(r[5]=e=>o.cacheSearch=e)},null,544),[[K,o.cacheSearch]]),t("button",{class:"relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800",type:"button",onClick:r[6]||(r[6]=n(e=>a.searchProducts(),["prevent"]))},at)])])]),a.filteredProducts.search.length===0&&o.sortStatus==="search"?(l(),i("div",nt,[t("p",null,[ct,p(u(o.searchKeyword),1),dt,p(" 查無資料")])])):a.filteredProducts.search.length>=0&&o.sortStatus==="search"&&o.searchKeyword!==""?(l(),i("div",ut,[t("p",ht,[pt,p("「 "+u(o.searchKeyword)+" 」的搜尋結果",1)])])):h("",!0),t("div",{class:d(["mb-6 transition-opacity duration-150 ease-linear opacity-100",{"pb-14":this.sortStatus!=="all"}])},[t("ul",mt,[(l(!0),i(b,null,_(a.filteredProducts[o.sortStatus],e=>(l(),i("li",{"data-aos":"fade-up","data-aos-duration":"800",class:"w-full px-3 productCard sm:w-1/2 lg:w-1/3 xl:w-1/4",key:e.id},[t("div",ft,[t("div",gt,[t("img",{class:"relative object-cover w-full h-full",src:e.imageUrl,alt:e.title},null,8,xt),t("button",{class:"absolute top-0 right-0 z-10 p-4",onClick:n(c=>s.toggleFavorite(e),["prevent"])},[s.favorite.some(c=>c.id===e.id)?(l(),i("span",_t," favorite ")):(l(),i("span",wt," favorite "))],8,bt),e.is_recommend?(l(),i("div",vt,kt)):h("",!0),St]),t("div",Ct,[t("div",null,[t("h4",Lt,u(e.title),1),t("div",zt,[t("p",{class:"z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white",onClick:n(c=>a.changeSort(e.category),["prevent"])},"# "+u(e.category),9,Pt),(l(!0),i(b,null,_(e.tag,c=>(l(),i("p",{class:"z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white",onClick:n(Dt=>a.tagSearch(c),["prevent"]),key:c},"# "+u(c),9,Kt))),128))])]),t("div",Mt,[t("div",jt,[t("div",null,[t("span",{class:d(["text-xl font-medium text-black-light",{"text-success":e.price!==e.origin_price}])},"NT "+u(s.$filters.currency(e.price)),3),e.price!==e.origin_price?(l(),i("span",At,"SALE")):h("",!0)]),t("span",{class:d(["text-xs text-gray-500 line-through",{hidden:e.price===e.origin_price}])}," NT "+u(s.$filters.currency(e.origin_price)),3)]),t("button",{type:"button",class:d(["z-10 flex items-center px-6 py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full btn-add-cart bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80",{"bg-gray-300":s.status.loadingIcon===e.id}]),disabled:s.status.loadingIcon===e.id,onClick:n(c=>s.addToCart(e,1),["prevent"])},[s.status.loadingIcon===e.id?(l(),i("div",Nt,Vt)):h("",!0),p(" 加入購物車 ")],10,Bt)])]),x(S,{to:"product/"+e.id,class:"after:z-[9] after:top-0 after:left-0 after:right-0 after:absolute after:inset-0"},null,8,["to"])])]))),128))])],2)]),this.sortStatus==="all"?(l(),j(C,{key:0,pages:s.pagination,onChangePage:s.getProducts},null,8,["pages","onChangePage"])):h("",!0),x(L)],64)}const Xt=z(V,[["render",Ft]]);export{Xt as default};
