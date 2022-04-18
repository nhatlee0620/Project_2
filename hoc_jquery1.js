//cho tai lieu tai xong
$(document).ready(function () {
    /*//cai dat su kien 1
    document.getElementById("btb1").onclick=function()
    {
        var html = $("#div1").html();
        alert(html); 
    }

    //cai dat su kien 2
    document.getElementById("btb2").onclick=function()
    {
        $("#div1").html("<a herf='#'> Lien ket </a> noi dung moi !!! <b>IN DAM</b>");
        
    }
    
    // cai dat su kien 3
    document.getElementById("btb3").onclick=function()
    {
        var text = $("#div1").text();
        alert(text); 
    }

    //cai dat su kien 4
    document.getElementById("btb4").onclick=function()
    {
        $("#div1").text('Đổi thành nội dung mới. <b>IN ĐẬM</b>');
    }*/
    

    /*
    //Chèn thêm nội dung bên trong thẻ -> chèn thêm nội dung vào cuối nội dung đang có
    document.getElementById("btb1").onclick = function(){
        $("#div1").append("<b> Nội dung in đậm </b>");
    }

    //Chèn thêm nội dung bên trong thẻ -> chèn thêm nội dung vào trước nội dung đang có
    document.getElementById("btb2").onclick = function(){
        $("#div1").prepend("<b> Nội dung in đậm mới 111111111 <br/></b>");
    }

    //Chèn nội dung vào cuối nội dung của selector
    document.getElementById("btb3").onclick = function(){
        $("<b> Nội dung in đậm 22222 </b>").appendTo("#div1");
    }

    //Chèn nội dung vào đầu nội dung của selector
    document.getElementById("btb4").onclick = function(){
        $("<b> Nội dung in đậm 22222 <br/></b>").prependTo("#div1");
    }*/

    /*
    //Chèn thêm nội dung bên ngoài thẻ
    //Chèn thêm nội dung vào ngay sau selector
    document.getElementById("btb1").onclick = function(){
        $("#div1").after("<b> Nội dung in đậm 1111 <br/></b>");
    }

    //Chèn thêm nội dung vào ngay trước selector
    document.getElementById("btb2").onclick = function(){
        $("#div1").before("<b> Nội dung in đậm 2222<br/></b>");
    }

    //Chèn nội dung vào sau selector
    document.getElementById("btb3").onclick = function(){
        $("<b> Nội dung in đậm 333333 <br/></b>").insertAfter("#div1");
    }

    //Chèn nội dung vào trước selector
    document.getElementById("btb4").onclick = function(){
        $("<b> Nội dung in đậm 444444 <br/></b>").insertBefore("#div1");
    }*/

    //Xóa bỏ và thay thế nội dung và thẻ HTML

    /*
    document.getElementById("btb1").onclick=function()
    {
        $("#span1").unwrap(); // Loại bỏ các phần tử cha của selector
    }

    document.getElementById("btb2").onclick=function()
    {
        $("#div1").replaceWith("<div style='background-color:yellow'>123123456456</div>"); thay thế selector
    }*/

    
    //Tác động vào cấu trúc bao trùm thẻ HTML
    document.getElementById("btb1").onclick=function()
    {
        $(".btb").wrap('<div class="Wrap"><p>ABC</p></div>'); 
    }

    document.getElementById("btb2").onclick=function()
    {
        $(".btb").wrapAll('<div class="Wrap"></div>'); 
    }

    document.getElementById("btb3").onclick=function()
    {
        $(".btb").wrapInner('<div class="Wrap"></div>'); 
    }

});