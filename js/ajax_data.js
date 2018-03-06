$(document).ready(function($) {
    var interface_link='http://localhost:8080/vr';
	// $.ajax({
	// 	type: "GET",
	// 	// url: "http://vr.linkedshine.com/f/cms/article/homeCarousel?pageNo&pageSize",
	// 	url: "http://new.soreal.com/js/homeIntro.json",
	// 	data: {},
	// 	dataType: 'json',
	// 	contentType: 'application/json',
	// 	success: function(data){
	// 		// console.log(data);

	// 		$.each(data,function(i,n){
	// 			$('#myCarousel .carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
	// 			$('#myCarousel .carousel-inner').append('<div class="item active"><img src="'+n.image+'"/></div>');
				
	// 		});
	// 	}
 //    });
    $.ajax({  
        //请求方式  
        type:"GET",  
        //文件位置  
        url:interface_link+"/f/cms/article/homeCarousel?pageNo&pageSize",  
        //返回数据格式为json,也可以是其他格式如  
        dataType: "json",  
        //请求成功后要执行的函数，拼接html  
        success: function(data){  
        	// console.log(data);
         //    var str="<ul>";  
         //    $.each(data.list[0].manage,function(i,n){  
         //        str+="<li>"+n.tool+"</li>";  
         //    });  
         //    str+="</ul>";  
         //    $("div").append(str);  
         console.log(data.flagCode);
   //       	$.each(data.result,function(i,n){
			// 	$('#myCarousel .carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
			// 	$('#myCarousel .carousel-inner').append('<div class="item active"><img src="'+n.image+'"/></div>');
				
			// });
        }  
    });
});