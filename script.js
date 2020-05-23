"use strict";
function removeEveryOther(arr){
    let ilgis = arr.length;
    let newArr =[];
    for ( let i = 0; i < arr.length; i++ ){
        if ( i%2 === 0 ){
            newArr.push(arr[i]);
        }   
        
    }
    return newArr;
  }
//   console.log(removeEveryOther(['vienas','du','trys','ket']));

var a = 123;
let str = a.toString();
// console.log(typeof str)

function divide(weight){
    return ( weight%2 === 0 && weight !=2 ) ?  true :  false
  }

  function noBoringZeros(n) {
    let myString = n.toString();
    let newString = myString.replace(/0+$/g,'');
    return Number(newString);
  }
    // console.log(typeof(noBoringZeros(19500000000000)));

    function betterThanAverage(classPoints, yourPoints) {
        let ilgis = classPoints.length;
        let sum = 0;
        for ( let i = 0; i < ilgis; i++){
            sum += classPoints[i];
        }
        return ( sum/ilgis < yourPoints) ? true : false
      }

    //   console.log(betterThanAverage([5,6,3,2],5));

      function solution(str){
          let ilgis = str.length;
          let newString = '';
          for ( let i = ilgis-1; i > -1; i--){
            newString += str[i];
          }
        return newString
    }
    // console.log(solution('sedekuzukedes'))
    // console.log(solution('mano tevas buvo zvejas'))

    function digitize(n){
        let newString = n+'';
        let ilgis = newString.length;
        let revArr = [];
        for ( let i = ilgis-1; i > -1; i--){
          revArr.push(Number(newString[i]));
        }
      return revArr;
  }
//   console.log(digitize(1234567890))

//   function removeChar(str){
//     let newString = str.replace(1,1,'');
//     console.log(newString)
//     newString = newString.replace(newString.length,0);
//     return newString;
//    }
//    console.log(removeChar('BegemotaS'))
  
   var splitInParts = function(s, partLength){
    let redString = s.replace(/(\s)/g,'');
    let newString = '';
    for ( let i = 0; i < redString.length; i++){
        newString = newString + redString[i];
        if ( i%partLength === partLength-1){
            newString = newString + ' ';
           
        }
    }
    return newString;
  }

  console.log(splitInParts('qqqq ssss ffff rrr  tttt tt',4));