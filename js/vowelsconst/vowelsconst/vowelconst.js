function vowels(str){
  arr = [];
  //var str = "javascriptloop";
for(let i=0; i<str.length; i++) {

  if((str.charAt(i) == 'a') ||
      (str.charAt(i) == 'e')  ||
      (str.charAt(i) == 'i') ||
      (str.charAt(i) == 'o') ||
      (str.charAt(i) == 'u')) {
        console.log(str.charAt(i));
      }

  else{
            arr.push(str.charAt(i));
        }

}
for (j=0; j<arr.length; j++)
{
  console.log((arr[j]));
}


console.log("hello");
}
vowels("javascriptloop")


// vowels("javascriptloop")
//
// function vowels(){
//   arr = [];
//   var str = "javascriptloop";
// for(let i=0; i<str.length; i++) {
//   if(str.charAt(i).match(/^[aeiou]/)) {
//     console.log(str.charAt(i));
//   }
//   else{
//             arr.push(str.charAt(i));
//         }
// }
// for(var j in arr) {
//   console.log(arr[j]);
// }
//
// }




// for(var j in arr) {
//   console.log(arr[j]);
// }


// function vowels() {
//   let vowels = ["a", "e", "i", "o", "u"];
// var str = "javascriptloop";
//   for (let v in str) {
//     console.log(v);
//   }
//   for(let v of str) {
//           if(!vowels.includes(v))
//               console.log(v);
//       }
// }





// function vowels(s) {
//     let vowels = ["a", "e", "i", "o", "u"];
//
//     for(let v of s) {
//         if(vowels.includes(v))
//             console.log(v);
//     }
//
//     for(let v of s) {
//         if(!vowels.includes(v))
//             console.log(v);
//     }
// }
// vowels("javascriptloop");



// public void vowels(){
//     for(int index = 0;index < word.length();index++){
//     char vowel = word.charAt(index);
//     if( (vowel == 'a')||
//         (vowel == 'e')||
//         (vowel == 'i')||
//         (vowel == 'o')||
//         (vowel == 'u')){
//             System.out.println(vowel);
//             }
//         }
//     }


// function vowels() {
//       var i;
//
//       var str[];
//
//       var str = "javascriptloop";
//
//       for(i = 0; i < str.length; i++)
//       {
//             if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' )
//                 || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
//             {
//                console.log(i, str(i));
//
//             }
//       }
//
// }
