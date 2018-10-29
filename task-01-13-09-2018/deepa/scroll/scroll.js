$(document).ready(function () {


    $('form input[type="submit"]').prop("disabled", true);
    $(".agree").click(function () {
        if ($(this).prop("checked") == true) {
            $('form input[type="submit"]').prop("disabled", false);
        }
        else if ($(this).prop("checked") == false) {
            $('form input[type="submit"]').prop("disabled", true);
        }
    });
    //  #zebra stripes#
    $("tr:odd").addClass("zebra");
    $("#remove").click(function () {
        $("#rem").remove();
    });
    $("#remove1").click(function () {
        $(".zebraline").find("tr:gt(0)").remove();
    });
    //  #max chars#
    var maxLength = 15;
    $('textarea').keyup(function () {
        var textlen = maxLength - $(this).val().length;
    });
    //   #first word bold#
    $('p').each(function () {
        var pdata = $(this);
        pdata.html(pdata.text().replace(/(^\w+)/, '<strong>$1</strong>'));
    });

    // #Remove a specific value from an array using jQuery#
    var y = ['Red', 'Green', 'White', 'black', 'Yellow'];
    var remove_Item = 'White';
    console.log('Array before removing the element = ' + y);
    y = $.grep(y, function (value) {
        return value != remove_Item;
    });
    console.log('Array after removing the element = ' + y);

    // #Change button text using jQuery#
    $("#button").click(function () {
        $(this).val('clicked');
    });
    // drop-dpownlist#
    $("<p>hello</p>").appendTo("#down");
    $("#drop").click(function () {
        var options = {
            add1: "first",
            add3234e: "first1",
            add1gfdhb: "firsdfvft",
            adddfgvfd1: "firsdfgbfgt",
            wdew: "bfgnh"
        };
        $.each(options, function (x, y) {
            console.log(x, y);
            $("#selectbox").append($("<option>").text(x, y));
        })

    })
    // #w3r_font_color#
    $("#font li").last().addClass("w3r_font_color");

    //  #add attr#
    $("#attr").click(function () {
        $("img").attr("width", "300");
    });

    // Set the focus to the first input box.

    $("#focus").focusin(function () {
        $(this).css("background-color", "#FFFFCC");
    });
    $("#focus").focusout(function () {
        $(this).css("background-color", "#FFFFFF");
    });

    // #count no.of elemnts#
    $("#count").click(function () {
        console.log($(" #lis li").length);
    });

    //  #fadein fade ou#
    $("#btn1").click(function () {
        $("#fade").fadeOut(3000);
    });
    $("#btn2").click(function () {
        $("#fade").fadeIn(3000);
    });
    //    #display and hide a paragraph based on checkbox input#

    $(function () {
        $("#myCheck").click(function () {
            if ($(this).is(":checked")) {
                $("#text").show();
            } else {
                $("#text").hide();
            }
        });
    });
    // #count the child#
    var count = $("#selected p").length;
    console.log(count);

    // #goto top#
    $("a[href='#top']").click(function () {
        $('html,body').animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // #adding tag at the begining of list item#
    $('.tag li').each(function (index, elem) {
        $(elem).prepend('' + index + ':');
    });

    //#changing the hyperlink#
    $("a").attr("href", "www.w3resource.com/mysql/mysql-tutorials.php");

    $("a").text("MySQL Tutorial");

    // #display the keyboard which was pressed in textbox#
    $("#key").on('keydown', function (event) {
        $("div").html(event.type + ":" + event.which);
    });

    $("#button1").click(function () {
        $("p").removeClass();
    });
    //  #add value to textbox#
    $("#val").click(function () {
        $("#ee input:text").val("depa");
    });
    // #underline all words
    $('#tex').css('text-decoration', 'underline');

});

// #appending list#
function on_func() {
    $('#header ul').append('<li>cat</li>');
}
// #Remove style added with.css()#
function remove_style() {
    $("#MyInput").css("border", "0");
}