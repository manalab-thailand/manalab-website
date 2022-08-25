$(function () {
    $("#MemberDev").hide();
    $("#MemberCre").hide();
    $("#MemberPro").hide();
    $("#MemberTra").hide();

    $("#Developer").click(function () {
        $("#MemberCre , #MemberTra , #MemberPro , #MemberDev2").fadeOut("slow" ,function () {
            $("#MemberDev").fadeIn(1000);
        });
    });

    $("#Gen2Developer").click(function () {
        $("#MemberCre , #MemberTra , #MemberPro, #MemberDev").fadeOut("slow" ,function () {
            $("#MemberDev2").fadeIn(2500);
        });
    });

    $("#Creative").click(function () {
        $("#MemberDev , #MemberTra , #MemberPro, #MemberDev2").fadeOut("slow" ,function () {
            $("#MemberCre").fadeIn(1000);
        });
    });

    $("#Training").click(function () {
        $("#MemberCre , #MemberDev , #MemberPro , #MemberDev2").fadeOut("slow" ,function () {
            $("#MemberTra").fadeIn(2100);
        });
    });

    $("#Professor").click(function () {
        $("#MemberCre , #MemberDev , #MemberTra , #MemberDev2").fadeOut("slow" ,function () {
            $("#MemberPro").fadeIn(1000);
        });
    });
});
