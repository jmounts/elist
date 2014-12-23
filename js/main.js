$(document).ready(function() {

////Hover Elements////    

////Enter Function////
    $('#input').keydown(function(event) {
        if (event.keyCode==13) {
            $('.add-b').click();
        }
    });

////Input Items////
    $('.add-b').click(function() {
        var enter = $('#input').val();
        if (enter.length > 0) {
            $('.item').prepend("</li>").html($('#input').val());
            $('.item').show();
            $('.delete').show();
        }
        else
        {
            alert("Forget Something?");
        }    
    });

/////Delete////
    $(document).on("click", ".delete", function(){
        $(this).closest('li').fadeOut(300);
    });

////Reset////
    $(document).on("click", ".reset-b", function(){
        $(".list").empty();
        submissions = 0;
    });
});