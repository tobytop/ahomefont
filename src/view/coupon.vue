<template scoped>
  <div style="background-color:#f7f8fa;height:100vh">
      <van-search
        v-model="keyword"
        shape="round"
        show-action
        placeholder="请输入优惠券号码"
        @search="onSearch"
        >
        <template #left-icon>
            <div></div>
        </template>
        <template #action>
            <div style="color: #40b89c;" @click="onSearch">确认兑换</div>
        </template>
    </van-search>
    <van-row class="conpoumain">
      <van-col class="conpou-left" span="4">
        <div>
            <span style="font-size: .7rem">￥</span>
            <span style="font-size: 1.5rem;font-weight: bold">20</span>
        </div>
        <div style="font-size:.8rem;">满500</div>
      </van-col>
      <van-col class="conpou-middle" span="1">
      </van-col>
      <van-col style="text-align:left;padding:10px;position:relative;top:3px;" span="13">
            <div style="color: #333;font-weight: bold;padding-bottom: 5px;">包月续费-立减券</div>
            <div style="font-size: 13px;color:gray;padding-bottom:5px;">
                有效期至：2020.05.08
            </div>
            <div class="conpou-inner-detail">适用范围：包月保洁、新居保洁、企业保洁、包年保洁</div>
        </van-col>
      <van-col
        class="conpou-right"
        span="6"
      >
        <div style="padding-top:29px;color:#fff;">查看</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            keyword:""
        }
    },
    methods:{
        onSearch(){

        }
    }
}
</script>

<style scoped>
.conpoumain{
    background-color: #fff;
    margin: 10px;
    border-radius: 5px;
}
.conpou-middle{
    border-right: 1px dashed rgb(223, 218, 218);
    height: 79px;
    margin-top: 9px;
}
.conpou-left{
    text-align:center;
    color:#40b89c;
    padding-left:10px;
    padding-top: 23px;
}
.conpou-right{
    text-align:center;
    padding-top: 5px;
    padding-bottom: 10px;
    background-color: #2eb2a1;
    height: 96px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: relative;
}
.conpou-right:before{
  content: '';
  display: block;
  width: 8px;
  height: 100%;
  background-size: 8px 8px; /* 一个repeat的大小 */
  background-repeat: repeat-y;
  background-image: radial-gradient(#fff 2px, transparent 2px);
  position: absolute;
  top: 0;
}
.conpou-right:before {
  left: -3px; /* 半圆，只显示一个repeat的一半 */
}
.conpou-inner-detail{
    font-size: 13px;
    color: gray;
    display: inline-block;
    white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow:ellipsis;
}
</style>