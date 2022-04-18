$(document).ready(function(){
    //PROGRESSBAR
    $('#my-prb').progressbar({
        value:false, //false là chưa có % nào cả. Ví dụ value:50 thì thanh progressbar ban đầu đang ở mốc 50%
        change:function() //Sự kiện tự động kích hoạt mỗi khi value thay đổi
        {
            var c_value = $('#my-prb').progressbar("value");
            $('#my-prb-label').html(c_value+'%');
        },
        complete:function() //Sự kiện kích hoạt khi value = 100
        {
            $('#my-prb-label').html('Đã xong');
        }
    });

    //DATEPICKER
    $('#birthday').datepicker({
        dateFormat:"dd/mm/yy",
        minDate:"-10D",
        maxDate:"21/03/2022",
    });

    //TOOLTIP
    $('#my-tooltip').tooltip({
        show:{effect:"slideDown",delay:250},
        hide:{effect:"slideUp",delay:250},
        track:true,
    });

    //ACCORDION
    $('#my-accordion').accordion({
        heightStyle:'content',          //content: Tự mở rộng theo nội dung để đảm bảo nhìn thấy 100% mà không cần cuộn
        //heightStyle:'fill',               //Hiển thị vừa đủ khung chứa, dư ra thì cuộn
    });

    //COMPLETE
    var data = ["thư viện lập trình","thư viện hình ảnh","thư viện công cộng","Lê Anh Nhật","nhatlee0620@gmail.com"];
    $('#complete').autocomplete({
        delay:100,
        source:data, 
    });

    //MENU
    $('#my-menu').menu();

    //TAB
    $('#myTabs').tabs({
        //event:"mouseover", //mặc định là click
        collapsible:true,  //collapsible: cho phép cùng một lúc ẩn hết các tab hay không nhưng lúc xài collapsible phải dùng event mặc định
    });

    //SPINNER
    $('#mySpinner').spinner({
        min:0,
        max:100,
        step:10,
        // numberFormat:"C",
        // culture:"vi-VN"
        /*
        start:function(){
            var vl = $(this).spinner("value");
            $('#SpinnerValue').html(vl);
        }
        */
        /*
        spin: function(){
            var vl = $(this).spinner("value");
            $('#SpinnerValue').html(vl);
        }*/
        /*
        change:function(){
            var vl = $(this).spinner("value");
            $('#SpinnerValue').html(vl);
        }
        */
        stop:function(){
            var vl = $(this).spinner("value");
            $('#SpinnerValue').html(vl);
        }

    });

    //SLIDER
    $('#mySlider1').slider({
        //orientation:"vertical",
        min:0,
        max:100,
        step:1,
        //Muốn đang kéo mà số cũng chạy theo thì dùng slide
        slide:function(){
            var vl = $(this).slider("value");
            $('#SliderValue1').html(vl);
        }

    });

    $('#mySlider2').slider({
        orientation:"vertical",
        min:0,
        max:100,
        step:1,
        stop:function(){
            var vl = $(this).slider("value");
            $('#SliderValue2').html(vl);
        }
    });

    //SELECTMENU bước 1: Định nghĩa lại hàm render select menu
    $.widget("custom.selectmenuwithavartar",$.ui.selectmenu,
        {
            _renderItem: function(ul,item)
            {
                //Mỗi item là một thẻ <li>
                var li = $("<li>");
                //Thêm class đánh dấu disable vào thẻ <li> (nếu có)
                if(item.disabled){
                    li.addClass("ui-state-disabled");
                }
                //Mỗi thẻ <li> chứa thẻ <div> làm nội dung
                var wrapper = $("<div>",{text:item.label});     
                //Trong thẻ <div> sẽ có TEXT và 1 thẻ <span> làm avatar           
                $("<span>",{
                    style: item.element.attr("dataStyle"),
                    "class":item.element.attr("dataClass") + "ui-icon",
                }).appendTo(wrapper);
                //Trả về 1 item sau khi render
                return li.append(wrapper).appendTo(ul);
            }
        }
    );
    //SELECTMENU bước 2: Sử dụng
    $('#MySelect').selectmenuwithavartar();

    //CHECKBOXRADIO
    $('input.Mycheckboxradioclass').checkboxradio({
        //icon:false,
    });

    //DRAGGABLE
    $('#MyDraggable').draggable({
        //containment:"parent",
        //scroll:true,
        //revert:true,
        //helper:"clone",
        //axis:"x,y",
        /*
        drag:function()
        {
            $(this).css("background-color","green");
        },
        stop:function()
        {
            $(this).css("background-color","yellow");
        }*/
    });

    //DROPPABLE
    $('#MyDroppable').droppable({
        accept:"#MyDraggable",
        activate:function() // chỉ xảy ra sự kiện này khi có accept ở trên
        {
            $(this).css("background-color","blue");
        },
        over:function()
        {
            $(this).css("background-color","violet");
        },
        out:function()
        {
            $(this).css("background-color","green");
        },  
        drop:function()
        {
            $(this).css("background-color","#ccc");
        },
        deactivate:function()
        {
            $(this).css("background-color","")
        }
    });
});

//$(selector).progressbar("value",75) Lệnh thay đổi % của tiến trình
function StartProgressbar()
{
    var c_value = $('#my-prb').progressbar("value") + 1;
    $('#my-prb').progressbar("value",c_value);
    if(c_value <100)
    {
        setTimeout("StartProgressbar()",20);
    }
}

