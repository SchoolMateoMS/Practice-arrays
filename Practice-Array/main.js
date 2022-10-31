//Months
let Months = ["Jan", "June", "July"];

//Joy
let joy = [""];
for(i = 0; i < 700; i++){
    joy += [", joy"];
}

//num7
let num7 = [""];
for(i = 0; i < 500; i++){
    num7 += [,7];
}

//Random 5000 decimals
let decimal5000 = [""];
for(i = 0; i < 5000; i++){
    let Random = (Math.random() * 100)
    decimal5000 += [, Random];
}

//Random 300 decimals
let decimal300 = [""];
for(i = 0; i < 300; i++){
    let Random = (Math.random() * 40)
    decimal300 += [, Random];
}

//multiples of 4
let multiples4 = [""];
for(i = 20; i < 800; i++){
    if(i % 4 === 0){
        multiples4 += [, i];
    }
}

//even numbers
let divis2 = [""];
for(i = 100; i > 10; i--){
    if(i % 2 === 0){
        divis2 += [, i];
    }
}

//color with comma
let colorStr = ["red, orange, yellow, green, blue, indigo, violet"];
let colorNames = colorStr.split(",");

//citiesStr
let citiesStr = ["Edmonton; Calgary; Vancouver; Saskatoon; Winnipeg"];

//last one :)
let names = [];
let looping = true;
while(looping){
    let inputNames = prompt("Type some names");
    if(inputNames === "done"){
        looping = false;
    } else{
        names.push(inputNames);
        console.log(names)
    }
}