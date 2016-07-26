/**
 * Created by lsc on 2016/7/26.
 */
require("./SubPage1.scss");//由于该文件不是入口点文件，所以在这个地方引入的样式文件都会被重写到入口点的样式文件当中。
export class SubPage1{
    init(){
        console.log("run in here");
    }
}
//在这里需要注意的是：当使用import方式来进行引用的时候，需要添加default关键字；而当使用require.ensure方法来进行延时加载时，则不需要添加default关键字