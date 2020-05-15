// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem, Tab, Tabs, Icon, Form, Cell, CellGroup, Button, Sku, Panel,
  Image as VanImage, Sidebar, SidebarItem, Grid, GridItem, Col, Row, Search, SubmitBar, Checkbox, CheckboxGroup,
  Card, AddressList, Toast, NavBar, Tag, AddressEdit, Area,Field,ActionSheet,Divider,SwipeCell,GoodsAction, GoodsActionIcon, GoodsActionButton,Loading 
} from "vant";

Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Loading);
Vue.use(GoodsAction);
Vue.use(SwipeCell);
Vue.use(Divider);
Vue.use(ActionSheet);
Vue.use(Field);
Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(Tag);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(AddressList);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(VanImage);
Vue.use(Panel);
Vue.use(Sku);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
