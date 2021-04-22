$(document).ready(function() {
    $("div#design").click(function(){
    $("div#content").toggle();
    $("div#design").toggle();
  })

    $("div#content").click(function(){
    $("div#content").toggle();
    $("div#design").toggle();
  })

  $("div#dev").click(function(){
    $("div#dev-content").toggle();
    $("div#dev").toggle();
  })
  $("div#dev-content").click(function(){
    $("div#dev-content").toggle();
    $("div#dev").toggle();
  })

  $("div#product").click(function(){
    $("div#prod-content").toggle();
    $("div#product").toggle();
  })
  $("div#prod-content").click(function(){
    $("div#prod-content").toggle();
    $("div#product").toggle();
  })

  $("#col-1").hover(function() {
    $("#text1").fadeTo("slow",1);
    $("#work1").fadeTo("slow",0.4);
    },function() {
      $("#text1").fadeTo("slow",0);
      $("#photo1").fadeTo("slow",1);
    });
    $("#col-2").hover(function() {
      $("#text2").fadeTo("slow",1);
      $("#work2").fadeTo("slow",0.4);
    },function() {
      $("#text2").fadeTo("slow",0);
      $("work2").fadeTo("slow",1);
    });
    $("#col-3").hover(function() {
      $("#text3").fadeTo("slow",1);
      $("#work3").fadeTo("slow",0.4);
    },function() {
      $("#text3").fadeTo("slow",0);
      $("work3").fadeTo("slow",1);
    });
    $("#col-4").hover(function() {
      $("#text4").fadeTo("slow",1);
      $("#work4").fadeTo("slow",0.4);
    },function() {
      $("#text4").fadeTo("slow",0);
      $("work4").fadeTo("slow",1);
    });
    $("#col-5").hover(function() {
      $("#text5").fadeTo("slow",1);
      $("#work5").fadeTo("slow",0.4);
    },function() {
      $("#text5").fadeTo("slow",0);
      $("work5").fadeTo("slow",1);
    });
    $("#col-6").hover(function() {
      $("#text6").fadeTo("slow",1);
      $("#work6").fadeTo("slow",0.4);
    },function() {
      $("#text6").fadeTo("slow",0);
      $("work6").fadeTo("slow",1);
    });
    $("#col-7").hover(function() {
      $("#text7").fadeTo("slow",1);
      $("#work7").fadeTo("slow",0.4);
    },function() {
      $("#text7").fadeTo("slow",0);
      $("work7").fadeTo("slow",1);
    });
    $("#col-8").hover(function() {
      $("#text8").fadeTo("slow",1);
      $("#work8").fadeTo("slow",0.4);
    },function() {
      $("#text8").fadeTo("slow",0);
      $("work8").fadeTo("slow",1);
    });

  $('.submit').click(function () {
    var Name = $('#mce-FNAME').val();
    var Email = $('#mce-EMAIL').val();
    var Message = $('#mce-MESSAGE');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please make sure you have filled in the form correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
});
});
