let type1=document.getElementById('base1');
let type2=document.getElementById('base2');
let input1=document.getElementById('input1');
let span=document.getElementById('span');

function change(){
    let num=+input1.value;
    let base1=+type1.value;
    let base2=+type2.value;
    // console.log(num +" "+ base1+" "+base2+" ");

    // for dedcimal 

    if(base1===10){
        if(isNaN(num)){
            // alert(" Enter a correct No");
            span.textContent='Please Enter Valid Decimal Number';
            span.style.color='red';
            input1.value=null;
        }
        else{
            let convertedNo=num.toString(base2);
            span.style.color='green';
            span.style.textTransform='uppercase';
            span.textContent=convertedNo;
           
        }
    }
    else if(base1===16){
       let ans=convertHexadecimalToDecimal(document.getElementById('input1').value);
       if(ans==false){
        span.textContent='Please Enter Valid Hexa-Decimal Number';
        span.style.color='red';
        input1.value=null;
       }
       else{
        let convertedNo=ans.toString(base2);
        span.style.color='green';
        span.style.textTransform='uppercase';
        span.textContent=convertedNo;
       }
    }
   else if(base1===8){
    let ans=convertOctalToDecimal(document.getElementById('input1').value);
    if(ans==false){
        span.textContent='Please Enter Valid Octal Number';
        span.style.color='red';
        input1.value=null;
       }
     else{
        let convertedNo=ans.toString(base2);
        span.style.color='green';
        span.style.textTransform='uppercase';
        span.textContent=convertedNo;
        if(span.innerText=='NAN'){
            span.textContent='Please Enter Valid Octal Number';
            span.style.color='red';
            input1.value=null; 
        }
       }
   }
   else if(base1===2){
    let ans=convertBinaryToDecimal(document.getElementById('input1').value);
    console.log(ans);
    if(ans==false){
        span.textContent='Please Enter Valid Binary Number';
        span.style.color='red';
        input1.value=null;
       }
     else{
        let convertedNo=ans.toString(base2);
        span.style.color='green';
        span.style.textTransform='uppercase';
        span.textContent=convertedNo;
        if(span.innerText=='NAN'){
            span.textContent='Please Enter Valid Binary Number';
            span.style.color='red';
            input1.value=null; 
        }
       }
   } 
}

function convertHexadecimalToDecimal(inputNumber){
    inputNumber = inputNumber.toString();
    var Len = inputNumber.length;
    var position = Len;
    var answer = 0;
    for(var i = 0; i < Len; i++){
        var num = inputNumber[i];
        if(num == 'A' || num=='a'){
            num = 10;
        }else if(num == 'B'|| num=='b'){
            num = 11;
        }else if(num == 'C' || num=='c'){
            num = 12;
        }else if(num == 'D' || num=='d'){
            num = 13;
        }else if(num == 'E' || num=='e'){
            num = 14;
        }else if(num == 'F' || num=='f'){
            num = 15;
        }else if(num >= '0' && num <= '9'){
            num = Number(num);
        }else{
            answer = false;
            return answer;
        }
        position--; 
        answer = answer + (num* Math.pow(16,position));
    }
    return answer;
}   

function convertOctalToDecimal(no){
    let num=no;
    let decVal=0;
    let base=1;
    let temp=num;
    while(temp){
        let lastDigit=temp%10;
        if(lastDigit===9){
            return false;
        }
        temp=Math.floor(temp/10);
        decVal +=lastDigit*base;
        base *=8;
    }
    return decVal;
}

function convertBinaryToDecimal(no){
  let sum=0;
  let i=0;
  let temp=+no;
  while(temp){
    if(temp%10 >1){
        return false;
    }
    sum=sum+Math.pow(2,i)*(temp%10);
    i++;
    temp=Math.floor(temp/10);
    // console.log(temp+" temp");  
  }
//   console.log(sum);
  return sum;
}