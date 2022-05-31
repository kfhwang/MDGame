var links = [{ "title" : "w3School+" , "url" : "http://www.w3school.com" , "comment" : "Great site for web dev tutorials" , "favourites" : 100.0 , "tags" : [ "tutorials" , "dev" , "code" , "js"] ,  "user_id" : "52b82dcdd62b3fbe0bbb46c3"},
{  "title" : "Psdtut+" , "url" : "http://psd.tutsplus.com" , "comment" : "Photoshop tutorials like none other" , "tags" : [ "photoshop" , "tutorials"] , "favourites" : 507.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c4"},
{  "title" : "Tuts+ Premium" , "url" : "http://tutsplus.com" , "comment" : "The best screencast courses over." , "tags" : [ "screencast" , "tutorials"] , "favourites" : 149.0 , "user_id" :"52b82dcdd62b3fbe0bbb46c3"},
{  "title" : "Envato" , "url" : "http://envato.com" , "comment" : "Greatest company in Australia" , "tags" : [ "business" , "australia"] , "favourites" : 279.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c4"},
{ "title" : "MongoDB.org" , "url" : "http://mongodb.org" , "comment" : "Really cool NoSQL database" , "tags" : [ "database" , "development"] , "favourites" : 79.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c4"},
{  "title" : "Audible Audio Books" , "url" : "http://audible.com" , "comment" : "Good audio books" , "tags" : [ "books" , "audio"] , "favourites" : 100.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c4"},
{  "title" : "Wikipedia" , "url" : "http://wikipedia.org" , "comment" : "The source of all knowledge" , "tags" : [ "information" , "encyclopaedia" , "online" , "wikis"] , "favourites" : 187.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c5"},
{  "title" : "Mobiletuts+" , "url" : "http://mobile.tutsplus.com" , "comment" : "Great tutorials for developing on mobile devices" , "tags" : [ "mobile" , "development"] , "favourites" : 84.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c4"},
{  "title" : "Amazon.com" , "url" : "http://amazon.com" , "comment" : "Where to buy things" , "tags" : [ "selling" , "buying"] , "favourites" : 329.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c3"},
{  "title" : "ThemeForest" , "url" : "http://themeforest.com" , "comment" : "Where to buy the best website themes" , "tags" : [ "marketplace" , "themes"] , "favourites" : 654.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c3"},
{  "title" : "Tuts+ Premium" , "url" : "http://tutsplus.com" , "comment" : "The best screencast courses over." , "tags" : [ "screencast" , "tutorials"] , "favourites" : 149.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c5"},
{ "title" : "CodeCanyon" , "url" : "http://codecanyon.net" , "comment" : "A marketplace for code." , "tags" : [ "marketplace" , "code"] , "favourites" : 217.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c3"},
{ "title" : "GraphicRiver" , "url" : "http://graphicriver.net" , "comment" : "A marketplace for graphics" , "tags" : [ "marketplace" , "graphics"] , "favourites" : 543.0 , "user_id" : "52b82dcdd62b3fbe0bbb46c4"}
];
var DB = require('nedb-promises'); 
 
var Link = DB.create(__dirname+'/link.db');

Link.count({}).then(function(result){ 
    if(result<1)  
    Link.insert(links).then(result => console.log(result));

})
//Insert 
//Link.insert({"title":"Multimedia", "comment":"null", "url":"https://md.nutc.edu.tw", "favourites": 500, "tags":["edu", "game"]})

//findOne
//Link.findOne({"favourites":500}, {"title":1, "_id":0}).then( result => console.log(JSON.stringify(result)))

//find 
//Link.find({favourites:500}).then(result => console.log(JSON.stringify(result)));

//sort, skip, limit
// Link.find({},{title:1, favourites:1, "_id":0}).sort({favourites:-1}).limit(3).then(
//     result=> console.log(JSON.stringify(result))
//    )
//$gt
// Link.find({favourites:{$gte:500}}, {title:1, favourites:1, "_id":0}).then(
//     result => console.log(JSON.stringify(result))
// )

//RegExp
// Link.find({url:/.org/}, {title:1, url:1, "_id":0}).then(
//     result => console.log(JSON.stringify(result))
// )

// Link.find({tags:{$exists:false}}, {title:1, tags:1}).then(
//     result => console.log(JSON.stringify(result))
// ).catch(
//     err => console.log(err)
// )
//Link.find({$or:[{},{},{}]})
// Link.find({$and:[{favourites:{$gt:200}},{favourites:{$lt:300}}]}).then(
//     result => console.log(JSON.stringify(result))
// )
//$in $all
//Link.find({tags:{$all:["code","dev"]}}) nedb無此指令
// Link.find({$and:[{tags:"code"},{tags:"dev"}]}).then(
//     result => console.log(JSON.stringify(result))
// )
//find object in array 
// Link.find({scores:{$elemMatch:{score:2}}}).then(
//     result => console.log(JSON.stringify(result))
// )

//count
// Link.find({}).then(
//     result => console.log("totls:"+result.length)
// )
// nedb not work
// Link.find({}).count().then(
//     result => console.log(result)
// )
Link.count({}).then(
    result => console.log(result)
)