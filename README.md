#路由
##
###轻量级的ajax路由

####注册路由
    point.reg('a', function() {
			console.log("1")
				
		}).reg('b', function(o) { //o可以是参数
			console.log(o)
				
		}).reg(['c', 'd'], function() { 
			console.log("3")
		}).reg('e', function() {
			console.log("4")
		});

###主动调用路由
    point.go('b/hello');