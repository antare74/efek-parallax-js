var nilai = 0;
var arah = "";

$(window).scroll(function(){
    var nScroll = $(this).scrollTop();
    if ( nilai < nScroll){
        nilai = nScroll;
        arah = "down";
    }else if (nilai > nScroll){
        nilai = nScroll;
        arah = "up";
    }

    if (nScroll > $('#move').offset().top-100){
        $('move h1').css({
            'left':nScroll/4
        });
        $('.frame').css({
            'left':nScroll/4
        });
    }

});