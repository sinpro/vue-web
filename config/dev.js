const host = {
	sat: 'http://www.baidu.com',
	uat: 'http://www.baidu.com',
	dev: 'http://www.baidu.com'
};
module.exports = {
	token:'56665656xxxxx',
	port: 8823,
	proxy: {
		'(/basic/**)|(/permission/**)|(/trade/**)': {
			target: host.uat,
			changeOrigin: true,
			pathRewrite: {
				'^/basic': ''
			}
		},
		"/cbnew": {
			target: "localhost:8080", // fat测试环境
			changeOrigin: true,
			pathRewrite: {
				"^/cbnew": "/"
			}
		},
	},

	overLay: false,
	autoOpenBrowser: false
}