/// Chờ tài liệu tải xong và sẵn sàng
$(document).ready(function () { 
    //Code trong khu vực này sẽ chạy khi tài liệu đã sẵn sàng
    $(window).resize(ResizeHappened);
});

function ResizeHappened(){
    var x = $(window).width();
    var y = $(window).height();

    $("#status").html("Trình duyệt rộng "+x +"px và cao "+y +"px");
}