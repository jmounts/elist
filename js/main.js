$(document).ready(function() {
	$('.item').mouseenter(function() {
		$('.check').show();
	})
	.mouseleave(function() {
		$('.check').hide();
	})
});