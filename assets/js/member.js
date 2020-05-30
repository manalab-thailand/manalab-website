$(function () {
    $("#MemberCre").hide();
    $("#MemberDev").hide();
    $("#MemberTra").hide();

    $("#Developer").click(function () {
        $("#MemberCre").fadeOut(function () {
            $("#MemberTra").fadeOut(function () {
                $("#MemberDev").fadeIn();
            })
        });
    });

    $("#Creative").click(function () {
        $("#MemberDev").fadeOut(function () {
            $("#MemberTra").fadeOut(function () {
                $("#MemberCre").fadeIn();
            })
        });
    });

    $("#Training").click(function () {
        $("#MemberDev").fadeOut(function () {
            $("#MemberCre").fadeOut(function () {
                $("#MemberTra").fadeIn();
            })
        });
    });
});
