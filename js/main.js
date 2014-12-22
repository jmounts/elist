$(document).ready(function() {

////Hover Elements////    
	$('.list').mouseenter(function() {
		$('.check').show();
        $('.delete').show();
        $('.uncheck').show();
	})
	.mouseleave(function() {
		$('.check').hide();
        $('.delete').hide();
        $('.uncheck').hide();
	})

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