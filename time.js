var d = new Date();
var now = new Date();

d.setDate(11);
d.setFullYear(2018);
d.setHours(17,14,0,000);
d.setMonth(6);



console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getDate());
console.log(d.getMonth());

console.log(d.getTime() -  now.getTime());

setTimeout(function(){
    console.log("OK");
    console.log(now);
}, d.getTime() -  now.getTime());