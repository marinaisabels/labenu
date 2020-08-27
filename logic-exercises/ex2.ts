
// a e //b

let str = "eu amo programação"


function firstString() {
    let myLenStr = str.length
    let myStr = str.slice(0,1)
    let mylastStr = str.slice(17, 18)
    let myArrayStr = str.split('', 18)

    for (let i = 0; i < str.length; i++) {
        str[i]
    }
    return {
        str, 
        myLenStr,
        myStr,
        mylastStr,
        myArrayStr
    }
    
}


console.log(firstString())