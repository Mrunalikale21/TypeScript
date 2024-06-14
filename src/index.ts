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

type UserName = (g:number, h:number) => number;

const func3:UserName = (g,h) => {
  console.log(g,h);
  return g*h;
}

//array
const arr:number[] = [12,24,36,48];
const arr2:string[] = ["sad"]

//we can decalre as follows also
const arr3:Array<String> = new Array(20);
const arr5:Array<string | number> = [230, "bad", "cat"];

// arr3.forEach(i => {
  
// })

//when we want fix number of item this is tuple
const arr0: [number,number, number] = [234.5, 345,34];

//objects 
const obj:{
  height: number;
  weight:number;
  gender:boolean;
} = {
  height: 3434,
  weight: 34,
  gender:true,
}

//we can define directly also
//or we can refer it
type Obj = {
  height: number;
  weight:number;
  gender?:boolean; //to make property as option
}

const obj3:Obj = {
  height:453,
  weight:45,
}

//we can also use interface keyword instead of type
interface Obj5 {
  height: number;
  weight:number;
}

type FuncType = (n:number, m:number) => void
interface newObj extends Obj5{
  scolar:boolean;
  gender?: boolean;
  // func?:(n:number,m:number)=>void
  func: FuncType;
}

const gigi:newObj = {
   height:3455,
   scolar : true,
   weight: 4533,
   func:(n,m) =>{
    console.log(n*m);
  },
}

const kendal:newObj={
  height:45,
  scolar:true,
  weight:43,
  func:(n,m) =>{
    console.log(n*m);
  },
}

kendal.func(20,40);

