
console.log("25"+"15");

function multiplyDigits(num1, num2){
    return num1*num2;
}

console.log(multiplyDigits(2,5));
let x=3;
console.log(x===3);




let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/browser.png');
        
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Hello, please enter your name');
    console.log('entered name:'+myName);
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        console.log('Before setting text content:'+myName);
        myHeading.textContent='Mozilla is Cool, '+myName;
    }
     
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedUserName = localStorage.getItem('name');
    myHeading.textContent='Mozilla is Cool, '+storedUserName;

}

myButton.onclick=function(){
    setUserName();
}
