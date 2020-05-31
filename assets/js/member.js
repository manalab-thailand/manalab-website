$(function () {
    $("#MemberCre").hide();
    $("#MemberDev").hide();
    $("#MemberTra").hide();

    $("#Developer").click(function () {
        $("#MemberCre , #MemberTra , #MemberPro").fadeOut("slow" ,function () {
            $("#MemberDev").fadeIn(1000);
        });
    });

    $("#Creative").click(function () {
        $("#MemberDev , #MemberTra , #MemberPro").fadeOut("slow" ,function () {
            $("#MemberCre").fadeIn(1000);
        });
    });

    $("#Training").click(function () {
        $("#MemberCre , #MemberDev , #MemberPro").fadeOut("slow" ,function () {
            $("#MemberTra").fadeIn(2100);
        });
    });

    $("#Professor").click(function () {
        $("#MemberCre , #MemberDev , #MemberTra").fadeOut("slow" ,function () {
            $("#MemberPro").fadeIn(1000);
        });
    });
});
