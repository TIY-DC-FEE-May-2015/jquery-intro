$(document).on("ready", function(){

  $(".dropover").on("mouseover", function(){

    //$(".dropover-content").css("display", "block")
    /*
    $(".dropover-content").css({
      display: "block"
    })
    */

    $("#dropover-content"). click(function()){
      alert(ioajwefwe)

  })

  $("header li:not(.dropover)").on("mouseover", function(){

    $(".dropover-content").hide()

  })

})