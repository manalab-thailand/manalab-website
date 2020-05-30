$(function () {
    $("#MemberCre").hide();
    $("#MemberDev").hide();

    $("#Developer").click(function () {
        $("#MemberCre").fadeOut(function () {
        $("#MemberDev").fadeIn();
        });
    });

    $("#Creative").click(function () {
        $("#MemberDev").fadeOut(function () {
        $("#MemberCre").fadeIn();
        });
    });
});
