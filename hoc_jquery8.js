$(document).ready(function(){

    //RESIZABLE
    $('#Resizable_1').resizable({

    });

    $('#Resizable_2').resizable({
        //alsoResize:"#Resizable_1",
        //aspectRatio:4/3,
        animate:true,
        ghost:true,
    });

    //SORTABLE
    $('#MySortable1').sortable({
        connectWith:"#MySortable2",
    });

    $('#MySortable2').sortable({
        connectWith:"#MySortable1",
        activate:function(){
            $('#MySortable2 li').css("background-color","blue");
        },
        deactivate:function(){
            $('#MySortable2 li').css("background-color","green");
        }
    });

    //SELECTABLE
    $('#List1').selectable({
        filter:".A",
        selected:function(){
            var data = "";
            $('#List1 .ui-selected').each(function(){
                data += ";" + $(this).attr("data")
            });
            alert(data);
        }
    });
});