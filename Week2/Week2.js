// npm install cheerio
console.log('hello')
var fs = require('fs');
var cheerio = require('cheerio');

var location ="";

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data03.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

console.log(location);

// print (to the console) names of thesis students
$('td').each(function(i, elem) {
    if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
        location += ($(elem).html().split('<br>')[2].trim());
    }
});

// write the project titles to a text file
//var thesisTitles = ''; // this variable will hold the lines of text

//$('td').each(function(i, elem) {
    
//    thesisTitles += ($(elem).text()) + '\n';
//});

fs.writeFileSync("./submit.txt", location);