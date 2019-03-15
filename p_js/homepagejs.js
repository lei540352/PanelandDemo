$(document).ready(function () {
    $(".head_title_ul li").mouseover(function () {
        var con = $(this).index();

        $("#menu-line").css(
            {
                left:100*con+"px",
            })
    })

    $(".head_title_ul li").mouseleave(function () {
        $("#menu-line").css(
            {
                left:"0px"
            })
    })
})