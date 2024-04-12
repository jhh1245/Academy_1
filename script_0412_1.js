// const btn1 = document.getElementById("button1"); //id가 button1인 요소를 변수로 만듦 
// const btn2 = document.getElementById("button2");
// const btn3 = document.getElementById("button3");

// const handleClick = function(event){
//     console.log("btn를 클릭했습니다. click 함수");
//     alert("로그인이 필요한 서비스입니다.");
//     console.log(event.target); //누가 이벤트를 발생시켰는지 알 수 있다.
// }

// const handleLogin = function(){
//     console.log("btn를 클릭했습니다. Login함수");
//     let id = prompt("아이디를 입력하세요.");
//     let pw = prompt("비밀번호를 입력하세요.");
//     console.log(`입력한 아이디는 ${id}이고 비밀번호는 ${pw}입니다.`)
// }

// const handleOther = function(event){
//     console.log("또 다른 핸들러를 등록합니다.");
// }

// btn1.addEventListener('click', handleClick); //btn1을 클릭했을 때 handleClick을 적용
// btn1.addEventListener('click', handleOther); //btn1을 클릭했을 때 또다른 함수를 적용시킬 수 있다. (이전방식과 다른점)

// btn2.addEventListener('click', handleLogin);


// btn3.addEventListener('click', handleClick);
// btn3.addEventListener('click', handleLogin);
// btn3.removeEventListener('click', handleClick); //handleClick를 제거 





// let count = 0;
// const button = document.getElementById("push"); //button
// const area = document.getElementById("area"); //div

// button.addEventListener('click', function() { // 함수를 이름없이 만듦 
//     count += 1; 
//     console.log(count + "번째 div가 생성되었습니다.")
//     const newDiv = document.createElement("div"); //새 div태그를 추가 이름은 newDiv

//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.backgroundColor = "yellow";
//     newDiv.style.margin = "5px";s
//     newDiv.className = "newDivClass";
//     newDiv.id = `newDiv${count}`;
//     area.appendChild(newDiv); //area안에 newDiv를 추가 

// });


const h1 = document.querySelector('h1');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const toggleBtn = document.querySelector('#toggle');
const replaceBtn = document.querySelector('#replace');

//console.log(h1.classList);

addBtn.addEventListener('click', function() {
    h1.classList.add('text'); //클래스명을 추가 
})

removeBtn.addEventListener('click', function() {
    h1.classList.remove('text'); //클래스명을 추가 
})

toggleBtn.addEventListener('click', function() {
    h1.classList.toggle('text'); //클래스명을 추가 
})

replaceBtn.addEventListener('click', function() {
    h1.classList.replace('text','image'); //클래스명 변경
})


// 다른 방법
function classAdd(el, className){ //element, class 
    el.classList.add(className);
}

classAdd(h1, "text"); 