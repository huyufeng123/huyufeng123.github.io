<template>
    <div id="gouwu">
        <myloge></myloge>
        <mymain></mymain>
        <myfooter></myfooter>
    </div>
</template>

<script>
    import myloge from './myloge.vue'
    import mymain from './mymain.vue'
    import myfooter from './myfooter.vue'
    export default{
        components:{
            myloge,
            mymain,
            myfooter
        }
    }
</script>

<style>
 *{
     padding:0;
     margin:0;
     box-sizing: border-box;
 }
    #gouwu{
        width: 990px;
        height: 843px;
        margin: auto;
    }
</style>