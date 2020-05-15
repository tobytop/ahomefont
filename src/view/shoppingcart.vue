<template scoped>
  <div>
    <van-swipe-cell>
      <van-row type="flex" justify="center" style="background-color: #fafafa">
        <van-col style="margin: auto;padding-left: 15px;" span="3">
          <van-checkbox v-model="checked" />
        </van-col>
        <van-col span="21">
          <van-card
            num="1"
            origin-price="1.00"
            price="2.00"
            desc="息描述描述信息述信息"
            title="商品标题"
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
        </van-col>
        <!-- <div style="position:absolute;right:10px;top:35px;">
          <van-icon size="25" name="clear" color="#ee0a24" />
        </div> -->
      </van-row>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
  </van-swipe-cell>
    
    <van-submit-bar
      style="bottom:52px;"
      :price="3050"
      button-text="提交订单"
      button-type="default"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  },
  methods: {
    onclick(e){
      console.log(e);
    },
    onSubmit() {
      this.$router.push("/orderpage")
    }
  }
};
</script>
<style scoped>
.delete-button {
    height: 100%;
}
</style>