/**
 * Created by lsc on 2016/7/25.
 */
require("../common/styles/reset.css");
require("./demo1.scss");
$('body').append("this is a demo");
require.ensure([],function(require){
    var ModulePart = require("babel!./demo_part");
    new ModulePart.Part().testPart();
},"Demo/part");