$(document).ready(function(){

    // Menu

    let $button = $('#menu-btn');

    $button.on('click', function(e){
        e.preventDefault();
        if( $button.hasClass('open') ){
            $button.removeClass('open');
            $button.addClass('close');
            $('.header__right').removeClass('active');
        } else {
            $button.removeClass('close');
            $button.addClass('open');
            $('.header__right').addClass('active');
        }
    });


    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
        });
    });

    $(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    
});