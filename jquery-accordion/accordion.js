$(document).on("ready", function(){ 

  
  $(".tab").each(function(index, tab){
    
    var $tab = $(tab)
    $tab.attr("data-tab", index)

    $( $(".content")[index] ).attr('data-tab', index)
  })
 
  $(".tab").on("click", function(){
    
    $(".tab").removeClass("active")

    $(this).addClass("active")

  })
  $(".tab:eq(0), .content:eq(0)").addClass("active")


})

