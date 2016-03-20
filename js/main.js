require.config({
       baseUrl: 'js/libs',

　　　　paths: {
　　　　　　jquery: 'jquery-1.7.2.min',
            math:'math',
            datePicker:'jquery-ui-1.9.2.custom.min'
　　　　}
});
//调用JQ
require(['jquery'], function($) {
   
   $("#ele").html("hello")
});

//调用不依赖任何库的方法
require(['math'], function (math){
console.info(math.myAdd(1,1));
}); 

//调用一个插件依赖于JQ
define(['jquery',"datePicker"],function(){

    $("#datepicker").datepicker();
    $('#ele2').html("hello2")

});


//alert(333)
