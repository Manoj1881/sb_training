$(document).ready(function() {
 
    $('#first_form').submit(function(e) {
      e.preventDefault();
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var dob=$('#dob').val();
   
      $(".error").remove();
   
      if (first_name.length == "") {
        $('#first_name').after('<span class="error">This field is required</span>');
      }
      if (last_name.length < 1) {
        $('#last_name').after('<span class="error">This field is required</span>');
      }
      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        var regEx =/^\S+@\S+\.\S+$/;
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
});

    $(document).ready(function() {
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

    
   
