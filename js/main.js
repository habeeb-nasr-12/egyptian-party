
let navBarWidth = $(".mynav-bar").width()

function resetOpenIcon(){
    $(".Open-icon").animate({"left" :"0px"},1000)
}

$(".Open-icon").click(function(){
    if ($(".mynav-bar").css("left")=="0px"){
        $(".mynav-bar").animate({"left" : -navBarWidth},1000)
   resetOpenIcon()
        
     
 }
else{
    $(".mynav-bar").animate({"left" : "0px"},1000);
    $(".Open-icon").animate({"left" : navBarWidth},1000);
}
 
})

$(".exit-icon").click(function(){
    $(".mynav-bar").animate({"left" : -navBarWidth},1000);
    resetOpenIcon()

    

})

$(".links a").click(function(){

    var currentLink= $(this).attr("href")

   if ($(currentLink).offset() != undefined){
    
    var elementOffSet = $(currentLink).offset().top;
     $("html,body").animate({scrollTop : elementOffSet},500)
   }
   
    


}) 


$(".Detials h3").click(function(){

    $(this).next().slideToggle(500)
    $(".Detials div").not($(this).next()).slideUp(500)
})


$(document).ready(
    function() {
   
        countDownToTime("10 october 2023 9:56:00");
      }
) 

  function countDownToTime(countTo) {
  
        let futureDate =new Date(countTo)
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`<h3>${days} D</h3>`);
    $(".hours").html(`<h3>${hours} H</h3>`);
    $(".mintues").html(`<h3>${mins} m</h3>`);
    $('.Secondes').html(`<h3>${secs} s</h3>`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


  let maxCharacterLength=100
  $("form textarea").keyup(function(){
   
  let textvaluelength = $(this).val().length
  let charactersLeft= maxCharacterLength-textvaluelength
  if(charactersLeft==0 || charactersLeft < 0){
    $("form p span").html("your available character finished")
    $("form .btn").fadeOut()
   
    

  }
  else{
    $("form p span").html(`${charactersLeft}`)
    $("form .btn").fadeIn()
   



  }
  




  })