<template scoped>
    <div style="background-color: #f7f8fa;height:100vh">
        <van-cell v-if="addressItem===null" is-link class="selfaddress" @click="showAddress">
            <template #title>
                <van-button square type="default" icon="plus"/>
                <span style="padding-left: 10px;">添加地址</span>
            </template>
        </van-cell><!--没有地址 -->
        <van-cell v-else is-link class="selfaddress" @click="showAddress">
            <template #title>
                <span style="font-size:16px;font-weight:bold;">{{addressItem.Name}}</span>
                <span style="font-weight:bold;">{{addressItem.Mobile}}</span>
            </template>
            <template #label>
                <span><van-icon name="map-marked" /></span>
                <span>{{addressItem.Address}}</span>
            </template>
        </van-cell>
        <van-card
          num="2"
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
        <div style="margin-top:10px">
            <van-cell title="贴心服务(选填)" is-link @click="showService">
                <template #title>
                    <span style="font-weight: bold;">贴心服务</span>
                    <span style="color:gray;">(选填)</span>
                </template>
                <template #default>
                    <div class="van-info">{{result.length==0?"":result.length.toString()}}</div>
                </template>
            </van-cell>
        </div>
        <van-cell class="remark">
            <template #title>
                <span style="font-weight: bold;">备注留言</span>
                <span style="color:gray;">(选填)</span>
            </template>
        </van-cell>
        <van-field
            v-model="message"
            rows="5"
            autosize
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
            >
            </van-field>
        <van-action-sheet v-model="show" title="贴心服务选择">
            <div class="content">
                <van-checkbox-group v-model="result">
                    <van-checkbox name="a">家里有老人，地板不要有水渍，防止滑倒</van-checkbox>
                    <van-checkbox name="b">家里有小孩，避免使用刺激性清洗剂</van-checkbox>
                    <van-checkbox name="c">家里有宠物，注意毛发清洁</van-checkbox>
                    <van-checkbox name="e">平时不做饭，厨房简单打扫，重点打扫其他区域</van-checkbox>
                    <van-checkbox name="f">平时要上班，尽量安排周末上门</van-checkbox>
                </van-checkbox-group>
            </div>
        </van-action-sheet>
        <van-action-sheet v-model="showaddress" title="服务地址">
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
                @select="onSelect"
                />
        </van-action-sheet>
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" button-type="default"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:"",
            show:false,
            showaddress:false,
            result:[],
            addressItem:null,
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
        }
    },
    methods:{
        onSubmit(){},
        showAddress(){
            this.showaddress=true;
        },
        showService(){
            this.show=true;
        },
        onAdd() {
            this.$router.push("/addressedit");
        },
        onEdit(item, index) {
            this.$router.push("/addressedit");
            //Toast("编辑地址:" + index);
        },
        onSelect(item) {
            // this.list.forEach(function(value, index) {
            //     if (value.id == item.id) {
            //     value.isDefault = true;
            //     } else {
            //     value.isDefault = false;
            //     }
            // });
            this.addressItem={};
            this.addressItem.Name=item.name;
            this.addressItem.Mobile=item.tel;
            this.addressItem.Address=item.address
            this.showaddress=false;
            console.log(item);
        }
    }
}
</script>

<style scoped>
.selfaddress::before{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
    background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
    background-size: 80px;
    content: '';
}
.selfaddress>>>.van-cell__right-icon{
    margin-top: 10px;
}
.van-card{
    background-color: #fff;
}
.van-info{
    top: 13px;
    right: 9px;
    min-width: 20px;
    line-height: 18px;
    background-color: #2eb2a1;
}
.van-checkbox{
    font-size: 14px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f7f8fa;
}
.van-action-sheet__header{
    border-bottom: 1px solid #f7f8fa;
    margin-bottom: 10px;
}
.van-checkbox-group{
    margin: 0 10px;
}
.remark::after{
    border-bottom:0px;
}
.van-field>>>.van-field__control{
    border-radius: 5px;
    border: 1px solid #f7f8fa;
}
.van-tag--danger {
  background-color: #2eb2a1;
}
.van-button--danger {
  background-color: #2eb2a1;
  border: 1px solid #2eb2a1;
}
.van-radio>>>.van-radio__icon{
    display: none;
}
</style>