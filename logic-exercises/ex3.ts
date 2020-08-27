// a

let str1 = "escola"
let str2 = "Escola"

function sameStr(str1: string, str2:string): boolean {
     if(str1 === str2){ 
         return false
     } else {
        return true
     }    
}


// b

function sameStrs(str1: string, str2:string): boolean {
    if(str1.toLowerCase() === str2.toLowerCase()){ 
        return true
    } else if(str1.toUpperCase() === str2.toUpperCase()) {
        return true
    }else {
        return false
    }   
}

