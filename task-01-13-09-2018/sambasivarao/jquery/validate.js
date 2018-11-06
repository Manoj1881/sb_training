$(document).ready(function() {
 
    $('#first_form').submit(function(e) {
      e.preventDefault();
      var user = $('#username').val(); 
      var email = $('#email').val();
      var password = $('#password').val();
      var dob=$('#dob').val();
      var gen=$('#gender').val();
   
       $(".error").remove();
   
      if (user == "") {
        $('#username').after('<span class="error">This field is required</span>');
      }
      $('#username').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else
        {
        e.preventDefault();
        alert('Please Enter Alphabate');
        return false;
        }
    });
      
      if (email.length == "") {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        // var regEx =/^\S+@\S+\.\S+$/;
        var regEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;

        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
        }
      }
      if (password.length < 8) {
        $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      }
      if(dob == ""){
                $('#dob').after('<span class="error">This field is required</span>');
         }
    





    });
    var max_fields      = 10; 
    var wrapper         = $(".inputadded"); 
    var add_button      = $(".button"); 
    
    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < max_fields){ 
            x++; 
            $(wrapper).append('<input type="text" name="mytext[]"><br>'); 
        }

    
});
});
  

    
   

