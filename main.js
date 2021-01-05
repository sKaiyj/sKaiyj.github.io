$(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000
    })
});
$(document).ready(function () {
    const burger = $(".burger");
    burger.click(function () {
        burger.toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
    });

});