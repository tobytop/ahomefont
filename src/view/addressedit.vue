<template scoped>
  <div>
    <van-nav-bar
      title="新增地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :address-info="AddressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "../../static/area";
export default {
  data() {
    return {
      areaList,
      AddressInfo: {
        id: 1,
        name: "test",
        tel: "112321231",
        province: "浙江省",
        city: "宁波市",
        county: "海曙区",
        addressDetail: "lalal",
        areaCode: "330203",
        isDefault: true
      },
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    onSave() {
      this.$router.go(-1);
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
.van-address-edit >>> .van-button--danger {
  background-color: #2eb2a1;
  border: 1px solid #2eb2a1;
}
</style>