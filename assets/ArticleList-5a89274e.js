import{_ as v,m as y,b as k,r as h,o as r,c as o,e as p,d as e,F as c,i as f,h as A,k as T,v as L,u as S,f as x,g as m,t as i,w as C,n as K,p as M,l as P}from"./index-200782e0.js";import{P as j}from"./PaginationFrontend-97704db4.js";import{a as g}from"./articleStore-5a523494.js";const z={data(){return{currentTag:[],cacheSearch:"",searchKeyword:""}},computed:{...y(g,["articleList","pagination","allTags","isLoading"]),filteredArticle(){return this.currentTag.length>0?this.articleList.filter(t=>t.tag?this.currentTag.every(a=>t.tag.includes(a)):!1):this.searchKeyword!==""?this.articleList.filter(t=>t.title.match(this.searchKeyword)||Array.isArray(t.tag)&&t.tag.includes(this.searchKeyword)):this.articleList}},methods:{...k(g,["getArticles"]),selectTag(t){const a=this.currentTag.indexOf(t);a===-1?this.currentTag.push(t):this.currentTag.splice(a,1)},searchArticles(){this.currentTag=[],this.searchKeyword=this.cacheSearch}},mounted(){this.getArticles()},components:{Pagination:j}},n=t=>(M("data-v-2be5a9bf"),t=t(),P(),t),B=n(()=>e("header",{"data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true",class:"pt-[106px] pb-10 sm:pb-12 lg:pb-20 text-center"},[e("h3",{class:"mb-2 font-montserrat text-2xl tracking-[0.2rem] font-bold text-brown-100"},"Blog"),e("h2",{class:"-mt-1 text-5xl md:text-[64px] font-medium tracking-widest text-brown-300 font-maru mb-4"},"部落格"),e("p",{class:"font-bold tracking-widest text-black-light"},"快來看看我們最新的消息 👀")],-1)),I={class:"min-h-[calc(100vh_-_530px)] container"},V={class:"flex flex-col-reverse gap-5 mb-8 lg:flex-row md:mb-0"},E={class:"lg:w-8/12"},N={class:"flex flex-col gap-4"},D=["src","alt"],R={class:"flex flex-col flex-grow px-4 py-4 sm:px-6"},F={class:"flex items-center mb-2 text-sm text-gray-500"},H=n(()=>e("span",{class:"mr-1 text-base material-symbols-outlined"}," schedule ",-1)),O={class:"max-h-[100px] max-w-full"},U={class:"mb-2 overflow-hidden text-lg font-semibold text-black xl:text-2xl font-noto-serif",style:{display:"-webkit-box","-webkit-line-clamp":"1","-webkit-box-orient":"vertical"}},q=["innerHTML"],G={class:"flex justify-end mt-auto sm:justify-between"},J={class:"flex-wrap hidden gap-1 text-xs text-gray-500 sm:flex"},Q=n(()=>e("div",{class:"flex items-center justify-end text-sm tracking-widest text-end font-montserrat text-brown-300"},[m("SEE MORE"),e("span",{class:"ml-1 material-symbols-outlined"}," keyboard_double_arrow_right ")],-1)),W={key:0,class:"flex justify-center h-full"},X=n(()=>e("p",{class:"self-center font-semibold tracking-wider text-center text-black-light"},"沒有相關文章",-1)),Y=[X],Z={class:"lg:w-3/12"},$={class:"relative flex flex-wrap items-stretch w-full ml-auto card-img"},ee=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[e("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1)),te=[ee],se={class:"flex-wrap hidden gap-2 my-5 lg:flex"},ae=["onClick"];function re(t,a,oe,le,d,l){const b=h("LoadingAnimation"),_=h("RouterLink"),w=h("Pagination");return r(),o(c,null,[p(b,{active:t.isLoading,"lock-scroll":!0},null,8,["active"]),B,e("main",I,[e("div",V,[e("div",E,[e("ul",N,[(r(!0),o(c,null,f(l.filteredArticle,s=>(r(),o("li",{"data-aos":"fade-up","data-aos-duration":"800",class:"relative h-[200px] flex overflow-hidden border rounded-lg hover:opacity-70",key:s.id},[e("img",{class:"max-w-[160px] sm:max-w-[200px] sm:max-h-[200px] object-cover",src:s.image,alt:s.title},null,8,D),e("div",R,[e("div",F,[H,e("time",null,i(t.$filters.onlyDate(s.create_at)),1)]),e("div",O,[e("h4",U,i(s.title),1),e("div",{class:"max-h-[60px] overflow-hidden text-sm text-gray-600",style:{display:"-webkit-box","-webkit-line-clamp":"3","-webkit-box-orient":"vertical"},innerHTML:s.description},null,8,q)]),e("div",G,[e("ul",J,[e("li",null,"＃"+i(s.category),1),(r(!0),o(c,null,f(s.tag,u=>(r(),o("li",{key:u},"＃"+i(u),1))),128))]),p(_,{to:`blog/article/${s.id}`,class:"whitespace-nowrap w-[116px] inline-block see-more after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0"},{default:C(()=>[Q]),_:2},1032,["to"])])])]))),128))]),l.filteredArticle.length===0?(r(),o("div",W,Y)):A("",!0)]),e("aside",Z,[e("div",$,[T(e("input",{type:"search",class:"relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:border focus:border-r-0 focus:border-brown-100 focus:outline-none",placeholder:"搜尋文章","aria-label":"Search","aria-describedby":"button-addon1",onKeyup:a[0]||(a[0]=S(s=>l.searchArticles(),["enter"])),"onUpdate:modelValue":a[1]||(a[1]=s=>d.cacheSearch=s)},null,544),[[L,d.cacheSearch]]),e("button",{class:"relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800",type:"button",onClick:a[2]||(a[2]=x(s=>l.searchArticles(),["prevent"]))},te)]),e("ul",se,[(r(!0),o(c,null,f(t.allTags,s=>(r(),o("li",{key:s},[e("button",{onClick:x(u=>l.selectTag(s),["prevent"]),class:K(["px-2 py-2 text-sm leading-3 border rounded-full border-brown-300 hover:bg-brown-300 hover:text-white text-brown-300",d.currentTag.includes(s)?"bg-brown-300 text-white":""])},"＃"+i(s),11,ae)]))),128)),m(" "+i(l.filteredArticle.tag),1)])])]),p(w,{pages:t.pagination,onChangePage:t.getArticles},null,8,["pages","onChangePage"])])],64)}const de=v(z,[["render",re],["__scopeId","data-v-2be5a9bf"]]);export{de as default};
