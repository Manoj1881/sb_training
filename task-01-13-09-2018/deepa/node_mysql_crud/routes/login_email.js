// var bcrypt = require('bcrypt')
// var express = require('express')

exports.login = function (req, res) {
  var message = '';
  var sess = req.session;

  if (req.method == "POST") {
    var post = req.body;
    var email = post.email;
    var pass = post.password; //here normal unhashed password will get

    req.getConnection(function (error, conn) {
      if (error) {
        console.log('error occured ', error);
      }
      else {
        conn.query('SELECT password from users WHERE email = ?', [email], function (err, results, fields) {
          if (err) {
            console.log('error in db ', err)
          };
          if (results.length === 0) {
            console.log(results[0]);
          }
          const hash = results[0].password;

          bcrypt.compare(pass, hash, function (err, response) {
            if (response === true) {
              res.redirect('/users')
              console.log('password has been decrypted from ' + pass + '  ' + 'to' + '  ' + hash);
            }
            else {
              message = 'wrong credentials.';
              res.render('login.ejs', { message: message });
            }
          });
        });
      }
    })
  }
  else {
    message = 'Wrong Credentials.';
    res.render('login.ejs', { message: message });
  }

};
 