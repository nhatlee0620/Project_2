$(document).ready(function()
{
    $('#my-dialog').dialog({
        autoOpen:false,
        show:{effect: "blind",duration:1000},
        hide:{effect: "explode",duration:1000},
        resizable:false,
        modal:true,
        buttons:
        {
            "Đồng ý": function(){
                $('#msg').html("Bạn đã đồng ý. Bấm TẮT để đóng");
            },
            "Tắt":function()
            {
                $(this).dialog("close");
            }
        }
    });
});

function OpenDialog()
{
    $('#my-dialog').dialog("open");
}