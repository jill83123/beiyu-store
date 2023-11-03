import{m}from"./modalMixin-e43cb9db.js";import{_ as u,o as s,c as i,d as e,g as d,t as p,h as f,f as l,q as g,n as c,F as b,i as v,p as y,l as w}from"./index-8e713a6f.js";const k={props:["item"],mixins:[m]},$={"data-te-modal-init":"",class:"fixed left-0 top-[30%] lg:top-0 z-[1055] hidden h-[full] w-full overflow-y-auto overflow-x-hidden outline-none",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={"data-te-modal-dialog-ref":"",class:"pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"},C={class:"min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"},j=g(`<div class="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-t-md border-neutral-100 bg-danger"><h5 class="flex items-center text-xl leading-normal text-white font-base" id="exampleModalLabel"><span class="mr-2 material-symbols-outlined" style="font-variation-settings:&#39;FILL&#39; 1,\r
                  &#39;wght&#39; 400,\r
                  &#39;GRAD&#39; 0,\r
                  &#39;opsz&#39; 24;"> warning </span> 即將刪除 </h5><button type="button" class="box-content border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`,1),M={class:"relative flex-auto p-4","data-te-modal-body-ref":""},L={class:"py-3"},B={key:0,class:"font-bold text-danger"},I=e("span",{class:"font-bold"},"無法復原",-1),N={class:"flex flex-wrap items-center justify-end flex-shrink-0 gap-2 p-4 border-t-2 border-opacity-100 rounded-b-md border-neutral-100"},S=e("button",{type:"button",class:"inline-block px-[23px] py-[9px] text-sm font-medium leading-normal text-right text-black uppercase transition duration-150 ease-in-out bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80 hover:bg-gray-100","data-te-modal-dismiss":""}," 取消 ",-1);function D(a,n,t,x,_,r){return s(),i("div",$,[e("div",P,[e("div",C,[j,e("div",M,[e("p",L,[d("真的要刪除"),t.item.title?(s(),i("span",B," "+p(t.item.title)+" ",1)):f("",!0),d("嗎？（刪除後將會"),I,d("）")])]),e("div",N,[S,e("button",{type:"button",class:"inline-block rounded bg-danger px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80 text-right","data-te-ripple-init":"","data-te-ripple-color":"light",onClick:n[0]||(n[0]=l(o=>a.$emit("del",t.item),["prevent"]))}," 確認刪除 ")])])])],512)}const W=u(k,[["render",D]]);const V={props:["pages"],methods:{changePage(a,n){let t=a;a===!0&&n==="next"?t=this.pages.current_page+1:a===!0&&n==="pre"&&(t=this.pages.current_page-1),this.$emit("change-page",t)}}},h=a=>(y("data-v-512f136a"),a=a(),w(),a),z={"aria-label":"Page navigation"},F={class:"flex justify-center list-style-none"},q={class:"mx-[6px] h-[44px] w-[44px]"},A=h(()=>e("span",{class:"align-middle material-symbols-outlined"}," chevron_left ",-1)),E=[A],G=["onClick"],R={class:"pb-[2px]"},T={class:"mx-[6px] h-[44px] w-[44px]"},H=h(()=>e("span",{class:"align-middle material-symbols-outlined"}," chevron_right ",-1)),J=[H];function K(a,n,t,x,_,r){return s(),i("nav",z,[e("ul",F,[e("li",q,[e("a",{class:c(["relative flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent border-2 border-cerulean text-cerulean hover:bg-neutral-100",{disabled:t.pages.has_pre===!1}]),href:"#","aria-label":"Previous",onClick:n[0]||(n[0]=l(o=>r.changePage(t.pages.has_pre,"pre"),["prevent"]))},E,2)]),(s(!0),i(b,null,v(t.pages.total_pages,o=>(s(),i("li",{class:"mx-[6px] h-[44px] w-[44px]",key:o},[e("a",{class:c(["relative flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent border-2 border-cerulean text-cerulean hover:bg-neutral-100",{active:o===t.pages.current_page}]),href:"#",onClick:l(O=>r.changePage(o),["prevent"])},[e("p",R,p(o),1)],10,G)]))),128)),e("li",T,[e("a",{class:c(["relative flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent border-2 border-cerulean text-cerulean hover:bg-neutral-100",{disabled:t.pages.has_next===!1}]),href:"#","aria-label":"Next",onClick:n[1]||(n[1]=l(o=>r.changePage(t.pages.has_next,"next"),["prevent"]))},J,2)])])])}const X=u(V,[["render",K],["__scopeId","data-v-512f136a"]]);export{W as D,X as P};