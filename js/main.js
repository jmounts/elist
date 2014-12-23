$(document).ready(function() {

////Hover Elements////    


////Input Items////
    $('.add-b').click(function() {
        var enter = $('#input').val();
        if (enter.length > 0) {
            $('.item').prepend("").html($('#input').val());
            $('.item').show();
            $('.delete').show();
        }
        else
        {
            alert("Forget Something?");
        }    
    });


////Enter Function////
    $('#input').keydown(function(event) {
        if (event.keyCode==13){
            $('.add-b').trigger('click');
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