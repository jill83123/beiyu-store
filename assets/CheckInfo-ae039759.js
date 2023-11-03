import{_ as v,m as I,b as V,r as c,o as l,c as r,e as n,w as g,d as e,F as C,i as T,h as d,g as i,n as m,t as u,k as _,v as h,f as z}from"./index-8e713a6f.js";import{O as E,_ as $}from"./double-tail-clip-bed46a61.js";import{c as x}from"./cartStore-c0a293f6.js";import"./tw-elements.es.min-5f64f089.js";import"./swalMixin-8b7e2e5f.js";const P={data(){return{}},computed:{...I(x,["cartList","cartTotalPrice","status","finalTotalPrice","userInfo"])},methods:{...V(x,["getCartList","updateCurrentStep","pushUserInfo","useCoupon"]),isTel(s){return/^(09[0-9]{8}|0[0-9]{9})$/.test(s)?!0:"請填寫正確的電話號碼"},toPay(){this.userInfo.user.order.is_paid=void 0,this.pushUserInfo(this.userInfo),this.$router.replace("/checkout/pay")}},created(){this.updateCurrentStep(2),this.getCartList(),this.userInfo.user.order.pickupMethod===void 0&&this.$router.replace("/checkout/cart")},components:{OrderRules:E}},L={"data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true",class:"container w-full mb-16 sm:mb-12 xl:10/12 2xl:w-7/12"},U=e("div",{class:"flex items-center"},[e("span",{class:"mr-1 material-symbols-outlined"}," keyboard_double_arrow_left "),i("返回上一步 ")],-1),N={class:"flex flex-col-reverse gap-8 lg:flex-row lg:gap-0"},j={class:"relative w-full lg:pr-2 lg:w-1/2"},F=e("img",{class:"absolute -top-3 right-10",src:$,alt:"tail-clip"},null,-1),M={class:"flex gap-2 mb-4"},S={class:"relative w-1/2"},q=e("label",{for:"name",class:"block mb-1"},[i("收件人姓名 "),e("span",{class:"text-danger"}," * ")],-1),O={key:0,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-danger"},R={key:1,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-success"},B={class:"relative w-1/2"},D=e("label",{for:"tel",class:"block mb-1"},[i("收件人電話 "),e("span",{class:"text-danger"}," * ")],-1),A={key:0,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-danger"},G={key:1,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-success"},H={class:"relative mb-4"},J=e("label",{for:"mail",class:"block mb-1"},[i("E-mail"),e("span",{class:"text-danger"}," *")],-1),K={key:0,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-danger"},Q={key:1,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-success"},W={class:"relative mb-4"},X=e("label",{for:"address",class:"block mb-1"},[i("地址"),e("span",{class:"text-danger"}," *")],-1),Y={key:0,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-danger"},Z={key:1,class:"absolute bottom-[12%] right-2 material-symbols-outlined text-success"},ee={class:"mb-4"},se=e("label",{for:"message",class:"block mb-1"},"留言",-1),te={class:"mb-10"},oe=e("label",{for:"coupon",class:"block mb-1"},"優惠券",-1),le={class:"relative flex flex-wrap items-stretch"},re={key:0,class:"absolute mr-1 text-success material-symbols-outlined z-10 right-[105px] lg:right-[22%] top-[20%]"},ae={key:1,class:"absolute text-danger z-10 right-[110px] top-[20%] flex items-center text-sm"},ne=e("span",{class:"mr-1 material-symbols-outlined"}," info ",-1),ie=["disabled"],de={class:"w-full lg:pl-2 lg:w-1/2"},ue={class:"bg-[rgb(255,255,255,0.95)] rounded-md border"},ce={class:"px-2 py-4 text-black-light"},me=e("div",{class:"flex pb-3 pl-2 mb-2 border-b-2 border-gray-300 border-dotted"},[e("h4",{class:"mr-1"},"購物車列表")],-1),pe={key:0,class:"flex flex-col pb-3 mb-2 cart-list h-[473px] overflow-y-auto"},be={class:"flex items-center w-1/4 aspect-square grow"},fe=["src","alt"],ge={class:"flex flex-col justify-between w-3/4 px-2 grow"},_e={class:"flex items-center justify-between"},he={class:"inline-block font-medium text-base sm:text-lg truncate max-w-[90%]"},xe={class:"inline-block text-sm"},ye={class:"flex items-center justify-between"},ke={class:"text-xs text-gray-400"},we={class:"text-sm sm:text-base"},ve={class:"flex justify-between px-2 pt-4 mt-3 border-t-2 border-gray-300 border-dotted"},Ie={key:0,class:"z-10 flex items-center text-sm text-success"},Ve=e("span",{class:"mr-1 material-symbols-outlined"}," check_circle ",-1),Ce={key:1,class:"z-10 flex items-center text-sm text-danger"},Te=e("span",{class:"mr-1 material-symbols-outlined"}," info ",-1),ze={class:"font-bold tracking-wider text-end"},Ee={key:0,class:"text-success"};function $e(s,o,Pe,Le,Ue,f){const y=c("RouterLink"),p=c("VField"),b=c("ErrorMessage"),k=c("VForm"),w=c("OrderRules");return l(),r("div",L,[n(y,{to:"/checkout",class:"inline-block mb-4"},{default:g(()=>[U]),_:1}),e("div",N,[e("div",j,[F,n(k,{class:"px-5 border rounded-md pt-9 pb-7 bg-neutral-100",onSubmit:o[7]||(o[7]=t=>f.toPay())},{default:g(({errors:t})=>[e("div",M,[e("div",S,[q,n(p,{type:"text",class:m(["m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none",{"border-danger":t.姓名,"border-neutral-300":!t.姓名}]),placeholder:"請輸入姓名",name:"姓名",id:"name",rules:"required",modelValue:s.userInfo.user.name,"onUpdate:modelValue":o[0]||(o[0]=a=>s.userInfo.user.name=a)},null,8,["class","modelValue"]),n(b,{class:"absolute right-0 text-sm text-danger",name:"姓名"}),t.姓名?(l(),r("span",O," error ")):!t.姓名&&s.userInfo.user.name?(l(),r("span",R,"check_circle")):d("",!0)]),e("div",B,[D,n(p,{type:"tel",class:m(["m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none",{"border-danger":t.電話,"border-neutral-300":!t.電話}]),placeholder:"請輸入電話",name:"電話",id:"tel",rules:f.isTel,modelValue:s.userInfo.user.tel,"onUpdate:modelValue":o[1]||(o[1]=a=>s.userInfo.user.tel=a)},null,8,["class","rules","modelValue"]),n(b,{class:"absolute right-0 text-sm text-danger",name:"電話"}),t.電話?(l(),r("span",A," error ")):!t.電話&&s.userInfo.user.tel?(l(),r("span",G,"check_circle")):d("",!0)])]),e("div",H,[J,n(p,{type:"email",class:m(["m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none",{"border-danger":t["E-mail"],"border-neutral-300":!t["E-mail"]}]),placeholder:"請輸入E-mail",name:"E-mail",id:"mail",rules:"email|required",modelValue:s.userInfo.user.email,"onUpdate:modelValue":o[2]||(o[2]=a=>s.userInfo.user.email=a)},null,8,["class","modelValue"]),n(b,{class:"absolute right-0 text-sm text-danger",name:"E-mail"}),t["E-mail"]?(l(),r("span",K," error ")):!t["E-mail"]&&s.userInfo.user.email?(l(),r("span",Q,"check_circle")):d("",!0)]),e("div",W,[X,n(p,{type:"text",class:m(["m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none disabled:bg-neutral-100 disabled:text-gray-600",{"border-danger":t.地址,"border-neutral-300":!t.地址}]),placeholder:"請輸入地址",name:"地址",id:"address",rules:"required",modelValue:s.userInfo.user.address,"onUpdate:modelValue":o[3]||(o[3]=a=>s.userInfo.user.address=a),disabled:s.userInfo.user.order.pickupMethod==="self"},null,8,["class","modelValue","disabled"]),n(b,{class:"absolute right-0 text-sm text-danger",name:"地址"}),t.地址?(l(),r("span",Y," error ")):!t.地址&&s.userInfo.user.address?(l(),r("span",Z,"check_circle")):d("",!0)]),e("div",ee,[se,_(e("textarea",{type:"text",class:"min-h-[100px] resize-none m-0 block w-full rounded border border-solid border-neutral-300 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none",placeholder:"若是有任何需求都可以留言備註唷！",id:"message","onUpdate:modelValue":o[4]||(o[4]=a=>s.userInfo.message=a)},null,512),[[h,s.userInfo.message]])]),e("div",te,[oe,e("div",le,[_(e("input",{type:"text",class:"relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none border-r-0",placeholder:"輸入優惠券編號",id:"coupon","onUpdate:modelValue":o[5]||(o[5]=a=>s.userInfo.couponCode=a)},null,512),[[h,s.userInfo.couponCode]]),e("button",{type:"button",class:"rounded-r border-2 border-solid border-brown-300 text-brown-300 px-5 py-[6px] text-center text-sm font-normal leading-[1.6] hover:bg-brown-300 hover:text-white hover:border-brown-300 bg-neutral-50",id:"coupon",onClick:o[6]||(o[6]=z(a=>s.useCoupon(s.userInfo.couponCode),["prevent"]))},"點我套用"),s.status.coupon&&s.userInfo.couponCode?(l(),r("span",re," check_circle ")):s.userInfo.couponCode?(l(),r("p",ae,[ne,i(" 未套用 ")])):d("",!0)])]),e("button",{type:"submit",class:"z-10 flex items-center px-8 py-2 ml-auto text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80 disabled:bg-gray-300",disabled:Object.keys(t).length!==0||s.userInfo.user.address===""||s.userInfo.user.email===""||s.userInfo.user.name===""||s.userInfo.user.tel===""},"前往結帳 ",8,ie)]),_:1})]),e("div",de,[e("div",ue,[e("div",ce,[me,s.cartList&&s.cartList.length>=1?(l(),r("ul",pe,[(l(!0),r(C,null,T(s.cartList,t=>(l(),r("li",{class:"flex gap-2 py-3 pl-4",key:t.id},[e("a",be,[e("img",{class:"object-cover",src:t.product.imageUrl,alt:t.product.title},null,8,fe)]),e("div",ge,[e("div",_e,[e("h4",he,u(t.product.title),1),e("p",xe,"x "+u(t.qty)+" "+u(t.product.unit),1)]),e("div",ye,[e("span",ke,"單價 NT "+u(s.$filters.currency(t.product.price))+" 元",1),e("span",we,"NT "+u(s.$filters.currency(t.final_total))+" 元",1)])])]))),128))])):d("",!0),e("div",ve,[s.status.coupon&&s.userInfo.couponCode?(l(),r("p",Ie,[Ve,i("已套用優惠券")])):(l(),r("p",Ce,[Te,i("尚未套用優惠券")])),e("p",ze,[i("共 NT "),e("span",{class:m({"line-through text-sm text-gray-400 mr-2":s.finalTotalPrice!==s.cartTotalPrice&&s.status.coupon})},u(s.$filters.currency(s.cartTotalPrice)),3),s.finalTotalPrice!==s.cartTotalPrice&&s.status.coupon?(l(),r("span",Ee,u(s.$filters.currency(s.finalTotalPrice)),1)):d("",!0),i(" 元")])])])])])]),n(w)])}const qe=v(P,[["render",$e]]);export{qe as default};