<template>
    <div class="loge">
        <img :src="logeImg" alt="">
        <span>购物车</span>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                logeImg:"../../img/alogo.png"
            }
        }
    }
</script>

<style scoped>
    .loge{
        margin-bottom: 45px;
    }
    .loge img{
        margin-top: 24px;
    }
    .loge span{
        margin-top: -5px;
    }
</style>