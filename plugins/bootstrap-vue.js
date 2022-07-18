import Vue from "vue";
import { BPagination, NavbarPlugin, TabsPlugin, PopoverPlugin, ModalPlugin, SidebarPlugin, ToastPlugin, FormDatepickerPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component("b-pagination", BPagination);
Vue.use(NavbarPlugin);
Vue.use(TabsPlugin);
Vue.use(PopoverPlugin);
Vue.use(ModalPlugin);
Vue.use(SidebarPlugin);
Vue.use(ToastPlugin);
Vue.use(FormDatepickerPlugin);
