<template>
  <van-tabs color="#40b89c" v-model="activeName">
    <van-tab title="已支付" name="a">
      <van-card
            num="1"
            origin-price="1.00"
            price="2.00"
            desc="息描述描述信息述信息"
            title="商品标题1"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #num>
              <span style="font-size:14px;">共计:</span>
              <span style="font-size:12px;margin-left:4px;color:#ee0a24;">¥</span>
              <span style="font-size:12px;color:#ee0a24;">
                <span style="font-size:16px;">20</span>
                .00</span>
            </template>
        </van-card>
    </van-tab>
    <van-tab title="待支付" name="b">
      <van-card
            num="1"
            origin-price="1.00"
            price="2.00"
            desc="息描述描述信息述信息"
            title="商品标题2"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #num>
              <span style="font-size:14px;">共计:</span>
              <span style="font-size:12px;margin-left:4px;color:#ee0a24;">¥</span>
              <span style="font-size:12px;color:#ee0a24;">
                <span style="font-size:16px;">20</span>
                .00</span>
            </template>
      </van-card>
    </van-tab>
    <van-tab title="已完成" name="c">
      <van-card
            num="1"
            origin-price="1.00"
            price="2.00"
            desc="息描述描述信息述信息"
            title="商品标题3"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #num>
              <span style="font-size:14px;">共计:</span>
              <span style="font-size:12px;margin-left:4px;color:#ee0a24;">¥</span>
              <span style="font-size:12px;color:#ee0a24;">
                <span style="font-size:16px;">20</span>
                .00</span>
            </template>
      </van-card>
    </van-tab>
  </van-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  }
};
</script>