
(function ($) {
    // add the animation class when the icon click
    $('.fab.fa-github.fa-2x').click(
        function () {
            $(this).addClass('animated bounceIn')
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated bounceIn')
            });
        });
    $('.fab.fa-linkedin.fa-2x').click(
        function () {
            $(this).addClass('animated bounceIn')
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated bounceIn')
            });
        });
    $('.fas.fa-pen-square.fa-2x').click(
        function () {
            $(this).addClass('animated bounceIn')
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated bounceIn')
            });
        });
    // add the animation class when hover the icon
    $('.fab.fa-github.fa-2x').hover(
        function () {
            $(this).addClass('animated tada')
        },
        function () {
            $(this).removeClass('animated tada')
        });
    $('.fab.fa-linkedin.fa-2x').hover(
        function () {
            $(this).addClass('animated jello')
        },
        function () {
            $(this).removeClass('animated jello')
        });
    $('.fas.fa-pen-square.fa-2x').hover(
        function () {
            $(this).addClass('animated shake')
        },
        function () {
            $(this).removeClass('animated shake')
        });
})(jQuery);