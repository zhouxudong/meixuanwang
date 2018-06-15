$(".modal").on("click", function () {
    $(".modal_wrap").hide();
});
$(".btn-login").on("click", function () {
    $(".modal_wrap").show();
});
$(".company_share").on("mouseover", function () {
    var $thisUse = $(this).find(".icon use");
    var hoverLink = $thisUse.data("hover");

    $thisUse.attr("xlink:href",hoverLink);

    console.log(hoverLink);
}).on("mouseout", function () {
    var $thisUse = $(this).find(".icon use");
    var outLink = $thisUse.data("out");
    $thisUse.attr("xlink:href",outLink);
});

$(".search-input-box").on("click", "._placeholder", function () {
    $(this).hide();
    $(this).parent().find(".search-input").focus();
});

$(".search-input-box").on("blur", ".search-input", function () {
    var val = $(this).val().trim();
    if(!val.length){
        $(this).parent().find("._placeholder").show();
    }
}).on("focus", ".search-input", function () {
    $(this).parent().find("._placeholder").hide();
});

var utils = {
    getURLSearchParams: function (param) {
        var result = new RegExp(param + "=([^&]+)").exec(location.search);

        return result && result[1];
    },
    getURLHashParams: function (param) {
        var result = new RegExp(param + "=([^&]+)").exec(location.hash);

        return result && result[1];
    }

}