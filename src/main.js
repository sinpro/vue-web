import Vue from 'vue';
import App from './app.vue';
import router from './router';

import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// demo环境
if(isMockEnv){
	const mock = require('../mock');
	mock.mockXHR();
}
// css入口
import './style/index.scss';
console.log(ENV_CONFIG,'000000')

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);