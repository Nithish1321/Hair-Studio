var databaseUrl = "mongodb://127.0.0.1:27017/proj";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);




exports.saveBook = function(Name,Email_Id,phone,Date,time,Place,Feedback,response) {
console.log('Saving user to mongo');
db.booking.insert({ "Name": Name,"Email": Email_Id,"Phone":phone,"Date":Date,"Time":time,"Place":Place,"Feedback":Feedback },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}