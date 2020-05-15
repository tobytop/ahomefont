<template scoped>
  <div>
    <van-nav-bar
      title="地址管理"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressedit");
    },
    onEdit(item, index) {
      this.$router.push("/addressedit");
      //Toast("编辑地址:" + index);
    },
    onClickLeft() {
      this.$router.push("/user");
    },
    onClickRight() {
      Toast("按钮");
    },
    onSelect(item) {
      this.list.forEach(function(value, index) {
        if (value.id == item.id) {
          value.isDefault = true;
        } else {
          value.isDefault = false;
        }
      });
      //console.log(this.list);
    }
  }
};
</script>

<style scoped>
.van-tag--danger {
  background-color: #2eb2a1;
}
.van-button--danger {
  background-color: #2eb2a1;
  border: 1px solid #2eb2a1;
}
</style>