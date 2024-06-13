// const a = 344;

// alert(a);

let a = 25;  //ifit declares once we cant redelcare

let nambo = "abhi";

let b:String = "{23}";

let c:any; //means any data type

let namm=<String>"342";

let surname: String|number //this is union data type like we can give more than one data type

surname = 56;
surname = "kale";

const func=(n:number,m:number)=>{
console.log(n,m);
return String(n*m);
}

const func2=(n:number,m:number):number=>{
console.log(n,m);
return (n*m);
}

//give return type at start
