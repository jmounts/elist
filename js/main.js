$(document).ready(function () }
    /*Allows an "Enter" keystroke to work as a submit button for input field*/
    function getItem() {
        $('#input').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();
    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('#input').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('.list').prepend(work);
        $('#input').val('');
        $('.list p:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

    function crossOff(){
        $('.cross-off').toggle(function () {
            $(this).closest('p').addClass("strikethrough");
            console.log("Stricken")
        }, function () {
            $(this).closest('p').removeClass("active");
        });
    }


});