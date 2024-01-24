$(document).ready(function () {

$(".contactform").on("submit", function () {
    $("#formLoader").show();
    $(".output_message").text("Sending...");

    var form = $(this);
    $.ajax({
        url: form.attr("action"),
        method: form.attr("method"),
        data: form.serialize(),
        success: function (result) {
            $("#formLoader").hide();
            console.log(result);
            console.log(result == "success");
            if (result.trim().toLowerCase() === "success") {
                $(".form-inputs").css("display", "none");
                $(".box p").css("display", "none");
                $(".contactform").find(".output_message").addClass("success");
                $(".output_message").text("Message Sent!");
            } else {
                $(".tabs-container").css("height", "440px");

                $(".contactform").find(".output_message").addClass("error");
                $(".output_message").text("Error Sending!");
            }
        },
        error: function (xhr, status, error) {
            $("#formLoader").hide();
            console.error("AJAX Request Error:", status, error);
        }
    });

    return false;
});

});