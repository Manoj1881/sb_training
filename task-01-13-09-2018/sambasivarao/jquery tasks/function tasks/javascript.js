$(document).ready(function(){
    $("tr:odd").addClass("zebra");
    // $("tr:gt(0)").css("background-color", "yellow");
    // $("tr:gt(0)").remove();

    $('#button1').click(function () {
        $('#tr2').remove();
    });

    $.fn.rowCount = function () {
        return $('tr', $(this).find('tbody')).length;
    };
   
    $.fn.columnCount = function () {
       return $('th', $(this).find('tbody')).length;
    };
   
   var rowctr = $('.table_style').rowCount();
   var colctr = $('.table_style').columnCount();
   
   console.log('No of Rows:' + rowctr);
   console.log('No of Columns:' + colctr);
   var maxLength = 10;
   $('textarea').keyup(function () {
       var textlen = maxLength - $(this).val().length;
       $('#remchrs').text(textlen);
   
   });

   var checker = document.getElementById('checkme');
   var sendbtn = document.getElementById('sendNewSms');
   // when unchecked or checked, run the function
   checker.onchange = function () {
       if (this.checked) {
           sendbtn.disabled = false;
       } else {
           sendbtn.disabled = true;
       }
   
   }
   $('p').each(function () {
    var pdata = $(this);
    pdata.html(pdata.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});

    $("#addel").click(function(){
        $("#header ul").append('<li>java</li>');
    });

    $("#rmb").click(function(){
        $("#MyInput").css("border", "0");
    });    
$("#ee").keypress(function (e) {
    if (e.which == 13) {
        console.log('You pressed enter!');
    }
});

var arr = ["jQuery", "JavaScript", "HTML", "Ajax", "Css"];
    var itemtoRemove = "HTML";
    $('span').html('Array Items before removal:<b> ' + arr + '</b>');
    arr.splice($.inArray(itemtoRemove, arr));
    $('h5').html('Array Items after removal:<b> ' + arr + '</b>');

    $("button").click(function () {
        $(".intro").removeClass();
    });
    $("#btn3").click(function () {
        $("#test1").text("Hello world!");


    });
    $("<p>good</p>").appendTo("#sample");
    $("#added").click(function () {
      
       var myOptions = {
            val1: 'Blue',
            sdfsf: 'sddwdd',
            sfsafzds: 'sefsaefs',
            sfsdfsdfs: 'sefsaef',
            val2: 'Orange'
        };
        $.each(myOptions, function (a, b) {
            console.log(a, b);
            $("#myColors").append($("<option>").text(a, b));
        })
    });
    $("#changetext").click(function(){
        $(".textchange .underline").each(function() {
            var text_words = $(this).text().split(' ');
                $(this).empty().html(function() {
                    for (i = 0; i < text_words.length; i++) {
                        if (i === 0) {
                            $(this).append('<span>' + text_words[i] + '</span>');
                        } else {
                            $(this).append(' <span>' + text_words[i] + '</span>');
                        }
                    }
                
                });
            
            });

        });
        $("button").click(function(){
   
            $("img").attr("width", "500");
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
        $("li").last().addClass("w3r_font_color");

        $("input").on("keydown", function (event) {
         $("#ss").html(event.type + ": " + event.which);
        });

        $("#btn2").click(function () {
            $("#selected").fadeOut(3000);
        });
        $("#btn1").click(function () {
            $("#selected").fadeIn(3000);
        });

        $("#sss li").each(function (index, elem) {
            $(elem).prepend('' + index + ': ');
        });

        
            $("a").attr("href", "www.w3resource.com/mysql/mysql-tutorials.php");

            $("a").text("Go to");
            $("#change").click(function () {
                $('#change').prop('value', 'cancel')
            
            });
            $("#count").click(function () {
                $(".con").val.length;
                console.log($("li").length);
            });

            $(function () {
                $("#chkPara").click(function () {
                    if ($(this).is(":checked")) {
                        $("#para").show();
                    } else {
                        $("#para").hide();
                    }
                });
            });


});
 

























$(document).ready(function () {
    

    

    
});


$(document).ready(function () {
    

});





$(document).ready(function () {
    
});










// $("#change").prop('value','save');


$(document).ready(function () {
   
});


