$(document).ready(function() {
 
    $('#first_form').submit(function(e) {
      e.preventDefault();
      var firstname = $('#firstname').val();
      var last_name = $('#lastname').val();
      var email = $('#email').val();
      var phno=$('#phonenumber').val();
      var zipcode=$('#zip').val();
      var adr=$('#address').val();
   
      $(".error").remove();
   
      if (firstname.length < 5) {
        $('#firstname').after('<span class="error">This field is required</span>');
      }
      if (last_name.length < 5) {
        $('#lastname').after('<span class="error">This field is required</span>');
      }
      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
        }
      }
      if (phno.length < 10) {
        $('#phonenumber').after('<span class="error">Phonenumber must be at least 10 characters</span>');
      }
      
      if(zipcode.length < 4){
          $('#zip').after('<span class="error">zipcode must be 4 numbers</span>');
      }
      if(adr ==""){
          $('#address').after('<span class="error">address filed is required</span>');
      }

    });
   
  });




// $(document).ready(function(){
//     $('#first_form').validate({
//         rules: {
//           firstname: 'required',
//           lastname: 'required',
//           email: {
//             required: true,
//             email: true,
//           },
//           phonenumber:'required',
//           zipcode:'required',
//         },
//         messages: {
//             firstname: 'This field is required',
//             lastname: 'This field is required',
//           email: 'Enter a valid email',
//           phonenumber:'enter phonenumber',
//         },
//         submitHandler: function(form) {
//           form.submit();
//         }
//       });   

// });