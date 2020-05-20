<template scoped>
  <div style="background-color:#f7f8fa;min-height:100vh;">
    <van-search v-model="keyword" shape="round" placeholder="请输入搜索关键词">
      <template #left-icon>
        <div></div>
      </template>
      <template #right-icon>
        <div class="search-divid"></div>
        <div>
          <van-icon name="search" color="#2eb2a1" size="20" />
        </div>
      </template>
    </van-search>
    <van-row class="maincatalog">
      <van-col span="5">
        <van-sidebar v-model="activeKey" class="leftcatalog">
          <van-sidebar-item title="全部" />
          <van-sidebar-item title="保洁服务" />
          <van-sidebar-item title="家电清洗" />
        </van-sidebar>
      </van-col>
      <van-col
        span="19"
        type="flex"
        justify="space-between"
        class="rightcatalog"
      >
        <van-image
          style="margin-left:12px;margin-right:10px;"
          radius="4"
          src="http://ahome.oss-cn-hangzhou.aliyuncs.com/Product/20200323154325174.jpg"
        />
        <div v-for="(item, key) in catalogitem" :key="key">
          <div class="catalogtitle">保洁服务{{ item }}</div>
          <van-grid square :column-num="3" :gutter="10">
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
              <div class="catalogitem">包月保洁</div>
            </van-grid-item>
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              <div class="catalogitem">包月保洁</div>
            </van-grid-item>
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
              <div class="catalogitem">包月保洁</div>
            </van-grid-item>
          </van-grid>
          <div class="divid"></div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      activeKey: 0,
      catalogitem: ["a", "b", "c", "d", "e", "f"]
    };
  }
};
</script>

<style scoped>
.maincatalog {
  margin-bottom: 50px;
  padding-top: 55px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.leftcatalog {
  position: fixed;
  width: 50%;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
}
.rightcatalog {
  background-color: #fff;
  padding-top: 10px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
}
.van-search {
  border-bottom: 1px solid #ebedf0;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 1000;
}
.search-divid {
  position: absolute;
  height: 24px;
  border-left: 1px solid #dcdfe3;
  right: 26px;
}
.van-sidebar-item {
  padding: 21px 0.55rem;
}
.catalogtitle {
  font-size: 14px;
  margin: 3px 0 2px 12px;
  font-size: 0.85rem;
}

.catalogitem {
  font-size: 0.85rem;
}
.divid {
  height: 10px;
  background-color: #f7f8fa;
}
</style>
