<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" active-color="#40b89c">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/catalog">服务</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :badge="badge" to="/shoppingcart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="bill-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import eventbus from "@/util/eventbus";

export default {
  data() {
    return {
      active: 0,
      badge: "1"
    };
  },
  mounted() {
    eventbus.$on("changetab", this._changeTab);
    switch (this.$route.path) {
      case "/":
        this.active = 0;
        break;
      case "/catalog":
        this.active = 1;
        break;
      case "/shoppingcart":
        this.active = 2;
        break;
      case "/order":
        this.active = 3;
        break;
      case "/user":
        this.active = 4;
        break;
    }
  },
  methods: {
    _changeTab(e) {
      this.active = e;
    }
  }
};
</script>