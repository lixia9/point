/*var Browser="";*/
require(['WFX', 'host'], function(_x, host) {
	var data = {};

	function a() {
		return  _x.ajax({
			url: "test/json/index.json",
			headers: {
				"a": "a"
			},
			data: data
		});
		
	}
	function b() {
		return  _x.ajax({
			url: "test/json/index.json",
			headers: {
				"b": "b"
			},
			data: data
		});
	}
	function c() {
		 _x.ajax({
			url: "test/json/index.json",
			headers: {
				"c": "c"
			},
			data: data,
			hideLayer:true,
			success:function(data){
				console.log(data)
			}
		});
	}
	var index = {
		age: 12,
		init: function() {
			data.name = "lxl";
			this.getData();
			this.bindEvent();
		},
		getData: function() {
			//a 和 b方法执行结束之后在执行c方法 a 和b方法执行的结果在data中是一个 list
			_x.ajaxAll([a(), b()],function(data){
				console.log(data);
				alert(data[0].data.name)
			     	c();
			},false)
		},
		bindEvent: function() {
        document.getElementById("testAjax").addEventListener("click", _x.functionWait(c,400))
		}
	}
	index.init();
});

