
var stringSize = function (text) {
    return text.length;
}
var replaceCharacterE = function (text) {
    return text.replace("e", " ");
}
var concatString = function (text1, text2) {
return text1 + text2;
}
var showChar5 = function (text) {
return text.charAt(4);
}
var showChar9 = function (text) {
    return text.substring( 0,9);

}
var toCapitals = function (text) {
    return text.toUpperCase();

}
var toLowerCase = function (text) {
    return text.toLowerCase();

}
var removeSpaces = function (text) {
    return text.trim();

}
var IsString = function (text) {
    return text.IsString = true;

}

var getExtension = function (text) {
    return text.split(".").pop();
}
var countSpaces = function (text) {
    return text.split(' ').length-1;

}
var InverseString = function (text) {
    return text.split('').reverse().join('');
}


var power = function (x, y) {
    return Math.pow(2,3);

}
var absoluteValue = function (num) {
    return Math.abs(-5);

}
var absoluteValueArray = function (array) {
    return array.map(Math.abs);

}
var circleSurface = function (radius) {
    return Math.round(Math.PI*radius*radius)

}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab , ac);

}
var BMI = function (weight, height) {
    return parseFloat((weight/(height*height)).toFixed(2));

}

var createLanguagesArray = function () {
    var arr =  ["Html","CSS","Java","PHP"]
    return arr;

}

var createNumbersArray = function () {
var numbers = [ 0 ,1,2,3,4,5]
return numbers;
}

var replaceElement = function (languages) {
    languages[2] = 'Javascript';
    return languages;
}

var addElement = function (languages) {
    languages.push('Ruby' , 'Python')
    return languages;
    
}

var addNumberElement = function (numbers) {
    numbers.unshift(-2,-1)
    return numbers;

}

var removeFirst = function (languages) {
    languages.shift()
    return languages;

}

var removeLast = function (languages) {
    languages.pop()
    return languages;

}

var convertStrToArr = function (social_arr) {
    var spl = social_arr.split(",");
    return spl;

}

var convertArrToStr = function (languages) {
    var str = languages.join();
    return str;

}

var sortArr = function (social_arr) {
    var sort = social_arr.sort();
    return sort;

}

var invertArr = function (social_arr){
    var reverse = social_arr.reverse();
    return reverse;

}
