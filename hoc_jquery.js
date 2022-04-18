
$(document).ready(function(){
    var btb=document.getElementById('btbChangeImage');
    //var btb=document.getElementById('btbChangeHeight');
    btb.onclick=ChangeImage;
    //btb.onclick=ChangeImage;
});

$(document).ready(function(){
    //var btb=document.getElementById('btbChangeImage');
    var btb=document.getElementById('btbChangeHeight');
    //btb.onclick=ChangeImage;
    btb.onclick=ChangeHeight;
});


var CurrentImage=1;
function ChangeImage()
{
    if(CurrentImage==1)
    {
        //$('#hinh').attr("src","./pyke.jpg");
        $('#hinh').addClass('w2');
        CurrentImage=2;
    }
    else if(CurrentImage==2){    
        //$('#hinh').attr("src","./tml.jpg");
        $('#hinh').addClass('w3');
        CurrentImage=3;
    }
    else
    {
        $('#hinh').removeClass('w2').removeClass('w3');
        CurrentImage=1;
    }

    var current_css_width_value = $('#hinh').css('width');
    //var current_css_height_value = $('#hinh').css('height');
    alert(current_css_width_value);
    //alert(current_css_height_value);
}

function ChangeHeight()
{
    if(CurrentImage==1)
    {
        //$('#hinh').attr("src","./pyke.jpg");
        $('#hinh').addClass('w2');
        CurrentImage=2;
    }
    else if(CurrentImage==2){    
        //$('#hinh').attr("src","./tml.jpg");
        $('#hinh').addClass('w3');
        CurrentImage=3;
    }
    else
    {
        $('#hinh').removeClass('w2').removeClass('w3');
        CurrentImage=1;
    }

    //var current_css_width_value = $('#hinh').css('width');
    var current_css_height_value = $('#hinh').css('height');
    //alert(current_css_width_value);
    alert(current_css_height_value);
}