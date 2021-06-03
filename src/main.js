import Vue from 'vue';
import App from './app.vue';
import router from './router';

import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// css入口
import './style/index.scss';

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);