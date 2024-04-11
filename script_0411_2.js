// let num1 = prompt("첫번째 값 입력 : ");
// let num2 = prompt("두번째 값 입력 : ");
// let p = document.getElementById("ptag");
// let str = "";

// if(num1 < num2){
//     str = `num2(${num2})가 num1(${num1})보다 큰 값입니다.`;
//     //str = "num2 (" + num2 + ") 가 더 큰 값입니다."
// } else if (num1 > num2) {
//     str = `num1(${num1})가 num2(${num2})보다 큰 값입니다.`;
//     //str = "num1 (" + num1 + ") 가 더 큰 값입니다."
// } else {
//     str = "2개는 같은 값입니다."
// }

// p.textContent = str;






// 반복문 
// let number = 1;
// let sum = 0;

// while(number <= 10){
//     console.log(number);
//     sum+= number;
//     number += 1;
// }
// console.log("1부터 10까지 합 : " + sum)
// console.log("1부터 10까지 합 : " + sum + sum + "입니다.") //문자열뒤에 있으니까 5555
// console.log( sum + sum + " = sum + sum = " + sum + sum);
// //앞에 sum+sum은 110, 뒤에 sum+sum은 5555 
// //문자열 뒤에 있는건 문자열로 취급 

// console.log("1부터 10까지 합 * 2 " + (sum + sum) + "입니다.") //괄호를 붙이면 우선순위가 올라가니까 110
// console.log("1부터 10까지 합 * 2 " + sum * 2 + "입니다.") //이건 110





// let number2 = prompt("숫자입력");
// if(number2 % 2 == 0){
//     console.log("짝수");
// } else {
//     console.log("홀수");
// }




// let num = 1;
// let num2 = 1;

// console.log("짝");
// while(num <= 10){
//     if(num % 2 == 0){
//         console.log(num);
//     } 
//     num = num + 1;
// }

// console.log("홀");
// while(num2 <= 10){
//     if(num2 % 2 == 1){
//         console.log(num2);
//     } 
//     num2 = num2 + 1;
// }

for(let i = 1; i < 5; i+=1){
    console.log(i);
}