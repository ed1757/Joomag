$(document).ready(function(){
    if($(window).width() <= 320){
        $('#logo_joomag').attr('src', 'images/joomag-love-wework-mobile.svg');   
    } else {
        $('#logo_joomag').attr('src', 'images/joomag-love-wework.svg');   
    }
    $(window).on('resize', function(){
        if($(this).width() <= 320){
            $('#logo_joomag').attr('src', 'images/joomag-love-wework-mobile.svg');   
        } else {
            $('#logo_joomag').attr('src', 'images/joomag-love-wework.svg');   
        }   
    })
    self.setInterval(function(){animate()}, 3000)
    
    function animate(){
        var resObj = $(".logo_group li");
        var step = 200;
        $.each(resObj, function(key, val){
                if($(this).attr('id') != 'undefined'){
                        var id = $(this).attr('id');
                            if(id !== undefined){
                                id = parseInt(id.substr(6,2));
                             if($('li[id="image_'+id+'"]').is(':visible')){
                                 $('li[id="image_'+id+'"]').addClass('hide');
                                 $('li[id="image_'+id+'"]').animate({opacity: "0", display: "none"}, step+=300);
                             }else{
                                 $('li[id="image_'+id+'"]').removeClass('hide');
                                 $('li[id="image_'+id+'"]').animate({opacity: "1", display: "block"}, step+=100);
                             }
                    }
                }
        })
    }
})