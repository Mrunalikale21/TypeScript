"use strict";
//type asseration to acess dom element
const btn = document.getElementById("btn");
// we can use like this also
// 1)const btn = <HTMLElement>document.getElementById("btn") as HTMLElement;
//or
// 2)const btn = document.getElementById("btn") !;
btn.onclick;
const img = document.getElementById("myImg"); //here we specifing about html element
img.src;
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(myinput.value);
};
