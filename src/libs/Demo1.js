/**
 * Created by lsc on 2016/7/21.
 */
import $ from "jquery";
require("../styles/Demo1/Demo1.scss");

$('body').append("this is a test");
setTimeout(function(){
    $('body').append("run in here");
},1000);
