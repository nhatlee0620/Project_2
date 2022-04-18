
$(document).ready(function(e){
    SetupEvent();
});

// Hàm cài đặt sự kiện
function SetupEvent(){
    //Show
    $('#show').click(function(){
        $('#image_id').show(500, 
            function(){
                alert("Đã Show");
            });
    });

    //Hide
    $('#hide').click(function(){
        $('#image_id').hide(500, 
            function(){
                alert("Đã Hide");
            });
    });

    //Toggle
    $('#toggle').click(function(){
        $('#image_id').toggle(500);
    });

    //slidedown
    $('#slideDown').click(function(){
        $('#image_id').slideDown(500, 
            function(){
                alert("Đã Show");
            });
    });

    //slideup
    $('#slideUp').click(function(){
        $('#image_id').slideUp(500, 
            function(){
                alert("Đã Hide");
            });
    });

    //SlideToggle
    $('#slideToggle').click(function(){
        $('#image_id').slideToggle(500);
    });

    //FadeIN
    $('#fadeIn').click(function(){
        $('#image_id').fadeIn(500, 
            function(){
                alert("Đã Show");
            });
    });

    //FadeOut
    $('#fadeOut').click(function(){
        $('#image_id').fadeOut(500, 
            function(){
                alert("Đã Hide");
            });
    });

    //FadeToggle
    $('#fadeToggle').click(function(){
        $('#image_id').fadeToggle(500);
    });

    //TO->X
    $('#ft').change(function(){
        var x = parseFloat($(this).val());
        $('#image_id').fadeTo(500, x);
    });

}