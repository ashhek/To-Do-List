
/*exports.getdate = getdate;

function getdate(){*/
    //we can make it shorter
exports.getdate = function(){

var today = new Date();
var currentday = today.getDay();

var option = {
    weekday : "long",
    day: 'numeric',
    month: 'long'
};
return today.toLocaleDateString("en-US", option);


}
//same here we can also make it shorter 
module.exports.getday = getday;

function getday(){

var today = new Date();
var currentday = today.getDay();

var option = {
    day: 'numeric'
};
let day = today.toLocaleDateString("en-US", option);
return day;

}