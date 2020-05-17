<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
/* .van-sku-header__img-wrap {
  position: absolute;
  top: -38px;
} */
.van-sku-header__goods-info {
  min-height: auto;
  margin-left: 105px;
}
/* .van-popup--bottom.van-popup--round {
  border-radius: 0px;
} */
.van-sku-messages {
  padding-bottom: 0px;
}
.van-sidebar-item--select::before {
  background-color: #2eb2a1;
  height: 42px;
}
.van-sidebar-item--select {
  border-color: #2eb2a1;
}
.van-button--default,
.van-submit-bar__button,
.van-checkbox__icon--checked .van-icon {
  background-color: #2eb2a1;
  border-color: #2eb2a1;
  color: #fff;
}
.van-nav-bar__text,
.van-nav-bar .van-icon {
  color: #2eb2a1;
}
/* .van-card {
  padding-left: 0px;
} */
.van-switch--on,
.van-address-item .van-radio__icon--checked .van-icon {
  background-color: #2eb2a1;
  border-color: #2eb2a1;
}
.van-sku-row__item--active{
  color: #fff;
  background-color: #2eb2a1;
}
.van-sku-container{
  min-height:0%;
}
.van-sku-row__title{
  font-weight: bold;
}
.van-submit-bar{
  border-top: 1px solid #f2f6fb;
}
.van-goods-action{
  border-top: 1px solid #f5f5f5;
}

@font-face {
  font-family: 'iconfont';  /* project id 1797994 */
  src: url('//at.alicdn.com/t/font_1797994_dfniujyukhf.eot');
  src: url('//at.alicdn.com/t/font_1797994_dfniujyukhf.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1797994_dfniujyukhf.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1797994_dfniujyukhf.woff') format('woff'),
  url('//at.alicdn.com/t/font_1797994_dfniujyukhf.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1797994_dfniujyukhf.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>