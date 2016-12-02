require.config({
	baseUrl: '../static/js',
	shim:{
		"dropload":["jquery"],
		"qrcode":["jquery"],
		  "axios.min":["promise"]       
	},
	paths: {
		"jquery": ["jquery-2.1.0", "//cdn.bootcss.com/jquery/3.0.0/jquery"],
		
		"swiper": ["swiper.min"]
	}
})
