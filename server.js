var express = require('express');
var exphbs  = require('express-handlebars');
var mysql   = require('mysql');
var bodyParser = require('body-parser');//unuse
var app = express();	
var db;
var obj;
var usid;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: 'layout'})); //handlebars
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {//log in
    res.render('index');
});

app.get('/register',function(req,res){
	res.render('register');
});

app.get('/registereduser',function(req,res){
	res.render('registereduser');
});

app.post('/registereduser',function(req,res){//process
	console.log(req.body);

	var user_email  	= req.body.user_email;
	var user_password	= req.body.user_password;
	 //test
	 console.log("User name: ",user_email);
	 console.log("User password: ",user_password);
	 //
	 var data={
	 		user_email   	: user_email,
	 		user_password	: user_password
	 }
	 var con =mysql.createConnection({
	 	host:'localhost',
  		user: 'root',
  		password: '',
  		database:'login'
	 });
	 	con.connect();

	 var sql=con.query('SELECT reg_email, reg_password FROM tbluser WHERE reg_email = ? ', data.user_email,function(err,result){
	 	if(err){
			console.error(err);
  			return;
	 	}
		console.error("");
	 });
	 con.end();
});//end the process

//
app.get('/dashboard',function(req,res){
	res.render('dashboard');
});
app.post('/dashboard',function(req,res){//process inside the registration
	console.log(req.body);
 	
	var reg_username	=	req.body.reg_username;
	var reg_email	 	=	req.body.reg_email;
	var reg_name		=	req.body.reg_name;
	var reg_password	=	req.body.reg_password;
	

	console.log("username: ", reg_username);
	console.log("email: ", reg_email);
	console.log("name: ", reg_name);
	console.log("password: ", reg_password);
 	

	var reg = {
		id : null,
		reg_username : reg_username,
		reg_email : reg_email,
		reg_name : reg_name,
		reg_password : reg_password
	}//end
 //    if(cp == pass){
		var connection = mysql.createConnection({
  			host:'localhost',
  			user: 'root',
  			password: '',
  			database:'login'
	});
				connection.connect();

		var query = connection.query('INSERT INTO tbluser set ?', reg , function (err, result){
		if(err){
  			console.error(err);
  			return;
			}
			console.error("All data are submitted to mysql");
		});	
		connection.end();//close database
  	res.render('')
 //    }//end if ef
 //       else
 //   {

	// res.render('error')
 //    console.log("err");
 //   }//end else

});//end of dashboard

app.listen(5000);