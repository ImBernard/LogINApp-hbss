var express = require('express');
var exphbs  = require('express-handlebars');
var mysql   = require('mysql');
var app = express();	
var db;
var obj;
var usid;

 



app.engine('handlebars', exphbs({defaultLayout: 'layout'})); //handlebars
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {//log in
    res.render('index');
});
 
app.get('/dashboard',function(req,res){
    res.render('dashboard');
});
app.post('/dashboard',function(req,res){
	console.log(req.body);

	var fname=req.body.fname;
	var lname=req.body.lname;
	var Mname=req.body.mname;
	var pass=req.body.Passwd;
	var cp=req.body.Cpasswd;
	var reg={
		fname:fname,
		lname:lname,
		Mname:mname,
		password:pass
	}//end
    if(cp==pass && pass.length>=10){
		var connection = mysql.createConnection({
  			host:'localhost',
  			user: 'root',
  			password: 'admin',
  			database:'login'
	});
				connection.connect();

		var query = connection.query('insert into tbluser set ?', reg , function (err, result){
		if(err){
  			console.error(err);
  			return;
			}
			console.error(result);
		});	
	var con=mysql.createConnection({
			host:'localhost',
  			user: 'root',
  			password: 'admin',
  			database:'login'
	});
	con.connect();
	connection.query("SELECT * FROM tbluser", function(err, rows, fields) {
  			if (!!err){
   				 console.log(err);
 			 }
 		    else
 			 {
			db = rows
			usid = rows.length;
  			}
  	});
  	res.render('')

    }//end if ef
       else
   {

	res.render('error')
    console.log("err");
   }

});//end of dash
app.listen(5000);