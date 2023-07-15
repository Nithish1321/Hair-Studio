var module = require('./dbmodule');
var module1=require('./dbmodule1');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var fname = querystring.parse(data1)["fname"];
console.log(fname);
var lname = querystring.parse(data1)["lname"];
console.log(lname);
var email = querystring.parse(data1)["email"];
console.log(email);
var date = querystring.parse(data1)["date"];
console.log(date);
var password=querystring.parse(data1)["pwd"]
console.log(password);
var gender = querystring.parse(data1)["gender"];
console.log(gender);
var Name = querystring.parse(data1)["visitor_name"];
console.log(Name);
var  Email_Id= querystring.parse(data1)["visitor_email"];
console.log(Email_Id);
var phone = querystring.parse(data1)["visitor_phone"];
console.log(phone);
var Date = querystring.parse(data1)["checkin"];
console.log(Date);
var time = querystring.parse(data1)["checkout"];
console.log(time);
var Place = querystring.parse(data1)["room_preference"];
console.log(Place);
var Feedback = querystring.parse(data1)["visitor_message"];
console.log(Feedback);


if (request.url === '/login') {
module.authenticateUser(email,password, response);}

if (request.url === '/save') {
module.saveUser(fname, lname, email, date, password, gender, response);
            } 
if(request.url==='/book'){
module1.saveBook(Name,Email_Id,phone,Date,time,Place,Feedback,response);
      
            }
      }); 
}).listen(3000);
console.log("Server started");