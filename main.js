//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello Charlotte!';
 //click button chenge name
 let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');
 myButton.onclick = function() {
   setUserName();
 }
 function setUserName() {
   let myName = prompt('Please enter your name.');
   localStorage.setItem('name', myName);
   myHeading.textContent = 'Staszek is cool, ' + myName;
 }
 if(!localStorage.getItem('name')) {
   setUserName();
 } else {
   let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Staszek is cool, ' + storedName;
 }
 
 function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Staszek is cool, ' + myName;
  }
}
document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
  let myHTML = document.querySelector('html');
  myHTML.onclick = function() {};//Komunikat po kliknięciu
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/opera.png') {
    myImage.setAttribute ('src','images/opera2.png');
  } else {
    myImage.setAttribute ('src','images/opera.png');// zmiana obrazu na inny
  }
}