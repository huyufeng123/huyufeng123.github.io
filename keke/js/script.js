Vue.component('mydiv',{
    props:["mp","name"],
    template:`
<div>
    <a v-for="list in lists">
        <span class="img"><img :src="list.mp" alt=""></span>
        <span class="name">{{list.name}}</span>
    </a></div>`,
    data:function(){
        return{
            lists:[
                {mp:"img/16.jpg",name:"女友礼物"},
                {mp:"img/17.jpg",name:"男友礼物"},
                {mp:"img/18.jpg",name:"女生礼物"},
                {mp:"img/19.jpg",name:"男生礼物"},
                {mp:"img/20.jpg",name:"情人节礼物"},
                {mp:"img/21.jpg",name:"圣诞节礼物"},
                {mp:"img/22.jpg",name:"个性定制"},
                {mp:"img/23.jpg",name:"水晶礼品"},
                {mp:"img/24.jpg",name:"新奇特礼物"},
                {mp:"img/25.jpg",name:"打火机"},
                {mp:"img/26.jpg",name:"男士钱包"},
                {mp:"img/27.jpg",name:"创意杯子"},
                {mp:"img/28.jpg",name:"女士手链"},
                {mp:"img/29.jpg",name:"老婆礼物"},
                {mp:"img/30.jpg",name:"老公礼物"}
            ]
        }
    }
})
var app1 = new Vue({
    el:"#app1"
})
Vue.component('mydiv2',{
    props:["mp","name"],
    template:`
<div>
    <a v-for="list in lists">
        <span class="img"><img :src="list.mp" alt=""></span>
        <span class="name">{{list.name}}</span>
    </a></div>`,
    data:function(){
        return{
            lists:[
                {mp:"img/16.jpg",name:"电子教育"},
                {mp:"img/17.jpg",name:"播放器"},
                {mp:"img/18.jpg",name:"游戏机"},
                {mp:"img/19.jpg",name:"相机"},
                {mp:"img/20.jpg",name:"鼠标键盘"},
                {mp:"img/21.jpg",name:"音响"},
                {mp:"img/22.jpg",name:"耳机"},
                {mp:"img/23.jpg",name:"U盘"},
                {mp:"img/24.jpg",name:"充电宝"}
                
            ]
        }
    }
})
var app1 = new Vue({
    el:"#app2"
})
Vue.component('mydiv3',{
    props:["mp","name"],
    template:`
<div>
    <a v-for="list in lists">
        <span class="img"><img :src="list.mp" alt=""></span>
        <span class="name">{{list.name}}</span>
    </a></div>`,
    data:function(){
        return{
            lists:[
                {mp:"img/16.jpg",name:"女士围巾"},
                {mp:"img/17.jpg",name:"男士围巾"},
                {mp:"img/18.jpg",name:"手机壳"},
                {mp:"img/19.jpg",name:"皮带"},
                {mp:"img/20.jpg",name:"儿童包"},
                {mp:"img/21.jpg",name:"男士配饰"},
                {mp:"img/22.jpg",name:"女表"},
                {mp:"img/23.jpg",name:"男表"},
                {mp:"img/23.jpg",name:"儿童手表"},
                {mp:"img/24.jpg",name:"钥匙扣"},
                {mp:"img/25.jpg",name:"化妆镜"},
                {mp:"img/26.jpg",name:"男包"},
                {mp:"img/27.jpg",name:"女包"},
                {mp:"img/28.jpg",name:"内衣袜"},
                {mp:"img/29.jpg",name:"梳子"},
                {mp:"img/30.jpg",name:"打火机"},
                {mp:"img/30.jpg",name:"丝巾"},
                
            ]
        }
    }
})
var app1 = new Vue({
    el:"#app3"
})