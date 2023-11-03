import{_ as x,m as f,b as v,r as g,o as a,c as o,e as n,d as t,w as c,t as l,F as m,i as b,g as _}from"./index-da4ca6a0.js";import{a as u}from"./articleStore-de4cf280.js";const w={data(){return{articleDetails:{},isLoading:!1}},computed:{...f(u,["articleList","asideList"])},watch:{$route(){window.location.reload()}},methods:{...v(u,["getArticles"]),getArticle(){this.isLoading=!0;const{id:i}=this.$route.params,h=`https://vue3-course-api.hexschool.io/api/yu-api/article/${i}`;this.$http.get(h).then(d=>{d.data.success&&(this.articleDetails=d.data.article),this.isLoading=!1})}},mounted(){this.getArticle(),this.getArticles()}},y={"data-aos":"fade-up","data-aos-duration":"800",class:"mt-24 sm:mt-[126px] min-h-[calc(100vh_-_330px)]"},L={class:"container font-medium text-black-light"},k={class:"flex flex-col justify-center lg:gap-20 lg:flex-row"},D={class:"lg:mb-16 lg:w-8/12 xl:w-6/12"},A={class:"flex flex-wrap items-center gap-1 mb-1 text-sm"},$=t("span",{class:"mr-1 text-base material-symbols-outlined",style:{"font-variation-settings":"'FILL' 1"}}," home ",-1),B=t("span",{class:"material-symbols-outlined"}," chevron_right ",-1),F=t("span",{class:"material-symbols-outlined"}," chevron_right ",-1),N={class:"text-brown-500"},S={class:"flex gap-1 mb-5 text-xs text-gray-400"},T={class:"flex items-center mb-1 text-sm tracking-widest text-gray-500"},V=t("span",{class:"mr-1 text-base material-symbols-outlined"}," schedule ",-1),j={class:"mb-6 text-2xl font-semibold text-black sm:text-3xl font-noto-serif"},C=["src","alt"],H=["innerHTML"],M=t("span",{class:"pb-1 mr-1 align-middle material-symbols-outlined"}," undo ",-1),P={class:"lg:w-4/12 xl:w-3/12 lg:mb-16"},R=t("h3",{class:"pb-2 text-lg font-semibold tracking-widest text-center border-b-2 border-dashed text-brown-500 border-brown-100"},"近期文章",-1),E={class:"flex flex-col gap-5 mt-6 mb-12 lg:mb-0"},I=["src","alt"],q={class:"flex items-center mb-1 text-xs tracking-widest text-gray-400"},z=t("span",{class:"mr-1 text-sm material-symbols-outlined"}," schedule ",-1);function G(i,h,d,J,e,K){const p=g("LoadingAnimation"),r=g("RouterLink");return a(),o(m,null,[n(p,{active:e.isLoading,"lock-scroll":!0},null,8,["active"]),t("main",y,[t("div",L,[t("div",k,[t("article",D,[t("div",A,[$,n(r,{to:"/",class:"leading-[18px] hover:border-b hover:border-gray-500"},{default:c(()=>[_("首頁")]),_:1}),B,n(r,{to:"/blog",class:"leading-[18px] hover:border-b hover:border-gray-500"},{default:c(()=>[_("部落格")]),_:1}),F,t("span",N,l(e.articleDetails.title),1)]),t("ul",S,[t("li",null,"＃"+l(e.articleDetails.category),1),(a(!0),o(m,null,b(e.articleDetails.tag,s=>(a(),o("li",{key:s},"＃"+l(s),1))),128))]),t("div",T,[V,t("time",null,l(i.$filters.onlyDate(e.articleDetails.create_at)),1)]),t("h2",j,l(e.articleDetails.title),1),t("img",{src:e.articleDetails.image,alt:e.articleDetails.title,class:"sm:float-right sm:w-[300px] sm:ml-6 mb-6"},null,8,C),t("div",{innerHTML:e.articleDetails.content,class:"article-content min-h-[330px] mb-2 tracking-wide border-b-2 border-dashed lg:mb-7 text-black-light pb-10 lg:pb-7 border-brown-100"},null,8,H),n(r,{to:"/blog",class:"hidden text-brown-500 lg:inline-block"},{default:c(()=>[M,_("返回列表")]),_:1})]),t("aside",P,[R,t("ul",E,[(a(!0),o(m,null,b(i.asideList,s=>(a(),o("li",{key:s.id},[n(r,{to:`/blog/article/${s.id}`,class:"flex gap-2"},{default:c(()=>[t("img",{src:s.image,alt:s.title,class:"w-[100px] object-cover"},null,8,I),t("div",null,[t("h4",null,l(s.title),1),t("div",q,[z,t("time",null,l(i.$filters.onlyDate(s.create_at)),1)])])]),_:2},1032,["to"])]))),128))])])])])])],64)}const U=x(w,[["render",G]]);export{U as default};
