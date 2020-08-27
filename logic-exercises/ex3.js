// a
var str1 = "escola";
var str2 = "Escola";
function sameStr(str1, str2) {
    if (str1 === str2) {
        return false;
    }
    else {
        return true;
    }
}
console.log(sameStr(str1, str2));
// b
function sameStrs(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    }
    else if (str1.toUpperCase() === str2.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}
console.log(sameStrs(str1, str2));
