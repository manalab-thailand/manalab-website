$(function () {
    $("#MemberDev").hide();
    $("#MemberCre").hide();
    $("#MemberPro").hide();
    $("#MemberTra").hide();
    $("#MemberOther").hide();
    $("#MemberDev2").show();

    $("#Developer").click(function () {
        $("#MemberCre , #MemberTra , #MemberPro , #MemberDev2 ,#MemberOther").fadeOut("slow" ,function () {
            $("#MemberDev").fadeIn(2000);
        });
    });

    $("#Gen2Developer").click(function () {
        $("#MemberCre , #MemberTra , #MemberPro, #MemberDev ,#MemberOther").fadeOut("slow" ,function () {
            $("#MemberDev2").fadeIn(2000);
        });
    });

    $("#Creative").click(function () {
        $("#MemberDev , #MemberTra , #MemberPro, #MemberDev2 ,#MemberOther").fadeOut("slow" ,function () {
            $("#MemberCre").fadeIn(2500);
        });
    });

    $("#Training").click(function () {
        $("#MemberCre , #MemberDev , #MemberPro , #MemberDev2 ,#MemberOther").fadeOut("slow" ,function () {
            $("#MemberTra").fadeIn(2000);
        });
    });

    $("#Professor").click(function () {
        $("#MemberCre , #MemberDev , #MemberTra , #MemberDev2 ,#MemberOther").fadeOut("slow" ,function () {
            $("#MemberPro").fadeIn(2000);
        });
    });

    $("#Other").click(function () {
        $("#MemberCre , #MemberDev , #MemberPro , #MemberDev2 ,#MemberTra").fadeOut("slow" ,function () {
            $("#MemberOther").fadeIn(2000);
        });
    });
});
