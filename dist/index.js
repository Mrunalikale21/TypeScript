"use strict";
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
