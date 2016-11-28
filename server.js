var express = require('express');
var exphbs  = require('express-handlebars');
var mysql   = require('mysql');
var bodyParser = require('body-parser');
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
 
app.get('/db',function(req,res) {
	res.send(JSON.stringify(db));
});
app.get('/dashboard',function(req,res){//dashboard
    res.render('dashboard');
});
app.post('/dashboard',function(req,res){//process inside the registration
	console.log(req.body);
 	
	var fname=req.body.fname;
	var lname=req.body.lname;
	var m1name=req.body.nname;
	var pass=req.body.password;
	var cp=req.body.Cpasswd;
	var reg={
		fname : fname,
		lname : lname,
		Mname : m1name,
		password : pass
	}//end
    if(cp == pass ){
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
			console.error(result);
		});	
		connection.end();//close database
  	res.render('')
    }//end if ef
       else
   {

	res.render('error')
    console.log("err");
   }//end else

});//end of dashboard
app.listen(5000);