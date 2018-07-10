//基本模块
function loadTemp(tempId){
    return document.querySelector(tempId).innerHTML
}
const Home={
    template:loadTemp('#home')
}
const Joke={
    template:loadTemp('#joke')
}
const About={
    template:loadTemp('#about')
}
//路由
const routes=[
    {path:'/home',component:Home},
    {path:'/joke',component:Joke},
    {path:'/about',component:About},
    {path:'*',redirect:'/home'}
]
//创建Vuerouter实例
const router=new VueRouter({
    routes
})
//创建和挂载根实例
const app=new Vue({
    router
}).$mount('#app')