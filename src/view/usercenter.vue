<template>
  <div style="min-height:100vh;background-color:#ebedf0;">
    <van-image
      width="100%"
      src="http://wechat.ahome365.com/Content/images/UserBj.png"
      style="background-color: #fff;display: block;"
    />
    <div class="mainhead">
      <van-image
        style="border: 2px solid #fff;"
        round
        width="5rem"
        height="5rem"
        src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLiaXJoibYibF4LgfJXpziaj0gOLxCWVvEf92f9t0sAOhXQ58gKRLG5YbtVVq7dvU4bXChnqzAQlfsw9A/132"
      />
      <div class="username">
        帝力
      </div>
      <div class="userid">
        用户ID：15447
      </div>
    </div>
    <van-row style="padding-top: 10px;background-color: #fff;">
      <van-col style="text-align:center;" span="8">
        <div style="color: #ff9602;font-weight: bold;">1</div>
        <div style="font-size: 13px;color: gray;">优惠券</div>
      </van-col>
      <van-col
        style="border-right: 1px solid rgb(223, 218, 218);height: 29px;margin-top: 3px;"
        span="1"
      >
      </van-col>
      <van-col style="text-align:center" span="7"
        ><div style="color: #40b89c;font-weight: bold;">1.00</div>
        <div style="font-size: 13px;color: gray;">我的余额</div></van-col
      >
      <van-col
        style="text-align:center;padding-top: 5px;padding-bottom: 10px;"
        span="8"
      >
        <van-button type="default" round size="small">充值</van-button>
      </van-col>
    </van-row>
    <div style="height: 20px;"></div>
    <div style="padding: 0 10px 20px 10px;">
      <van-cell
        style="border-radius: 5px;"
        title="我的订单"
        is-link
        @click="onClick"
      >
        <template #icon>
          <van-icon
            name="balance-list"
            size="23"
            color="#40b89c"
            style="margin-right:8px"
          />
        </template>
      </van-cell>
    </div>
    <div style="padding: 0 10px 20px 10px;">
      <van-cell style="border-radius: 5px;" title="我的砍价" is-link
        ><template #icon>
          <span style="font-size: 23px;color: #40b89c;margin-right: 9px;margin-left: 6px;margin-top: -2px;">
            <i class="iconfont">&#xe6bb;</i>
          </span>
        </template>
      </van-cell>
    </div>
    <div style="padding: 0 10px 20px 10px;">
      <van-cell
        style="border-radius: 5px;"
        title="地址管理"
        is-link
        @click="gotoAddress"
        ><template #icon>
          <van-icon
            name="location"
            size="23"
            color="#40b89c"
            style="margin-right:8px"
          />
        </template>
      </van-cell>
    </div>
    <div style="padding: 0 10px 20px 10px;">
      <van-cell style="border-radius: 5px;" title="我的推广" is-link
        ><template #icon>
          <van-icon
            name="qr"
            size="23"
            color="#40b89c"
            style="margin-right:8px"
          />
        </template>
      </van-cell>
    </div>
    <div style="padding: 0 10px 20px 10px;">
      <van-cell style="border-radius: 5px;" title="我的优惠券" is-link @click="gotoCoupon"
        ><template #icon>
          <van-icon
            name="coupon"
            size="23"
            color="#40b89c"
            style="margin-right:8px"
          />
        </template>
      </van-cell>
    </div>
    <div style="padding: 0 10px 20px 10px;margin-bottom:50px;">
      <van-cell
        style="border-radius: 5px;"
        title="联系我们"
        is-link
        value="0574-88888888"
        ><template #icon>
          <van-icon
            name="service"
            size="23"
            color="#40b89c"
            style="margin-right:8px"
          />
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
import eventbus from "@/util/eventbus";
export default {
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$router.push("/order");
      eventbus.$emit("changetab", 3);
    },
    gotoAddress() {
      this.$router.push("/addresslist");
    },
    gotoCoupon(){
      this.$router.push("/coupon");
    }
  }
};
</script>
<style>
.showuserhead {
  height: 363px;
  background-image: url("http://wechat.ahome365.com/Content/images/UserBj.png");
  background-size: cover;
  background-position: center;
}
.username {
  padding-top: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}
.userid {
  font-size: 12px;
  color: #fff;
}
.mainhead {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 27px;
  margin-left: -34px;
}
</style>