define('WFX', ['jquery', 'layer', 'laytpl', 'message', 'fastclick', 'host', 'axios.min','lodash.min'], function($, layer, laytpl, message, fastclick, host, axios,_) {
	fastclick.attach(document.body);
	var common = {
		ajax: function(option) {
			//设置默认值并用逗号隔开
			var defaults = {
				type: "get",
				url: "",
				hideLayer: false, //是否隐藏加载态
				jsonParam: false, //是不是用JSON字符串发送参数
				data: "",
				dataType: "json",
				contentType: "application/json",
				async: true,
				headers: {},
				callback: $.noop(),
				beforeSend: $.noop(),
				success: $.noop()
			}
			var option = $.extend(defaults, option);
			if(option.jsonParam) {
				option.data = JSON.stringify(option.data)
			}
			
			if(!option.hideLayer) {
				layer.open({
					type: 2,
					shadeClose: false,
					content: '加载中'
				});

			}
			axios.defaults.baseURL = host.api;
			axios.defaults.headers.common['Authorization'] = "lxl";
			axios.defaults.headers.post['Content-Type'] = 'application/json';
			var _axios = axios.request({
				url: option.url,
				method: option.type,
				timeout: 1000,
				responseType: option.dataType,
				headers: option.headers,
				params: option.data,
				responseType: 'json' // default
			})

			.catch(function(error) {
				console.log(error.config);
				layer.closeAll();
			});
			if(option.success) {
				_axios.then(function(response) {
					option.success(response.data);
					if(!option.hideLayer) {
						layer.closeAll();
					}
				})
			} else {
				return _axios;
			}
		},
		ajaxAll: function(optoin, success, tips) {
			axios.all(optoin)
				.then(
					axios.spread(function() {
						// 上面两个请求都完成后，才执行这个回调方法
						success(arguments);
						if(!tips) {
							layer.closeAll();
						}

					})

				);

		},
		functionWait:function(f,t){
			return _.debounce(f,t);
		}
	}
	return common;

	if(!host.debugger) {
		window.console = {
			log: function(data) {

			},
			info: function(data) {

			},
			error: function(data) {

			}
		}
	}

})