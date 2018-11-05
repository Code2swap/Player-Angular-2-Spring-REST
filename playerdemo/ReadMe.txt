http://localhost:8083/player/  GET 

use mydb

#create collection player

db.player.insert( 
{
	"_id" : "101",
	"name" : "Sachin",
	"age" : 42,
	"mobileNo" : "9876543210",
	"game" : "cricket"
});

db.player.insert( 
{
	"_id" : "102",
	"name" : "Messi",
	"age" : 40,
	"mobileNo" : "9876567890",
	"game" : "football"
});

db.player.insert( 
{
	"_id" : "103",
	"name" : "Lin Dan",
	"age" : 36,
	"mobileNo" : "9191919191",
	"game" : "badminton"
});