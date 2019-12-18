// 사용자 스크립트
$(function(){
    var win=$(window);
   $(".tgl_btn").click(function(){
      $(".nav").fadeIn(500);
   });

   $(".close_btn").click(function(){
      $(".nav").fadeOut(500);
   });
   win.resize(function(){
        if(win.innerWidth()>960){
            $(".nav").show();
        }else{
            $(".nav").hide();
        }
    })

    var banBtn01=$("#banner01");
    var banBtn02=$("#banner02");
    var banBtn03=$("#banner03");

    var ban01=$(".banner01");
    var ban02=$(".banner02");
    var ban03=$(".banner03");

   banBtn01.click(function(){
       ban01.slideDown(500);
       ban02.hide();
       ban03.hide();
    });
   banBtn02.click(function(){
        ban01.hide();
        ban02.slideDown(500);
        ban03.hide();
    });
   banBtn03.click(function(){
        ban01.hide();
        ban02.hide();
        ban03.slideDown(500);
    });
});