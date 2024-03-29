const host = {
	sat: 'http://www.baidu.com',
	uat: 'http://www.baidu.com',
	dev: 'http://www.baidu.com'
};
module.exports = {
	port: 8823,
	proxy: {
		'(/basic/**)|(/permission/**)|(/trade/**)': {
			target: host.uat,
			changeOrigin: true,
			pathRewrite: {
				'^/basic': ''
			}
		},
	},
	overLay: false,
	autoOpenBrowser: false
}