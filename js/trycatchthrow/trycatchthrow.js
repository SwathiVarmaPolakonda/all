function trycatchthrow(a){
try {
    if(a > 0) {
        console.log("YES") ;
    } else if (a === 0) {
        console.log("Zero Error");
    } else if (a < 0) {
        console.log("Negative Error");
    }
}
catch(err) {
    console.log(err);
}
}
//isPositive(2);

// if(a>0) {
//         return "YES"
//     }
//     if(a===0) {
//         return "Zero Error"
//     }
//     if(a<0) {
//         return "Negative Error"
//     }
