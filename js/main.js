$(document).ready(function() {

////Hover Elements////    


////Input Items////
    $('.add-b').click(function() {
        var enter = $('#input').val();
        if (enter.length > 0) {
            $('.item').appendTo("#test").html($('#input').val());
            $('.item').show();
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

////Reset////
    $(document).on("click", ".reset-b", function(){
    $(".list").empty();
    submissions = 0;
    });
});