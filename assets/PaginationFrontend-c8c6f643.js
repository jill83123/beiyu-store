import{_,o as l,c as i,d as t,n as o,f as c,F as p,i as h,t as g,p as u,l as x}from"./index-8e713a6f.js";const f={props:["pages"],methods:{changePage(a,s){let e=a;a===!0&&s==="next"?e=this.pages.current_page+1:a===!0&&s==="pre"&&(e=this.pages.current_page-1),this.$emit("change-page",e)}}},d=a=>(u("data-v-d95103a9"),a=a(),x(),a),b={"aria-label":"Page navigation"},m={class:"flex justify-center list-style-none pb-8 md:py-[68px]"},v={class:"mx-[6px] h-[44px] w-[44px]"},w=d(()=>t("span",{class:"align-middle material-symbols-outlined"}," chevron_left ",-1)),y=[w],P=["onClick"],k={class:"pb-[2px]"},C={class:"mx-[6px] h-[44px] w-[44px]"},j=d(()=>t("span",{class:"align-middle material-symbols-outlined"}," chevron_right ",-1)),I=[j];function S(a,s,e,B,F,r){return l(),i("nav",b,[t("ul",m,[t("li",v,[t("a",{class:o(["relative flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent border-2 border-brown-300 text-brown-300 hover:bg-neutral-100",{disabled:e.pages.has_pre===!1}]),href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=c(n=>r.changePage(e.pages.has_pre,"pre"),["prevent"]))},y,2)]),(l(!0),i(p,null,h(e.pages.total_pages,n=>(l(),i("li",{class:"mx-[6px] h-[44px] w-[44px]",key:n},[t("a",{class:o(["relative flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent border-2 border-brown-300 text-brown-300 hover:bg-neutral-100",{active:n===e.pages.current_page}]),href:"#",onClick:c(N=>r.changePage(n),["prevent"])},[t("p",k,g(n),1)],10,P)]))),128)),t("li",C,[t("a",{class:o(["relative flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent border-2 border-brown-300 text-brown-300 hover:bg-neutral-100",{disabled:e.pages.has_next===!1}]),href:"#","aria-label":"Next",onClick:s[1]||(s[1]=c(n=>r.changePage(e.pages.has_next,"next"),["prevent"]))},I,2)])])])}const D=_(f,[["render",S],["__scopeId","data-v-d95103a9"]]);export{D as P};