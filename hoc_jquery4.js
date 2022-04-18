
$(document).ready(function(e){
    
    $('#image_id').click(function(){
       ChangImage();
        
    });
   
    
});

var status = 1;
function ChangImage(){
    //$('#image_id').stop(true,true);
    $('#image_id').stop(true);
    {
        if(status == 1)
        {
            status =2;
            SizeDown();
        }
        else
        {
            status=1;
            SizeUp();
        }
    }
}

function SizeDown(){
$('#image_id').animate(
    {
        width:'100px',
        opacity:0.5
    },
    3000,
    ChangImage
    );
}

function SizeUp(){
    $('#image_id').animate(
        {
            width:'700px',
            opacity:1
        },
        3000,
        ChangImage
        );
    }