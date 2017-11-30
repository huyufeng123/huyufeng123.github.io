<template>
    <div class="main">
        <div class="main-top">
            <h4>{{text1}} {{lietall}}</h4>
            <div>
                <ul>
                    <li v-for="list in lists">{{list.name}}</li>
                </ul>
            </div>
        </div>
        <div class="main-middle">
            <div v-for="(lie,index) in lies" class="shang">
               <div class="aa">
                   <div class="sp-left">
                        <img :src="lie.mainImg1" alt="">
                    </div>
                    <div class="sp-right">
                        <i v-show="lie.icon1" class="jp"></i>
                        <i v-show="lie.icon2" class="sx"></i>
                        <span>{{lie.text3}}</span>
                    </div>
               </div>
               <div class="yan">
                   <span>颜色：{{lie.color}}</span>
               </div>
               <div class="dan">
                    <span>￥{{lie.price}}</span>
               </div>
               <div class="shu">
                    <input type="number" v-model="lie.number">
                    <p>{{ lie.stock > 0 ? '有货' : '没货'}}</p>
               </div>
               <div class="xiao">
                    <h5>￥{{lie.price * lie.number}}</h5>
                    <p>{{lie.weight * lie.number}}kg</p>
               </div>
               <div class="cao">
                    <a @click="e(index)" href="#">{{lie.text9}}</a>
               </div>
            </div>
        </div>
        <div class="foot">
            <p>总价：<a href="">{{priceall}}</a></p>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                text1:"全部商品",
                lists:[
                    {name:"商品"},
                    {name:"名称"},
                    {name:"单价"},
                    {name:"数量"},
                    {name:"小计"},
                    {name:"操作"}
                ],
                lies:[
                    
                    {id:0,
                     mainImg1:"../../img/orange.jpg",
                     icon1:true,
                     icon2:true,
                     text3:"美伦达 赣南脐橙 2017新上市 3斤装 铂金果",
                     color:"赣南脐橙铂金果 3斤装 ",
                     price:"25.80",
                     number:1,
                     stock:100,
                     weight:"1.68",
                     text9:"删除"},
                    
                    {id:1,
                     mainImg1:"../../img/blueberry.jpg",
                     icon1:false,
                     icon2:true,
                     text3:"Camposol 秘鲁进口精选蓝莓  单盒约125g 新鲜水果",
                     color:"秘鲁蓝莓 4盒装",
                     price:"46.90",
                     number:1,
                     stock:100,
                     weight:"1.25",
                     text9:"删除"},
                    
                    {id:2,
                     mainImg1:"../../img/mango.jpg",
                     icon1:false,
                     icon2:true,
                     text3:"欢乐果园 广西青皮芒果 2个装 单果约260g以上 新鲜水果",
                     color:"青皮芒 2粒 尝鲜装",
                     price:"10.90",
                     number:1,
                     stock:100,
                     weight:"0.75",
                     text9:"删除"},
                    
                    {id:3,
                     mainImg1:"../../img/pear.jpg",
                     icon1:false,
                     icon2:true,
                     text3:"爱奇果 新疆库尔勒香梨 约2.5kg 当季新果 特级装 单果约120-",
                     color:"2.5kg单果约120-150g",
                     price:"39.90",
                     number:1,
                     stock:100,
                     weight:"2.6",
                     text9:"删除"},
                    
                    {id:4,
                     mainImg1:"../../img/apple.jpg",
                     icon1:false,
                     icon2:true,
                     text3:"宏辉果蔬 苹果 烟台红富士12个 单果约75mm 总重约2.1kg 新鲜",
                     color:"12粒75mm红富士",
                     price:"34.90",
                     number:1,
                     stock:100,
                     weight:"2.1",
                     text9:"删除"}
                    
                ]
            }
        },
        computed: {
            lietall(){
                return this.lies.length
            },
            
            priceall () {
            var all = 0
            for (var i = 0; i < this.lies.length; i++) {
              var one = Number(this.lies[i].price)
              var num = Number(this.lies[i].number)
              all += one * num
            }
            // 如果小数点末尾数量小于2，则在末尾加一个0
            var len = all.toString().split(`.`)[1].length
            if (len < 2) {
              return all + `0`
            }
            return all
          } 
            
            
            
        },
        methods:{
            e:function(i){
                if(confirm(`确定删除？`)){
                    this.lies.splice(i,1)
                }
                
            }    
        }
            
    }
</script>


<style scoped>
    .main-top h4{
        color: #e02f37;
        font-size: 16px;
        border-bottom: 1px solid #dd373b;
        width: 80px;
        padding-bottom: 8px;
    }
    .main-top ul{
        height: 45px;
        border: 1px solid #e9e9e9;
        border-bottom-color: #a8a9ab;
        border-top-color: #e1e1e1;
        line-height: 45px;
        padding-left:10px;
        background: #f3f3f3;
        
    }
    .main-top li{
        float: left;
        list-style: none;
        font-size: 12px;
        color: #6a686d;
    }
    .main-top li:nth-of-type(1){
        margin-right: 95px;
    }
    .main-top li:nth-of-type(2){
        margin-right: 440px;
    }
    .main-top li:nth-of-type(3){
        margin-right: 65px;
    } 
    .main-top li:nth-of-type(4){
        margin-right: 103px;
    }
    .main-top li:nth-of-type(5){
        margin-right: 40px;
    }
    .main-middle{
        background:#fef4e8;
        border: 1px solid #f3efec;
        border-top-color: #ababab;
    }
    .shang{
        height: 123px;
        margin-left: 21px;
        margin-right: 15px;
        border-bottom: 1px solid #f5eee4;
        padding-top: 15px;
        padding-bottom: 23px;
        
    }
    .shang:nth-of-type(5){
        border-bottom: none;
        padding-bottom: 0px;
    }
    .sp-left img{
        width: 82px;
        height: 82px;
        border: 1px solid #edecf2;
    }
    .sp-left{
        display: inline-block;
        float: left;
    }
    .sp-right{
        width: 203px;
        margin-left: 10px;
        display: inline-block;
    }
    a{
        text-decoration: none;
    }
    .shang a{
        display: inline-block;
        width: 57px;
        height: 16px;
        font-size: 12px;
        float: left;
    }
    .sp-right i{
        background-image: url(../../img/aicon.png);
        display: inline-block;
    }
    .sp-right .jp{
        background-position: -1px -276px;
        width: 57px;
        height: 16px;
    }
    
    .sp-right .sx{
        background-position: -1px -300px;
        width: 48px;
        height: 16px;
    }
    .sp-right span{
        font-size: 12px;
        position: relative;
        top: -3px;
    }
    .aa{
        display: inline-block;
        float: left;
    }
    .yan{
        width: 172px;
        padding-left: 16px;
        float: left;
        font-size: 12px;
    }
    .dan{
        float: left;
        font-size: 10px;
        margin-left: 88px;
    }
    .shu{
        float: left;
        margin-left: 50px;
    }
    .shu input{
        width: 46px;
        height: 22px;
        border: 1px solid #ccc8c5;
        display: inline-block;
        text-align: center;
    }
    .shu p{
       
        text-align: center;
    }
    p{
         font-size: 12px;
    }
    .xiao{
        float: left;
        margin-left: 78px;
        text-align: right;
    }
    .cao{
        margin-left: 38px;
        float: left;
        font-size: 12px;
    }
    .cao a{
        color: #706464;
    }
    .foot{
        height: 52px;
        border: 1px solid #f0f0f0;
        margin-top: 20px;
        line-height: 50px;
        text-align: right;
        padding-right: 30px;
    }
    .foot a{
        color: #e8343d;
        font-size: 20px;
    }
</style>