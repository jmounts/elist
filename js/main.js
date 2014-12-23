$(document).ready(function() {

////Hover Elements////    
    $("<li class='item'><button class='check small-1 columns'>☑</button></li>").appendTo("#test").html($("#testtxt").val());

////Input Items////
    $('.add-b').click(function() {
        var enter = $('#input').val();
        if (enter.length > 0) {
            $("<li class='item'/>").appendTo('#test').html($('#input').val());
        }
        else
        {
            alert("Forget Something?");
        }    
    });

    $('#input').keydown(function(event) {
        if (event.keyCode==13){
            $('.add-b').trigger('click');
        }
    });
});