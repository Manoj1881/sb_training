exports.reset = function(req, res){
  message = '';
  var sess = req.session;

     if(req.method == "POST"){
        var post  = req.body;
        var email = post.email;


        var sql="SELECT email, id from `users`  WHERE `email` = '"+email+"'";

        req.getConnection(function(error, conn) {
        conn.query(sql, function(err, results){
          if(err) {
        console.log('error in verification',err);
    }
     else{
           if(results.length){
              req.session.email = results[0];
              console.log(results);
              var id=results[0].id;
              console.log("email verification success",id);
              res.render('passreset.ejs',{id:id});
            
           }
           else{
              message = 'email doesnot exist.';
              res.render('reset.ejs',{message: message});
           }
          }
        });
      })

       } else {
        res.render('reset.ejs',{message: message});
       }

       };

   