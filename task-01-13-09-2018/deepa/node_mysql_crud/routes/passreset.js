exports.passreset = function(req, res){
  message = '';
  var sess = req.session;

     if(req.method == "POST"){
        var post  = req.body;
        var uid = post.id;
        var pass = post.password;
        console.log(req.body);



        var sql="UPDATE `test`.`users` SET `password`='"+pass+"' WHERE `id`='"+uid+"'";
        req.getConnection(function(error, conn) {
          if(error){
            console.log('database error',error);
          }
          else{
        conn.query(sql, function(err, results){
            if (err) {
              console.log('passrest problem',err);
            }else{
           if(req.session.uid = uid){

              console.log("Password Reset done");
              message = 'Password Reset Success';
              res.render('passreset', {message: message});
           }
           else{
              message = 'Wrong Credentials.';
              res.render('passreset.ejs',{message: message});
           }
           }
        });
      }
      })


       } else {
           console.log("password matched");
           message='pasword matched sucessfully';
        res.render('passreset.ejs',{message: message});
       }

       };