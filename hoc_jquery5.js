

function LoadImage(){
    $.ajax("http://tenmienabc.com/leanhnhat.html")
    .done(function(rs){
        $('#msg').html(rs);
    });
}