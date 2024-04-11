// // sayHello();
// // 함수 표현식 (변수에 넣는 방법)은 선언하기 전 함수를 부를 경우 에러 발생 

// const sayHello = function(){
//     let hello = "hello world~~!";
//     console.log(hello);
// }

// sayHello();


// sayHello2(); 
// // 함수 선언식은 어디서나 호출 가능

// function sayHello2(){
//     let hello = "hello world 2 ~~!";
//     console.log(hello);
// }

// sayHello2();



// function plus(){
//     let num = 5 + 5;
//     return num;
// }

// function str(){
//     let string = "함수를 호출했습니다."
//     return string;
// }

// function bool(){
//     let boo = 5 < 10;
//     return boo;
// }

// function noreturn(){
//     console.log("리턴값 X")
// }

// let result = plus();
// console.log(result);

// console.log(bool())
// console.log(str())
// console.log(plus());



// let bool = confirm("해당상품의 구매확정");
// if(bool){
//     console.log("구매 확정되었습니다. ")
// } else {
//     console.log("구매 취소되었습니다.")
// }


// function result(){
//     console.log("리턴문은 하나만 가능");
//     return 10;
//     return 20;

// }
// console.log(result())





// function result(){
//     let bool = confirm("해당 상품의 구매확정");
//     if(bool){
//         console.log("구매 확정되었습니다. ");
//     } else {
//         console.log("구매 확정되지 않았습니다.");
//         return; //아래 구매 확정 문구는 나오지 않고 그냥 종료 
//     }
//     console.log("구매 확정감사합니다.");

// }
// result();


// function result(num){
//     console.log("입력받은 숫자 : " + num);
//     let sum = number + number;
//     return sum;
// }
// result(100);



// function result(num1, num2){
//     console.log("입력받은 숫자1 : " + num1);
//     console.log("입력받은 숫자2 : " + num2);
//     let sum = num1 + num2;
//     console.log(sum)
// }
// result(100, 200);




// function sum(num1, num2){
//     let sum1 = 0, sum2 = 0;
    
//     for(num1; num1 <= num2; num1+=1){
//         if(num1 % 2 == 0){
//             sum1 += num1; //짝
//         } else {
//             sum2 += num1; //홀
//         }
//     }
//     return "짝수의 합 : " + sum1 + "홀수의 합 : " + sum2 + "총 합 : " + (sum1 + sum2);
// }
// console.log(sum(1,100));


const handleBtn1Click = function(){
    window.alert("회원가입을 축하합니다.");
}

const handleBtn2Click = function(){
    window.alert("회원탈퇴가 완료되었습니다.");
}

const handleTyping = function(){
    console.log("현재 키보드를 사용하여 입력중입니다.");
}

const handlePush = function(){
    console.log("현재 입력버튼을 누르고 있습니다.")
}

const button1 = document.querySelector("#button1"); 
const button2 = document.querySelector("#button2"); 
const inputTyping = document.querySelector("#typing");
const inputPush = document.querySelector("#click");

button1.onclick = handleBtn1Click;
button2.onclick = handleBtn1Click;
inputTyping.onkeydown = handleTyping;
inputPush.onclick = handlePush;