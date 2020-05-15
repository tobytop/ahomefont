<template scoped>
  <div>
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(image, index) in showImage" :key="index">
        <img v-lazy="image" @click="gotoProduct" />
      </van-swipe-item>
    </van-swipe>
    <div class="fristsell">
      <van-tabs color="#40b89c">
        <van-tab>
          <template #title>
            <div class="leftbanner" style="font-weight: bold;font-size:16px">
              <span class="fristsell-icon">
                <i class="iconfont">&#xe66b;</i>
              </span>
              包月保洁
            </div>
          </template>
          <div class="homebar">
            <van-cell
              style="font-weight:bold"
              title="套餐时长"
              value=""
              is-link
              size="large"
            />
            <van-cell
              style="font-weight:bold"
              title="服务时长"
              value=""
              is-link
              size="large"
            />
            <div class="showtitle">[包月保洁]服务介绍</div>
            <div class="topprice">
              <span class="orginprice">¥999</span>
              <span class="nowprice">¥599</span>
            </div>
            <van-button type="primary" round block color="#ff9602" @click="showbuy"
              >立即下单</van-button
            >
          </div>
        </van-tab>
        <van-tab>
          <template #title>
            <div style="font-weight: bold;font-size:16px">
              <span class="fristsell-icon">
                <i class="iconfont">&#xe683;</i>
              </span>
              钟点保洁
            </div>
          </template>
          <div class="homebar">
            <van-cell
              style="font-weight:bold"
              title="套餐时长"
              value=""
              is-link
              size="large"
            />
            <van-cell
              style="font-weight:bold"
              title="服务时长"
              value=""
              is-link
              size="large"
            />
            <div class="showtitle">[钟点保洁]服务介绍</div>
            <div class="topprice">
              <span class="orginprice">¥999</span>
              <span class="nowprice">¥599</span>
            </div>
            <van-button type="primary" round block color="#ff9602" @click="showbuy"
              >立即下单</van-button
            >
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <img class="ad" v-lazy="img" />
    <div style="height: 10px;background-color: #ebedf0;"></div>
    <div>
      <van-panel>
        <template #header>
          <div class="van-cell van-panel__header">
            <div
              class="van-cell__title"
              style="font-weight:bold;padding-top:4px"
            >
              热门推荐
            </div>
            <div class="van-cell__value van-panel__header-value">
              <van-button size="small" plain style="color: rgb(64, 184, 156);"
                >更多服务></van-button
              >
            </div>
          </div>
        </template>
        <div>
          <div style="width:50%;float:left;">
            <van-image
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200323175023342.jpg"
            />
          </div>
          <div style="width:50%;float:right;">
            <span>
              <van-image
                src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191223145218859.jpg"
              />
            </span>
            <span>
              <van-image
                style="margin-top:-5px;margin-bottom:2px"
                src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092309978.jpg"
              />
            </span>
          </div>
        </div>
        <div>
          <div style="width:50%;float:left;">
            <van-image
              style="margin-top:-4px;"
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092309978.jpg"
            />
            <van-image
              style="margin-top:-4px;"
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200323175105644.jpg"
            />
            <van-image
              style="margin-top:-5px;"
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092351009.jpg"
            />
          </div>
          <div style="width:50%;float:right;">
            <van-image
              style="margin-top:-5px;"
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200323175105644.jpg"
            />
            <van-image
              style="margin-top:-4px;"
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200323175143978.jpg"
            />
            <van-image
              style="margin-top:-5px;"
              src="https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092357995.jpg"
            />
          </div>
        </div>
      </van-panel>
    </div>
    <van-image src="http://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092405308.jpg" />
    <van-divider style="margin-bottom: 60px;">已经到底了</van-divider>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :disable-stepper-input="true"
      :hide-stock="sku.hide_stock"
    >
      <template slot="sku-header-origin-price" slot-scope="slotProps">
        <div style="text-decoration:line-through;font-size:13px;color:#969799;">{{slotProps.originPrice}}</div>
      </template>
      <template #sku-messages></template>
      <template #sku-stepper><div></div></template>
      <div class="van-sku-actions" slot="sku-actions">
        <button class="van-button van-button--danger van-button--large">
          <span class="van-button__text">加入购物车</span>
        </button>
        <button
          class="van-button van-button--large"
          style="background-color:#2eb2a1;color:#fff;"
        >
          <span class="van-button__text">立即购买</span>
        </button>
      </div>
    </van-sku>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      goodsId: "",
      packageTime: "",
      seviceTime: "",
      img:
        "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092147309.png",
      img1:
        "http://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20191213092405308.jpg",
      showImage: [
        "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200323153913477.png",
        "https://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20181016141239984.jpg"
      ],
      sku: {
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "频率", // skuKeyName：规格类目名称
            v: [
              {
                id: "30350", // skuValueId：规格值 id
                name: "一周一次" // skuValueName：规格值名称
              },
              {
                id: "1216",
                name: "一周两次"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            origin_price:300,
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30350", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 3000 // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId，下单时后端需要
            price: 200, // 价格（单位分）
            origin_price:300,
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1216", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId，下单时后端需要
            price: 200, // 价格（单位分）
            origin_price:300,
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30350", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId，下单时后端需要
            price: 200, // 价格（单位分）
            origin_price:300,
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1216", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        origin_price:"100.00",
        stock_num: 227, // 商品总库存
        collection_id: 30349, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: true // 是否隐藏剩余库存
      },
      goods: {
        picture:
          "https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg"
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    };
  },
  methods: {
    gotoProduct(){
      this.$router.push("/product");
    },
    showbuy() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 510px;
  padding-bottom: 22px
}
.fristsell-icon{
  position: relative;
  left:0px;
  font-size: 20px;
}
.ad {
  width: 100%;
  height: 80px;
  /* margin-bottom: 5px; */
  position: absolute;
  top: 450px;
}
.fristsell {
  position: absolute;
  top: 160px;
  left: 10px;
  right: 10px;
}
.showtitle {
  margin-left: 13px;
  margin-top: 10px;
  color: #2eb2a1;
}
.topprice {
  float: right;
  margin: 10px 12px;
}
.orginprice {
  color: #969799;
  display: inline;
  font-size: 13px;
  text-decoration: line-through;
}
.nowprice {
  font-size: 27px;
  color: #ff9602;
}
.van-tabs >>> .van-tabs__wrap {
  border-radius: 10px 10px 0 0;
  margin: 0 25px;
}
.van-tabs >>>.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
  border-width:0;
}
.van-tabs >>>.van-tab--active{
  color: #2eb2a1;
}
.homebar {
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  border-radius: 10px;
}
.van-cell__value>>>.van-button--default{
  background-color:#fff;
}
.homebar>>>.van-button__text{
  font-size: 1.2em;
}
</style>