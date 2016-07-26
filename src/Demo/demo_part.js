/**
 * Created by lsc on 2016/7/25.
 */
import $ from "jquery";
export class Part{
    constructor(){

    }
    testPart(){
        $("#test").on("click",function(){
            alert("run in here");
        });
    }
}