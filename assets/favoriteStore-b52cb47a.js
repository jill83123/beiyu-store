import{J as o,S as e}from"./index-28469c10.js";const r=o("favorite",{state:()=>({favorite:JSON.parse(localStorage.getItem("favorite"))||[]}),getters:{isFavorite(){return this.favorite.length>0}},actions:{toggleFavorite(s){const t=this.favorite.findIndex(i=>i.id===s.id);t===-1?(this.favorite.push(s),e.methods.showSwalToast("success","加入收藏")):t>=0&&e.methods.showSwalCheck("warning","真的要取消收藏嗎",()=>{e.methods.showSwalToast("success","取消收藏"),this.favorite.splice(t,1)}),localStorage.setItem("favorite",JSON.stringify(this.favorite))}}});export{r as f};
