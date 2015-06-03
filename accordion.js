$(document).ready(function(){
	$(".tab-1").click(function(){
		$(".tab-content").toggle()
		$(".tab-content1 , tab-content2").hide()

		
	})

	$(".tab-2").click(function(){
		$(".tab-content1").toggle()
		$(".tab-content, tab-content2").hide()
	})


	$(".tab-3").click(function(){
		$(".tab-content2").toggle()
		$(".tab-content , tab-content1").hide()
	})


})
