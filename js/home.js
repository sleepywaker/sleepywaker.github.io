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
const note1={
    template:loadTemp('#no1')
}
const note2={
    template:loadTemp('#no2')
}
const note3={
    template:loadTemp('#no3')
}
const note4={
    template:loadTemp('#no4')
}
const note5={
    template:loadTemp('#no5')
}
const note6={
    template:loadTemp('#no6')
}
const note7={
    template:loadTemp('#no7')
}
const note8={
    template:loadTemp('#no8')
}
const note9={
    template:loadTemp('#no9')
}
//路由
const routes=[
    {
        path:'/home',
        component:Home,
        children:[
            {path:'1',component:note1},
            {path:'2',component:note2},
            {path:'3',component:note3},
            {path:'4',component:note4},
            {path:'5',component:note5},
            {path:'6',component:note6},
            {path:'7',component:note7},
            {path:'8',component:note8},
            {path:'9',component:note9},
        ]
    },
    {
        path:'/joke',
        component:Joke
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'*',
        redirect:'/home'
    }
]
//创建Vuerouter实例
const router=new VueRouter({
    routes
})
//创建和挂载根实例
const app=new Vue({
    router
}).$mount('#app')
