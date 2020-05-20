<template scoped>
  <div>
    <van-swipe-cell
      v-for="(item, key) in productlist"
      ref="productitem"
      :key="key"
    >
      <van-row type="flex" justify="center" style="background-color: #fafafa">
        <van-col class="selectitem" span="3">
          <van-checkbox v-model="item.ischecked" />
        </van-col>
        <van-col span="21">
          <van-card
            num="1"
            origin-price="1.00"
            price="2.00"
            desc="息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息息描述描述信息述信息"
            :title="'商品标题' + item.title"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #num>
              <span style="font-size:14px;">共计:</span>
              <span style="font-size:12px;margin-left:4px;color:#ee0a24;"
                >¥</span
              >
              <span style="font-size:12px;color:#ee0a24;">
                <span style="font-size:16px;">20</span>
                .00</span
              >
            </template>
            <template #price-top>
              <div class="more">
                <van-icon name="weapp-nav" @click.stop="showdelete(key)" />
              </div>
            </template>
          </van-card>
        </van-col>
      </van-row>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-divider style="margin-bottom: 110px;">已经到底了</van-divider>
    <van-submit-bar
      style="bottom:50px;"
      :price="3050"
      button-text="提交订单"
      button-type="default"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="checkproduct">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      productlist: [
        { title: "a" },
        { title: "b" },
        { title: "c" },
        { title: "d" },
        { title: "e" },
        { title: "f" }
      ]
    };
  },
  methods: {
    onclick(e) {
      console.log(e);
    },
    onSubmit() {
      this.$router.push("/orderpage");
    },
    showdelete(key) {
      this.$refs.productitem[key].open("right");
    },
    checkproduct() {
      var canchecked = this.checked;
      this.productlist.forEach(item => {
        this.$set(item, "ischecked", canchecked);
      });
    }
    // checkproductone() {
    //   let allchecked = true;
    //   for (let index = 0; index < this.productlist.length; index++) {
    //     if (!this.productlist[index].ischecked) {
    //       this.checked = false;
    //       allchecked = false;
    //       break;
    //     }
    //   }
    //   if (allchecked) {
    //     this.checked = true;
    //   }
    // }
  }
};
</script>
<style scoped>
.van-card__thumb {
  margin-right: 0px;
}
.van-divider {
  margin: 5px 0px;
}
.van-card {
  padding-left: 5px;
}
.delete-button {
  height: 100%;
}
.more {
  position: absolute;
  right: 0px;
  top: 35%;
  font-size: 1rem;
}
.van-card__desc {
  width: 90%;
}
.selectitem {
  margin: auto;
  padding-left: 10px;
  position: relative;
  left: 15px;
  z-index: 2;
}
</style>