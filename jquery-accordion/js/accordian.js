$(document).on("ready", function() {
	$(".sec-head").on("click", function() {
		var $content =$(this).next();

		$(".content").hide(600).removeClass("active");
		$content.show(600).addClass("active");
	});
})