import{a,N as l}from"./tw-elements.es.min-5f64f089.js";import{m as i}from"./modalMixin-e43cb9db.js";import{S as r}from"./swalMixin-8b7e2e5f.js";import{_ as c,o as d,c as p,d as t,f}from"./index-8e713a6f.js";const m="/MarchHare-bakery/assets/coupon-bg-cae248fb.png",x={methods:{copy(o){navigator.clipboard.writeText(o).then(()=>{this.showSwalToast("success","複製成功"),this.hideModal()})}},mounted(){a({Modal:l});const o=Date.now(),e=localStorage.getItem("lastPopupCouponModal");e?Math.floor((o-e)/6e4)>=15&&(this.showModal(),localStorage.setItem("lastPopupCouponModal",o)):(this.showModal(),localStorage.setItem("lastPopupCouponModal",o))},mixins:[i,r]},u={"data-te-modal-init":"",class:"fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none",id:"exampleModalCenter",tabindex:"-1","aria-labelledby":"exampleModalCenterTitle","aria-modal":"true",role:"dialog",ref:"modal"},h={"data-te-modal-dialog-ref":"",class:"pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[570px] min-[768px]:max-w-[760px] min-[920px]:max-w-[910px] px-3"},_={class:"relative flex flex-col w-full text-current border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding"},b={class:"rounded-md"},w=t("img",{src:m,alt:"coupon-bg",class:"min-h-[336px] object-[70%] object-cover"},null,-1),g=t("button",{type:"button",class:"z-[100] box-content absolute top-0 right-0 p-4 border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none","data-te-modal-dismiss":"","aria-label":"Close"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#414141",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])],-1),v={class:"absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"},M=t("h2",{class:"mb-2 text-xl font-semibold tracking-wider text-center text-cerulean"}," 一週年活動 ",-1),y=t("p",{class:"mb-3 text-6xl font-montserrat text-success",style:{"text-shadow":`-2px -2px 0 #ffffff,\r
                  2px -2px 0 #ffffff,\r
                  -2px 2px 0 #ffffff,\r
                  2px 2px 0 #ffffff`}},"75%Off",-1),k={class:"flex gap-3 px-5 py-1 mb-3 rounded-lg bg-neutral-50 opacity-80"},C={class:"text-lg text-black font-montserrat",ref:"coupon"},S={class:"flex items-center"},I=t("p",{class:"font-bold tracking-wide text-black-light"},"趁機會讓可愛的甜點療癒一整個週末吧！",-1);function T(o,e,s,$,j,n){return d(),p("div",u,[t("div",h,[t("div",_,[t("div",b,[w,g,t("div",v,[M,y,t("div",k,[t("p",C,"HAREYUMMY1",512),t("button",S,[t("span",{class:"cursor-pointer text-brown-500 material-symbols-outlined",onClick:e[0]||(e[0]=f(B=>n.copy(o.$refs.coupon.textContent),["prevent"]))}," file_copy ")])]),I])])])])],512)}const H=c(x,[["render",T]]);export{H as C};