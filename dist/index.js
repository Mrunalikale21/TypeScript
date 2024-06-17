"use strict";
//tsc .\sample.ts -w for run
// const a = 344;
// alert(a);
let a = 25; //ifit declares once we cant redelcare
let nambo = "abhi";
let b = "{23}";
let c; //means any data type
let namm = "342";
let surname; //this is union data type like we can give more than one data type
surname = 56;
surname = "kale";
const func = (n, m) => {
    console.log(n, m);
    return String(n * m);
};
const func2 = (n, m) => {
    console.log(n, m);
    return (n * m);
};
const func3 = (g, h) => {
    console.log(g, h);
    return g * h;
};
//array
const arr = [12, 24, 36, 48];
const arr2 = ["sad"];
//we can decalre as follows also
const arr3 = new Array(20);
const arr5 = [230, "bad", "cat"];
// arr3.forEach(i => {
// })
//when we want fix number of item this is tuple
const arr0 = [234.5, 345, 34];
//objects 
const obj = {
    height: 3434,
    weight: 34,
    gender: true,
};
const obj3 = {
    height: 453,
    weight: 45,
};
const gigi = {
    height: 3455,
    scolar: true,
    weight: 4533,
    func: (n, m) => {
        console.log(n * m);
    },
};
const kendal = {
    height: 45,
    scolar: true,
    weight: 43,
    func: (n, m) => {
        console.log(n * m);
    },
};
kendal.func(20, 40);
//option parameter
const func6 = (n1, m1, l) => {
    if (typeof l === "undefined")
        return n1 * m1;
    return n1 * m1 * l;
};
func6(25, 23);
//default parameter
const func7 = (g, u, v = 20) => {
    return g * u * v;
};
func7(25, 26);
//rest operator
const func9 = (...k) => {
    return k;
};
func9(24, 34, 3, 23, 4, 2, 1);
function lol(n) {
    return 45;
}
const lol2 = function lol(n) {
    return n;
};
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "macBook",
    stock: 46,
    price: 9999,
    photo: "samplephoto"
};
getData(productOne);
