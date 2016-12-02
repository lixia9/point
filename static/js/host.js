
'use strict';

define("host", function (argument) {
    var urlObj = {
        dev: {
            api: '//10.6.75.23:8020/fis',
            appId:'arch-ssoclientapp-forh5-yqjk',
            debugger:true
        },
        test: {
            api: 'http://10.25.25.25:8090/'
        },
        release: {
            api: 'http://gateway.111.com.cn/'
        }
    };
    var environment = 'dev';
    return urlObj[environment];
});
