<template>
  <div style="padding-bottom:47px;">
      <van-image lazy-load v-for="(item,index) in images" v-bind:key="index" :src="item" >
            <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
      </van-image>
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" @click="gotoHome" />
        <van-goods-action-icon icon="shopping-cart-o" :badge="badge" text="购物车" @click="onClickIcon" />
        <van-goods-action-button
            type="danger"
            text="加入购物车"
            @click="onClickButton"
        />
        <van-goods-action-button
            type="default"
            @click="onClickButton"
        >
            <template #default>
                <div class="buynowfrist">立即购买</div>
                <div class="buynowsecord">已售2214单</div>
            </template>
        </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            badge:"1",
            images:[
                "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200430090335288.jpg",
                "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200430090338550.jpg",
                "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200430090341762.jpg",
                "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200430090344840.jpg"
            ]
        }
    },
    methods:{
        gotoHome(){
            this.$router.push("/");
        },
        onClickIcon() {
            Toast('点击图标');
        },
        onClickButton() {
            Toast('点击按钮');
        },
    }
}
</script>

<style>
.buynowfrist{
    line-height: 22px;
    font-size: 15px;
}
.buynowsecord{
    line-height: 12px;
    font-size: 9px;
}
</style>