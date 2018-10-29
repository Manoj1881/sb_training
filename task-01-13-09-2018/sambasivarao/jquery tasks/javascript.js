 $(document).ready(function(){
    $("tr:odd").addClass("zebra");
    // $("tr:gt(0)").css("background-color", "yellow");
   // $("tr:gt(0)").remove();

     $('#button1').click(function(){ 
        $('#tr2').remove(); 
         });
      
});
$.fn.rowCount = function() {
    return $('tr', $(this).find('tbody')).length;
};

$.fn.columnCount = function() {
    return $('th', $(this).find('tbody')).length;
};

var rowctr = $('.table_style').rowCount();
var colctr = $('.table_style').columnCount();

console.log('No of Rows:'+rowctr);
console.log('No of Columns:'+colctr);

 var maxLength = 10;
 $('textarea').keyup(function() {
   var textlen = maxLength - $(this).val().length;
  $('#remchrs').text(textlen);
 
 });
var checker = document.getElementById('checkme');
 var sendbtn = document.getElementById('sendNewSms');
 // when unchecked or checked, run the function
 checker.onchange = function(){
if(this.checked){
    sendbtn.disabled = false;
} else {
    sendbtn.disabled = true;
}

}
$('p').each(function(){  
    var pdata = $(this);  
    pdata.html( pdata.text().replace(/(^\w+)/,'<strong>$1</strong>') );  
}); 

function new_element(){
    $("#header ul").append('<li>java</li>');
}
// function remove_classes()
// {
// $("#item").removeClass();
// }

/* remove styles using css*/
function remove_style


() {
    $("#MyInput").css("border", "0");
    }




     $("#ee").keypress(function(e) {
     if(e.which == 13) {
            console.log('You pressed enter!');
        }
     });








    $(document).ready(function(){
        var arr = ["jQuery","JavaScript","HTML","Ajax","Css"];
        var itemtoRemove = "HTML";
        $('span').html('Array Items before removal:<b> ' + arr + '</b>'); 
        arr.splice($.inArray(itemtoRemove ,arr));
        $('h5').html('Array Items after removal:<b> ' + arr + '</b>'); 

        $("button").click(function(){
            $("p").removeClass("intro");
        });
        
    });



    


    
   
    $(document).ready(function(){
        $("#btn3").click(function(){
            $("#test1").text("Hello world!");

        });

        $("<p>good</p>").appendTo("#sample");
        $("#added").click(function(){
            
            var myOptions = {
                val1 : 'Blue',
                sdfsf:'sddwdd',
                sfsafzds:'sefsaefs',
                sfsdfsdfs:'sefsaef',
                val2 : 'Orange'
            };
        $.each(myOptions,function(a,b){
            console.log(a,b);
            $("#myColors").append($("<option>").text(a,b));
        })
        })
    });


    $(document).ready(function(){
     $("button").click(function(){
    });
    $("img").attr("width", "500"); 
   
 });
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

    $( "li" ).last().addClass( "w3r_font_color" );

    $( "input" ).on( "keydown", function(event) {
        $( "#ss" ).html( event.type + ": " +  event.which );
      });


      $(document).ready(function(){
        $("#btn2").click(function(){
          $("#selected").fadeOut(3000);
        });
         $("#btn1").click(function(){
          $("#selected").fadeIn(3000);
        }); 
      });


      $( "#sss li" ).each(function( index, elem ) {
        $( elem ).prepend( '' + index + ': ' );
    });




    $("a").attr("href", "www.w3resource.com/mysql/mysql-tutorials.php");

$("a").text("Go to");



// $("#change").prop('value','save');
$("#change").click(function(){
 $('#change').prop('value' ,'cancel')  

});

$(document).ready(function(){
$("#count").click(function()
{
     $(".con").val.length;
    console.log($("li").length);
});
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