$(document).ready(function(){
   $('#additem').on('click',additem);
   $('#todos').on('change','.completeitem',completeitem);
   $('#todos').on('click','.deleteitem',deleteitem);


     function additem(){
      var newtodotext=$('#newtodo').val();
      if(newtodotext == ""){
        alert("must enter something");
      }
      else{
        $('#todos').append('<li><input  class="completeitem" type="checkbox">'+newtodotext +'<span class="glyphicon glyphicon-trash deleteitem"></span></li>');
        $('#newtodo').val("");
       
      }
      
     }



     function deleteitem(){
      $(this).parent().remove();
     }


     function completeitem(){
      $(this).parent().addClass('done');
      

     }
     
  
   


});