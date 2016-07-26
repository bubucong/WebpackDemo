/**
 * Created by lsc on 2016/7/25.
 */
require("../common/styles/reset.css");
require("./mainPage.scss");
require('imports?$=jquery!../common/libs/jquery.pjax');
//import SubPage1 from "../SubPages/SubPage1/SubPage1";
$(".TabBtn").on("click",function(){
    var index = $(this).data("index");
    switch(index){
        case 1:
            $.pjax({
                url: '../SubPages/SubPage1/SubPage1.html',
                container: '#MainBody',
                timeout:10000,
                type:"get",
                fragment:"body"
            });
            $("#MainBody").on("pjax:success",function(){
                require.ensure([],function(require){
                    var SP1Module = require("../SubPages/SubPage1/SubPage1.js");//在这里需要将对象导出到一个模块对象中，之后再进行类的初始化
                    new SP1Module.SubPage1().init();
                },"SubPages/SubPage1/SubPage1");
                //new SubPage1().init();
            });
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
    }
})
