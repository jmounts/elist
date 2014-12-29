$(document).ready(function() {

    var submissions = 0;
    var checkMark = '<button class="check small-1 columns">☑</button>'
    var remove = '<button class="delete small-1 columns">×</button>' 
    var marked = '<li class="row medium-6 small-12 small-centered columns item-marked">'

////Enter Function////
    $('#input').keydown(function (event) {
        if (event.keyCode == 13) {
            $('.add-b').click();
        };
    });

////Input Items////
    function getItem() {
        $('.add-b').click(function () {
        var strenter = $("#input").val();
        if ( strenter.length > 0 ) {
            postItem();
        } 
        else 
        {
            alert("Forget something? ..perhaps the apples?");
            }
        });
    }

    getItem();

    function postItem() {
        var item = $('#input').val();
        var work = '<li class="row medium-6 small-12 small-centered columns item">'+ checkMark + item + remove + '</li>';
        $('#test').prepend(work);
        $('#input').val('');
        $('#test p:first-child');
        }
    });

/////Delete////
    $(document).on("click", ".delete", function(){
        $(this).closest('li').fadeOut(300);
    });

////Check////
    $(document).on("click", ".check", function(){
        $(this).closest('li').toggleClass('item-marked');
});

////Reset////
    $(document).on("click", ".reset-b", function(){
        $(".list").empty();
        submissions = 0;
    });