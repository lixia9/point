define("message",function($){
    var message={
         common:{
         	netError:"对不起网络错误",
         	success:"你的请求接收成功！！！",
         	beginAjax:"请稍等",
			unLogin :"您尚未登录，请您先到个人中心登录",
			noMoreProducts : "没有更多产品",
			loginError:"登录验证失败"
         },
         index:{
         	
         },
         //登录注册相关提示
         login_register_msg:{
         	prompt_1:"请输入正确的手机号",
         	prompt_2:"请输入短信验证码",
         	prompt_3:"请输入密码",
         	prompt_4:"请输入手机号",
         	prompt_5:"验证码错误，请重新输入",
         	prompt_6:"请输入图片验证码",
         	prompt_7:"验证码发送成功，请注意查收"
         },
         
         personal_msg:{
         	account_type:"获取用户身份失败",
         }
      }
    
    return message;
})
