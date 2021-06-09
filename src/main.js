import Vue from 'vue';
import App from './app.vue';
import router from './router';

import ElementUI from 'element-ui';
import store from './store';
import 'src/tools/style/theme/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import customCompt from 'src/components/index.js'
Vue.use(customCompt)

// demo环境
if(isMockEnv){
	const mock = require('../mock');
	mock.mockXHR();
}
// css入口
import './style/index.scss';

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);