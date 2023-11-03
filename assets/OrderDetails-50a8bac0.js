import{_ as f,m as D,r as u,o as l,c,e as m,d as t,k as v,v as y,u as k,f as M,n as a,t as r,g as n,h as p,F as C,i as Z,q as _,p as O,l as S}from"./index-da4ca6a0.js";import{c as I}from"./cartStore-0768b281.js";import{C as j}from"./ContactUsModal-e76a5f5f.js";import{S as L}from"./swalMixin-4fc7cb71.js";import"./tw-elements.es.min-5f64f089.js";import"./modalMixin-e43cb9db.js";const T={data(){return{orderId:"",orderDetails:{},status:{isLoading:!1}}},computed:{...D(I,["OrderData"])},methods:{getOrderDetails(){if(this.status.isLoading=!0,this.orderId===""){this.status.isLoading=!1,this.showSwalToast("error","請輸入訂單編號");return}const d=`https://vue3-course-api.hexschool.io/api/yu-api/order/${this.orderId}`;this.$http.get(d).then(i=>{if(i.data.order===null)this.showSwalToast("error","請輸入正確的編號");else if(i.data.success){this.orderDetails=i.data.order,this.orderDetails.user.name=`${this.orderDetails.user.name.slice(0,-2)}**`;const h=this.orderDetails.user.email.indexOf("@");this.orderDetails.user.email=this.orderDetails.user.email.slice(0,3)+"*".repeat(h-3)+this.orderDetails.user.email.slice(h),this.orderDetails.user.tel=this.orderDetails.user.tel.slice(0,2)+"*".repeat(this.orderDetails.user.tel.length-5)+this.orderDetails.user.tel.slice(-3),this.orderDetails.user.address!=="到店自取"&&(this.orderDetails.user.address=this.orderDetails.user.address.slice(0,6)+"*".repeat(this.orderDetails.user.address.length-6))}this.status.isLoading=!1})}},mounted(){this.OrderData.orderId&&(this.orderId=this.OrderData.orderId,this.getOrderDetails())},components:{ContactUsModal:j},mixins:[L]},o=d=>(O("data-v-1c406d37"),d=d(),S(),d),N={"data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true",class:"container mt-[126px] min-h-[calc(100vh_-_330px)] pb-10 overflow-x-hidden overflow-y-hidden"},B=_('<div class="mb-5 text-center" data-v-1c406d37><h3 class="font-montserrat mb-2 text-2xl tracking-[0.2rem] font-bold text-brown-100" data-v-1c406d37>Order Search</h3><h2 class="text-5xl md:text-[64px] font-medium tracking-widest text-brown-300 font-maru" data-v-1c406d37>訂單査詢</h2></div><div class="mx-auto mb-10 font-semibold text-center text-black-light sm:w-7/12 md:w-1/2 xl:w-1/3" data-v-1c406d37><p data-v-1c406d37>親愛的顧客<br data-v-1c406d37>請輸入 <span class="font-semibold text-brown-500" data-v-1c406d37>訂單編號</span> 查詢您的訂單狀態<br data-v-1c406d37><br data-v-1c406d37>若有任何問題請 <button data-te-toggle="modal" data-te-target="#contactUsModal" class="font-semibold border-b border-info text-info" data-v-1c406d37>聯繫我們</button> ，謝謝</p></div>',2),U={class:"w-full mx-auto mb-10 md:block sm:w-8/12 md:w-2/3 lg:w-1/2 xl:w-1/3"},V={class:"relative flex flex-wrap items-stretch w-full ml-auto card-img"},z=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})],-1)),A=[z],q={key:0,"data-aos":"fade-up","data-aos-duration":"800"},E={class:"flex justify-between w-full mx-auto mb-16 text-sm lg:w-2/3 xl:w-1/2 sm:text-base"},F={class:"flex justify-around w-1/4"},H={class:"flex justify-around w-1/4"},K={class:"flex justify-around w-1/4"},G={class:"mb-20"},J={class:"relative flex gap-2 px-5 pr-3 mx-auto border rounded-lg py-14 sm:px-10 lg:w-2/3 xl:w-1/2"},P=_('<svg class="absolute -translate-x-1/2 -top-8 left-1/2" width="230" height="61" viewBox="0 0 230 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1c406d37><path d="M136.391 10.9171C136.931 11.095 137.445 11.1825 137.768 11.4778C138.502 12.1493 138.46 13.4078 137.775 14.0642C137.143 14.6712 135.949 14.6558 135.295 14.0321C134.587 13.3581 134.482 12.1001 135.161 11.4376C135.437 11.1676 135.9 11.0876 136.391 10.9171Z" fill="white" data-v-1c406d37></path><path d="M222.629 17.0136C223.535 17.4833 224.44 17.9531 225.533 18.5105C226.214 18.8548 226.708 19.1115 227.202 19.3681C227.624 19.8149 228.046 20.2618 228.529 20.9209C228.7 21.9222 228.511 22.6229 227.886 23.1377C226.869 23.9746 225.881 24.8642 224.781 25.5784C223.182 26.6166 221.47 27.4802 219.853 28.4913C218.628 29.2564 218.645 30.422 219.927 31.0623C220.86 31.5282 221.923 31.7356 222.928 32.0583C223.29 32.2636 223.635 32.5135 224.018 32.6664C225.387 33.2121 226.536 34.0657 227.514 35.142C228.61 36.3489 228.688 38.041 227.505 39.1831C226.523 40.1306 225.29 40.8187 224.162 41.6139C223.64 41.9826 223.076 42.2979 222.58 42.6989C221.676 43.4304 221.656 43.7859 222.472 44.6406C223.442 45.6566 224.233 46.7721 224.69 48.1131C224.972 48.9372 225.074 49.7516 224.786 50.6623C224.402 50.7314 224.047 50.8315 223.688 50.8543C218.153 51.2052 212.613 51.502 207.081 51.8969C183.908 53.5509 160.682 54.048 137.482 55.1076C114.327 56.1652 91.1702 57.2782 68.0018 57.9335C53.5925 58.3411 39.2016 59.2232 24.7927 59.4347C18.7615 59.5232 12.7445 59.8528 6.71819 59.9531C5.39411 59.9751 4.10345 59.7603 2.70133 59.2682C3.98277 56.2919 6.40674 54.4745 8.49338 52.1773C7.95659 51.4456 7.42093 50.6631 6.83212 49.9227C5.24215 47.9234 3.62329 45.9469 2.02816 43.9515C0.998448 42.6635 1.19675 41.77 2.67303 41.0589C3.77752 40.5268 4.91541 40.0627 6.01084 39.5134C8.95879 38.0351 9.40939 35.2572 7.35709 32.5898C6.48299 31.4536 5.47673 30.4188 4.53149 29.3372C4.39129 29.1768 4.23997 29.0228 4.12158 28.8472C3.26319 27.5738 3.52724 26.6775 4.96313 26.1088C6.49848 25.5007 8.0528 24.9406 9.59025 24.3378C9.93255 24.2035 10.255 24.0013 10.5593 23.7909C12.0211 22.7803 12.1891 21.9963 10.97 20.6709C10.1912 19.8243 9.19585 19.1542 8.22933 18.5065C6.59116 17.4088 4.88238 16.4166 3.23774 15.3281C2.5777 14.8912 1.93354 14.3822 1.41797 13.7885C0.805575 13.0833 1.12115 12.3052 2.05413 12.1539C4.20593 11.8049 6.36692 11.5117 8.52575 11.2071C10.5261 10.9249 12.5284 10.6574 14.5298 10.3829C14.6884 10.3612 14.8456 10.326 15.0048 10.313C17.8719 10.078 20.7382 9.83231 23.6067 9.61568C27.2737 9.33873 30.9648 9.25647 34.6052 8.78151C39.8098 8.10251 45.0473 8.24906 50.2573 7.84176C69.0009 6.37647 87.795 5.9494 106.572 5.27942C114.567 4.99414 122.569 4.50089 130.568 4.56417C137.143 4.61618 143.688 3.92797 150.244 4.04857C155.485 4.14495 160.7 3.55459 165.917 3.7121C170.466 3.8494 174.981 3.4689 179.512 3.40323C183.776 3.34142 188.04 3.2568 192.304 3.19115C196.088 3.13289 199.879 2.91762 203.654 3.07556C209.163 3.30602 214.637 2.73885 220.13 2.67968C221.45 2.66548 222.772 2.90806 224.209 3.19354C224.121 3.83959 223.964 4.35219 223.704 4.80513C222.465 6.95874 220.645 8.61714 218.907 10.3449C218.001 11.2458 217.077 12.1329 216.228 13.086C215.593 13.7989 215.674 14.4152 216.497 14.7462C218.518 15.5589 220.582 16.2647 222.629 17.0136ZM194.125 9.58211C193.762 9.63325 193.363 9.60498 193.043 9.75059C192.136 10.1631 191.822 11.2576 192.28 12.1988C192.708 13.0773 193.849 13.4632 194.74 13.0312C195.609 12.6106 195.967 11.4489 195.411 10.565C195.174 10.1884 194.718 9.94926 194.125 9.58211ZM198.779 44.4146C198.435 44.7246 197.98 44.9741 197.769 45.3572C197.324 46.1684 197.715 47.2416 198.515 47.7141C199.237 48.1398 200.183 48.0315 200.732 47.4601C201.324 46.8453 201.399 45.5642 200.714 44.9887C200.274 44.6199 199.585 44.5482 198.779 44.4146ZM56.6769 34.645C56.3686 34.7195 56.021 34.7274 55.7592 34.8809C54.9198 35.3728 54.6938 36.5321 55.2212 37.4056C55.7113 38.2177 56.7545 38.5206 57.5951 38.0951C58.4327 37.6711 58.7674 36.6804 58.3684 35.7628C58.092 35.1271 57.6053 34.7533 56.6769 34.645ZM168.081 29.5148C168.142 29.9791 168.106 30.485 168.284 30.8989C168.643 31.732 169.591 32.0944 170.428 31.8287C171.304 31.5507 171.725 30.8002 171.566 29.812C171.445 29.0551 171.034 28.5389 170.287 28.3427C169.341 28.0942 168.611 28.3801 168.081 29.5148ZM35.1895 20.7372C35.3157 21.0292 35.3922 21.3582 35.5776 21.6061C36.0905 22.2922 36.9336 22.5053 37.7195 22.2037C38.4463 21.9248 38.845 21.2467 38.7688 20.4189C38.6916 19.5814 38.0927 18.8893 37.3025 18.7246C36.4761 18.5524 35.7435 18.9103 35.3434 19.7259C35.2302 19.9566 35.2203 20.2376 35.1895 20.7372ZM79.3292 15.3428C79.4037 15.8528 79.3668 16.4151 79.5772 16.8613C79.9542 17.661 80.9685 17.9669 81.7774 17.6558C82.6018 17.3387 83.0145 16.4858 82.7871 15.5602C82.6061 14.8234 82.1729 14.317 81.4056 14.1843C80.5368 14.0341 79.8169 14.257 79.3292 15.3428ZM143.043 47.3461C142.65 47.2084 142.262 46.9715 141.864 46.9522C140.761 46.8988 140.067 47.6616 140.128 48.7567C140.191 49.8986 141.019 50.6304 142.136 50.533C143.182 50.4418 143.849 49.6025 143.664 48.5278C143.604 48.1777 143.371 47.8572 143.043 47.3461ZM136.277 10.921C135.899 11.0875 135.437 11.1675 135.16 11.4375C134.482 12.1 134.587 13.358 135.294 14.032C135.949 14.6557 137.142 14.6711 137.775 14.0641C138.459 13.4077 138.502 12.1492 137.767 11.4777C137.444 11.1824 136.93 11.0949 136.277 10.921ZM81.9407 52.0432C82.1042 52.3709 82.2048 52.7566 82.4438 53.0146C82.9965 53.6112 83.9706 53.7089 84.6525 53.3145C85.3369 52.9186 85.6433 52.0463 85.3886 51.2186C85.123 50.3556 84.3517 49.8567 83.4153 49.9422C82.4602 50.0293 82.1069 50.4702 81.9407 52.0432ZM111.685 32.7213C111.595 33.2785 111.364 33.8582 111.448 34.388C111.606 35.3863 112.609 35.8962 113.658 35.6547C114.52 35.4564 115.016 34.6717 114.883 33.7139C114.682 32.2655 113.479 31.7945 111.685 32.7213ZM33.5064 49.6919C33.1955 49.639 32.8813 49.5269 32.5742 49.5435C31.4385 49.6049 30.8407 50.3226 30.9501 51.4363C31.0587 52.5429 31.9553 53.2513 33.0539 53.0984C34.0894 52.9543 34.709 52.0811 34.4309 51.0021C34.3206 50.5743 33.9557 50.2119 33.5064 49.6919Z" fill="#EBCBAD" data-v-1c406d37></path><path d="M194.243 9.61502C194.718 9.9494 195.174 10.1886 195.411 10.5651C195.967 11.4491 195.608 12.6107 194.74 13.0313C193.848 13.4634 192.707 13.0775 192.28 12.199C191.821 11.2578 192.136 10.1633 193.043 9.75073C193.363 9.60512 193.762 9.63339 194.243 9.61502Z" fill="white" data-v-1c406d37></path><path d="M198.894 44.3791C199.585 44.5483 200.275 44.62 200.714 44.9888C201.4 45.5643 201.324 46.8454 200.733 47.4602C200.183 48.0316 199.237 48.1399 198.516 47.7142C197.715 47.2417 197.324 46.1685 197.77 45.3573C197.981 44.9742 198.435 44.7247 198.894 44.3791Z" fill="white" data-v-1c406d37></path><path d="M56.7931 34.6566C57.6059 34.7534 58.0927 35.1272 58.369 35.7628C58.7681 36.6805 58.4334 37.6712 57.5957 38.0952C56.7552 38.5207 55.712 38.2177 55.2219 37.4057C54.6945 36.5321 54.9204 35.3729 55.7598 34.8809C56.0217 34.7274 56.3692 34.7196 56.7931 34.6566Z" fill="white" data-v-1c406d37></path><path d="M168.126 29.4009C168.611 28.3803 169.342 28.0943 170.288 28.3428C171.035 28.539 171.446 29.0552 171.567 29.8121C171.725 30.8003 171.304 31.5508 170.429 31.8289C169.592 32.0946 168.644 31.7322 168.285 30.899C168.106 30.4851 168.142 29.9792 168.126 29.4009Z" fill="white" data-v-1c406d37></path><path d="M35.1771 20.6162C35.2211 20.2375 35.231 19.9564 35.3442 19.7258C35.7443 18.9102 36.4769 18.5523 37.3033 18.7245C38.0935 18.8892 38.6925 19.5812 38.7696 20.4188C38.8458 21.2466 38.4471 21.9246 37.7203 22.2035C36.9344 22.5051 36.0913 22.2921 35.5784 21.606C35.393 21.3581 35.3165 21.0291 35.1771 20.6162Z" fill="white" data-v-1c406d37></path><path d="M79.3705 15.2308C79.8173 14.257 80.5372 14.034 81.406 14.1843C82.1733 14.317 82.6065 14.8234 82.7874 15.5601C83.0148 16.4857 82.6022 17.3387 81.7778 17.6558C80.9689 17.9669 79.9546 17.661 79.5776 16.8613C79.3672 16.4151 79.4041 15.8527 79.3705 15.2308Z" fill="white" data-v-1c406d37></path><path d="M143.13 47.4347C143.371 47.8573 143.603 48.1777 143.664 48.5279C143.849 49.6026 143.182 50.4419 142.136 50.5331C141.019 50.6305 140.191 49.8986 140.128 48.7568C140.067 47.6617 140.761 46.8988 141.863 46.9522C142.262 46.9716 142.65 47.2085 143.13 47.4347Z" fill="white" data-v-1c406d37></path><path d="M81.9264 51.9306C82.1068 50.4702 82.4601 50.0293 83.4152 49.9421C84.3517 49.8567 85.123 50.3555 85.3886 51.2185C85.6433 52.0463 85.3369 52.9185 84.6524 53.3145C83.9706 53.7089 82.9965 53.6111 82.4438 53.0146C82.2048 52.7565 82.1042 52.3708 81.9264 51.9306Z" fill="white" data-v-1c406d37></path><path d="M111.773 32.6262C113.479 31.7945 114.682 32.2655 114.883 33.7139C115.016 34.6717 114.52 35.4564 113.658 35.6548C112.609 35.8962 111.606 35.3863 111.448 34.3881C111.364 33.8583 111.595 33.2785 111.773 32.6262Z" fill="white" data-v-1c406d37></path><path d="M33.6072 49.7559C33.9564 50.212 34.3213 50.5744 34.4316 51.0022C34.7097 52.0812 34.0901 52.9544 33.0546 53.0985C31.956 53.2514 31.0594 52.543 30.9508 51.4363C30.8414 50.3227 31.4392 49.6049 32.5749 49.5436C32.882 49.527 33.1962 49.639 33.6072 49.7559Z" fill="white" data-v-1c406d37></path></svg><svg class="" width="27" height="500" viewBox="0 0 27 500" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1c406d37><rect x="0.5" y="59.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="0.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="177.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="118.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="236.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="295.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="354.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="413.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="472.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect><rect x="0.5" y="513.5" width="26" height="26" rx="13" stroke="#DDDDDD" data-v-1c406d37></rect></svg>',2),Q={class:"w-4/5 mx-auto break-all"},R=o(()=>t("thead",null,[t("th",{class:"w-[30%] min-[500px]:w-[25%]"}),t("th",{class:"w-[70%] min-[500px]:w-[75%]"})],-1)),W={class:"align-text-top border-b-2 border-dashed border-brown-100"},X=o(()=>t("td",{class:"pt-2 pb-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"下訂時間",-1)),Y={class:"pt-2 pb-4 pr-1 sm:tracking-wider sm:pr-4"},$={class:"border-b-2 border-dashed border-brown-100"},t1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"姓名",-1)),e1={class:"py-4 pr-1 sm:tracking-wider sm:pr-4"},s1={class:"border-b-2 border-dashed border-brown-100"},r1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"電話",-1)),o1={class:"py-4 pr-1 sm:tracking-wider sm:pr-4"},d1={class:"border-b-2 border-dashed border-brown-100"},a1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"E-mail",-1)),i1={class:"py-4 pr-1 sm:tracking-wider sm:pr-4"},l1={class:"border-b-2 border-dashed border-brown-100"},c1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"取貨方式",-1)),n1={class:"py-4 pr-1 sm:tracking-wider sm:pr-4"},p1={class:"border-b-2 border-dashed border-brown-100"},h1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"地址",-1)),x1={class:"py-4 pr-1 sm:tracking-wider sm:pr-4"},u1={class:"border-b-2 border-dashed border-brown-100"},m1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"是否付款",-1)),C1={class:"border-b-2 border-dashed border-brown-100"},_1=o(()=>t("td",{class:"py-4 pr-1 sm:tracking-wider sm:pr-4 min-w-[74px] sm:min-w-[86px]"},"留言",-1)),b1={class:"py-4 pr-1 sm:tracking-wider sm:pr-4"},w1={class:"mb-10","data-aos":"fade-up","data-aos-duration":"800","data-aos-offset":"200"},g1=o(()=>t("h3",{class:"mb-2 text-3xl font-bold text-center text-black font-noto-serif"},"訂單明細",-1)),f1={class:"container flex flex-col"},D1={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},v1={class:"inline-block min-w-full py-2 sm:px-6 lg:px-8"},y1={class:"overflow-hidden"},k1={class:"min-w-full text-sm text-left"},M1={class:"font-medium text-black border-b border-gray-400"},Z1=o(()=>t("th",{scope:"col",class:"w-[5%] px-1 py-4 md:px-4 lg:px-6"},"#",-1)),O1=o(()=>t("th",{scope:"col",class:"max-[500px]:w-[45%] px-1 py-4 md:px-4 lg:px-6"},"清單",-1)),S1={scope:"col",class:"max-[500px]:w-[35%] w-[25%] px-1 py-4 md:px-4 lg:px-6"},I1={key:0,class:"-ml-2 text-xs text-success"},j1=o(()=>t("th",{scope:"col",class:"w-[10%] px-0 py-4 md:px-4 lg:px-6"},"數量",-1)),L1={class:"text-black-light"},T1={class:"px-2 py-4 font-medium md:px-4 lg:px-6"},N1={class:"px-1 py-4 md:px-4 lg:px-6"},B1={class:"flex flex-col gap-2 md:gap-8 min-[500px]:flex-row"},U1=["src","alt"],V1={class:"flex flex-col justify-center"},z1={class:"mb-2"},A1={class:"mb-1 mr-1 font-medium text-black lg:text-xl"},q1={key:0,class:"px-2 ml-2 text-[8px] sm:text-[10px] text-white rounded-full font-montserrat op bg-success"},E1=["innerHTML"],F1={class:"px-2 py-4 text-xs tracking-wider max-[500px]:text-center sm:text-left sm:text-sm md:px-4 lg:px-6"},H1=o(()=>t("span",{class:"hidden mr-[2px] sm:inline-block"},"NT ",-1)),K1={class:"px-2 py-4 md:px-4 lg:px-6"},G1={class:"flex items-center"},J1={class:"hidden pl-2 text-sm text-gray-400 sm:inline-block"},P1={class:"text-base font-bold tracking-wider border-t border-gray-200 text-brown-500"},Q1={class:"px-1 py-4 md:px-4 lg:px-6",colspan:"2"},R1={class:"flex items-center justify-between"},W1={class:"text-gray-500"},X1={class:"px-1 py-4 text-center md:text-start md:px-4 lg:px-6",colspan:"3"},Y1={class:"-ml-2 text-sm"};function $1(d,i,h,t2,s,x){const b=u("LoadingAnimation"),w=u("ContactUsModal");return l(),c(C,null,[m(b,{active:s.status.isLoading,"lock-scroll":!0},null,8,["active"]),t("main",N,[B,t("div",U,[t("div",V,[v(t("input",{type:"search",class:"relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:border focus:border-r-0 focus:border-brown-100 focus:outline-none",placeholder:"請輸入訂單編號","aria-label":"Search","onUpdate:modelValue":i[0]||(i[0]=e=>s.orderId=e),onKeyup:i[1]||(i[1]=k(e=>x.getOrderDetails(),["enter"]))},null,544),[[y,s.orderId]]),t("button",{class:"relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800",type:"button",onClick:i[2]||(i[2]=M(e=>x.getOrderDetails(),["prevent"]))},A)])]),Object.keys(this.orderDetails).length!==0?(l(),c("div",q,[t("ul",E,[t("li",F,[t("p",{class:a(["inline-block",s.orderDetails.user.order.status==="收到訂單"?" text-brown-300 font-bold":" text-gray-300"])},"收到訂單",2),t("span",{class:a(["text-base material-symbols-outlined sm:text-2xl",s.orderDetails.user.order.status==="收到訂單"?"text-brown-300 font-semibold move":" text-gray-300"])}," trending_flat ",2)]),t("li",H,[t("p",{class:a(["inline-block",s.orderDetails.user.order.status==="準備中"?" text-brown-300 font-bold":" text-gray-300"])},"準備中",2),t("span",{class:a(["text-base material-symbols-outlined sm:text-xl",s.orderDetails.user.order.status==="準備中"?"text-brown-300 font-semibold move":" text-gray-300"])}," trending_flat ",2)]),t("li",K,[t("p",{class:a(["whitespace-nowrap",s.orderDetails.user.order.status==="已完成（寄出）"?" text-brown-300 font-bold":" text-gray-300"])},"已完成 / 寄出",2),t("span",{class:a(["w-1/4 text-base material-symbols-outlined sm:text-xl",s.orderDetails.user.order.status==="已完成（寄出）"?"text-brown-300 font-semibold move":" text-gray-300"])}," trending_flat ",2)]),t("li",{class:a(["inline-block text-center sm:w-1/6",s.orderDetails.user.order.status==="已取貨"?" text-brown-300 font-bold":" text-gray-300"])},"已取貨",2)]),t("div",G,[t("div",J,[P,t("table",Q,[t("tbody",null,[R,t("tr",W,[X,t("td",Y,r(d.$filters.date(s.orderDetails.create_at)),1)]),t("tr",$,[t1,t("td",e1,r(s.orderDetails.user.name),1)]),t("tr",s1,[r1,t("td",o1,r(s.orderDetails.user.tel),1)]),t("tr",d1,[a1,t("td",i1,r(s.orderDetails.user.email),1)]),t("tr",l1,[c1,t("td",n1,r(s.orderDetails.user.order.pickupMethod==="delivery"?"宅配":"到店自取"),1)]),t("tr",p1,[h1,t("td",x1,r(s.orderDetails.user.address),1)]),t("tr",u1,[m1,t("td",{class:a(["py-4 pr-1 font-medium sm:tracking-wider sm:pr-4",s.orderDetails.user.order.is_paid?"text-success":"text-danger"])},r(s.orderDetails.user.order.is_paid?"已付款":"尚未付款"),3)]),t("tr",C1,[_1,t("td",b1,r(s.orderDetails.message===""?"無":s.orderDetails.message),1)])])])])]),t("div",w1,[g1,t("div",f1,[t("div",D1,[t("div",v1,[t("div",y1,[t("table",k1,[t("thead",M1,[t("tr",null,[Z1,O1,t("th",S1,[n("小計 "),Object.values(s.orderDetails.products).some(e=>e.coupon)?(l(),c("p",I1,r(Object.values(s.orderDetails.products).some(e=>e.coupon)?"（已使用優惠券）":""),1)):p("",!0)]),j1])]),t("tbody",L1,[(l(!0),c(C,null,Z(s.orderDetails.products,(e,e2,g)=>(l(),c("tr",{class:"border-b border-gray-200 hover:bg-neutral-100",key:e.id},[t("td",T1,r(g+1),1),t("td",N1,[t("div",B1,[t("img",{class:"w-full min-[500px]:w-[130px] object-cover",src:e.product.imageUrl,alt:e.product.title},null,8,U1),t("div",V1,[t("div",z1,[t("h4",A1,[n(r(e.product.title)+" ",1),e.product.price!==e.product.origin_price?(l(),c("span",q1,"SALE")):p("",!0)]),t("p",{class:a(["inline-block text-xs tracking-wider text-gray-500",{"line-through":e.product.price!==e.product.origin_price}])},"NT "+r(d.$filters.currency(e.product.origin_price))+" 元 ",3),e.product.price!==e.product.origin_price?(l(),c("p",{key:0,class:a(["inline-block text-xs tracking-wider text-gray-500",{" text-success font-bold ml-2":e.product.price!==e.product.origin_price}])},[n("NT "),t("span",null,r(d.$filters.currency(e.product.price)),1),n(" 元 ")],2)):p("",!0)]),t("div",{innerHTML:e.product.description,class:"hidden lg:block"},null,8,E1)])])]),t("td",F1,[t("p",{class:a({"text-success font-bold":e.total!==e.final_total})},[H1,t("span",null,r(e.total===e.final_total?d.$filters.currency(e.total*e.qty):d.$filters.currency(e.final_total)),1),n(" 元 ")],2)]),t("td",K1,[t("p",G1,[n(r(e.product.qty?e.product.qty:1)+" ",1),t("span",J1,r(e.product.unit),1)])])]))),128))]),t("tfoot",P1,[t("td",Q1,[t("div",R1,[t("p",null,r(Object.keys(s.orderDetails.products).length)+" 個商品",1),t("p",W1,r(s.orderDetails.user.order.pickupMethod==="delivery"?"宅配":"到店自取"),1)])]),t("td",X1,[t("p",null,"共 NT "+r(d.$filters.currency(s.orderDetails.total))+" 元",1),t("p",Y1,r(s.orderDetails.user.order.pickupMethod==="delivery"?"（含運費 80 元）":""),1)])])])])])])])])])):p("",!0)]),m(w)],64)}const l2=f(T,[["render",$1],["__scopeId","data-v-1c406d37"]]);export{l2 as default};
