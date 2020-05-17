<template scoped>
  <div>
    <van-swipe-cell ref="productitem">
      <van-row type="flex" justify="center" style="background-color: #fafafa">
        <van-col class="selectitem" span="3">
          <van-checkbox v-model="checked" />
        </van-col>
        <van-col span="21">
          <van-card
            num="1"
            origin-price="1.00"
            price="2.00"
            desc="息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息"
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
            <template #price-top>
              <div class="more"><van-icon name="weapp-nav" @click.stop="showdelete" /></div>
            </template>
          </van-card>
        </van-col>
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
    },
    showdelete(){
      //console.log(this.$refs.productitem);
      this.$refs.productitem.open('right');
    },
  }
};
</script>
<style scoped>
.van-card{
  padding-left: 5px;
}
.delete-button {
    height: 100%;
}
.more{
  position: absolute;
  right: 0px;
  top: 35%;
  font-size: 1rem;
}
.van-card__desc{
  width: 90%;
}
.selectitem{
  margin: auto;
  padding-left: 10px; 
  position: relative;
  left: 15px;
  z-index: 2;
}
</style>