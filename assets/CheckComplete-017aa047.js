import{_ as i,m as l,b as d,o as c,d as p,e as t,t as C,j as o,c as a,p as u}from"./index-28469c10.js";import{s as m}from"./statesStore-34e1ce25.js";const f={computed:{...l(a,["OrderData","userInfo"])},methods:{...d(a,["updateCurrentStep","shoppingMore"]),copy(s){navigator.clipboard.writeText(s).then(()=>{m().pushAlertMessage(!0,"複製成功")})}},created(){this.updateCurrentStep(4)},mounted(){this.OrderData.orderId||this.$router.replace("/")}},h={class:"container"},x=u('<div class="mt-14 mb-9"><div class="flex items-center justify-center gap-2 mb-5"><svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9605 2.85954C23.864 1.57329 25.8118 0.76854 27.8969 0.301988C33.1034 -0.863042 38.497 1.25973 40.307 8.12162C41.5119 7.00838 42.5579 5.79164 43.8349 4.90893C47.7218 2.222 52.1259 1.00973 56.8162 1.04114C61.4501 1.07216 65.058 4.2862 66.7871 9.72345C67.5397 12.0903 68.043 14.5234 67.5862 17.0149C67.4 18.0303 67.7725 18.5213 68.5446 19.0934C75.5871 24.312 78.9356 31.1593 77.6457 40.022C77.4633 41.2757 77.4738 42.5578 77.2842 43.8099C76.1784 51.1116 71.6811 55.6792 65.3044 58.8332C58.8888 62.0066 51.9625 62.9058 45.0008 63.3263C38.4677 63.721 31.9 64.0933 25.3463 63.4731C17.9759 62.7756 10.7879 61.6524 5.03101 56.2645C1.92327 53.3559 0.126064 50.018 0.0146434 45.7139C-0.192044 37.7301 1.77213 30.4898 6.99828 24.302C7.72466 23.442 8.40984 22.4068 9.35405 21.8982C11.9092 20.5218 12.7741 18.368 13.3222 15.6542C14.3986 10.3248 17.393 6.11077 21.9605 2.85954ZM39.9412 16.7356C39.5748 17.6055 39.0258 18.2437 38.003 17.7879C37.081 17.3769 36.9314 16.4991 37.1248 15.6212C37.5873 13.5221 37.5051 11.4007 37.3589 9.29637C37.0837 5.33526 34.0069 2.69315 30.1062 2.93059C22.7912 3.37586 15.0371 12.2359 15.7322 19.522C15.8764 21.0337 15.3626 21.8006 14.1377 22.3146C12.205 23.1257 10.7067 24.4311 9.34786 26.0217C5.64325 30.3584 3.73466 35.41 3.02217 40.9963C2.26482 46.9343 3.48661 51.9295 8.7824 55.6285C13.2148 58.7245 18.1712 59.68 23.2948 60.2969C31.324 61.2636 39.3807 60.6834 47.3897 60.1811C53.9255 59.7713 60.4086 58.5455 66.1913 55.0389C70.5729 52.382 73.5242 48.7604 74.3371 43.5712C74.8642 40.2066 75.2026 36.7709 74.6401 33.46C73.7031 27.9446 70.9948 23.4456 65.5852 21.0713C64.2224 20.4732 63.9482 19.4895 64.3535 18.142C65.5434 14.1853 64.3314 10.6272 62.4078 7.23233C61.1519 5.01588 59.017 3.71952 56.6251 3.90565C46.8175 4.66886 42.2849 7.88941 39.9412 16.7356Z" fill="#303030"></path><path d="M43.0916 41.1811C44.5338 43.2688 44.3201 44.8279 42.5812 45.9807C41.0221 47.0143 39.6833 46.6335 38.309 44.7591C38.101 44.4755 37.9671 44.113 37.7076 43.8965C37.0255 43.3278 35.9704 42.9588 36.3894 41.7882C36.7906 40.6676 37.9184 40.6298 38.8693 40.5021C40.2679 40.3142 41.6893 40.2288 43.0916 41.1811Z" fill="#303030"></path><path d="M35.5306 39.756C33.4522 40.787 31.0913 40.9751 29.8025 43.1411C29.5207 43.6148 28.7702 43.5165 28.2801 43.1062C27.7399 42.6538 27.6258 42.071 27.8181 41.3955C28.4177 39.2895 32.3472 37.0442 34.53 37.6147C35.5473 37.8806 36.1569 38.4618 35.5306 39.756Z" fill="#303030"></path><path d="M44.3996 36.9486C46.6382 35.4124 50.6594 36.1635 52.1001 38.2083C52.508 38.7872 52.6279 39.3796 52.2109 39.9682C51.7195 40.6619 50.9952 40.7422 50.3418 40.3097C48.8853 39.3456 47.3542 38.8381 45.5761 38.8743C44.5536 38.8952 44.1418 38.1171 44.3996 36.9486Z" fill="#303030"></path></svg><h3 class="text-3xl font-medium text-black font-maru">感謝購買</h3></div><p class="text-center">我們正在處理您的訂單<br>如有任何問題請 <a href="" class="font-semibold border-b border-info text-info">聯繫我們</a>，謝謝</p></div>',1),b={class:"mb-14"},g={class:"flex flex-col items-center justify-center gap-2 mb-2"},v=t("h4",{class:"inline-block mr-1 text-xl tracking-wide text-center"},"訂單編號",-1),_={class:"-mr-7"},y={class:"mr-2 text-xl after:-z-[1] relative leading-4 after:-left-[2px] after:-right-[2px] after:bg-warning after:absolute after:top-1/2 after:-bottom-[1px] align-top"},w=t("p",{class:"text-sm text-center text-danger"},"※ 請詳記訂單編號，方便查詢詳細資訊",-1),k={class:"text-center"};function M(s,e,$,S,D,n){return c(),p("div",h,[x,t("div",b,[t("div",g,[v,t("div",_,[t("span",y,C(s.OrderData.orderId),1),t("button",null,[t("span",{class:"text-xl text-black cursor-pointer material-symbols-outlined",onClick:e[0]||(e[0]=o(r=>n.copy(s.OrderData.orderId),["prevent"]))}," file_copy ")])])]),w]),t("div",k,[t("button",{to:"/shop",type:"button",class:"z-10 px-8 py-2 mb-2 text-sm font-medium leading-normal text-white uppercase transition duration-150 ease-in-out rounded-full sm:tracking-wider to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80 disabled:bg-gray-300",onClick:e[1]||(e[1]=o(r=>s.shoppingMore(),["prevent"]))},"繼續逛逛 "),t("button",{type:"button",class:"z-10 flex items-center px-8 py-2 mx-auto mb-10 text-sm font-medium leading-normal text-gray-500 uppercase transition duration-150 ease-in-out rounded-full sm:tracking-wider focus:outline-none focus:ring-1 hover:opacity-80",onClick:e[2]||(e[2]=o(r=>this.$router.replace("/order-details"),["prevent"]))},"查看訂單細節")])])}const I=i(f,[["render",M]]);export{I as default};
