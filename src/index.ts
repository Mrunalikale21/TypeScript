//tsc .\sample.ts -w for run
//tsc -w


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

//functions

type FuncType2 = (n1:number , m1:number, l?:number) => number;


//option parameter
const func6: FuncType2 = (n1,m1,l) => {
  if(typeof l === "undefined") return n1*m1;

  return n1*m1*l;
}

func6(25,23);

//default parameter
const func7 = (g:number, u:number , v:number = 20): number => {
  return g*u*v
}

func7(25,26);

//rest operator
const func9 = (...k:number[]) => {
  return k;
}

func9(24,34,3,23,4,2,1)

function lol(n:number):number{
  return 45;
}

const lol2:FuncType = function lol(n){
  return n
}

//function with object

// const getData = (product:
//   {name:string, 
//     stock:number, 
//     price:number,
//     photo: string,
//   }
// ):void => {
//    console.log(product);
// }

interface Product{
  name:string;
  stock:number; 
  price:number;
 photo: string;
 readonly id: String
}

type GetData = (product: Product) => void

const getData : GetData = (product) => {
  console.log(product);
}

const productOne :Product ={
  name : "macBook",
  stock : 46,
  price: 9999,
  photo: "samplephoto",
  id: "dkfbvholshnfbvb"
}

getData(productOne);

//never type
const errHandler = ():never => {
  throw new Error();
}

type themeMode = "light" | "dark";
const mode : themeMode = "dark"


//classes
class Player {
  private height;
  weight;


constructor(height:number, weight:number){
  this.height = height;
  this.weight = weight;
}

myHeight = () => {
  return this.height
}
}

const abhi = new Player(100,150);
console.log(abhi.myHeight);

//shortcut way
class player2{
  public readonly id:string
  constructor(
    private height : number,
    public weight : number,
    protected power: number
    
  ){
    this.id = String(Math.random()*100)
  }

  getMyHeight = () => this.height;
}

const abhi2 = new player2(233,422,32);
console.log(abhi2.getMyHeight)


class plater extends player2{
  special : boolean
  constructor(
    height:number,
     weight:number, 
     power:number,
     special: boolean ){
    super(height,weight,power);
    this.special = special;
  }

  getMyPower = () => this.power

  //getter setter function
  get MyWeight() : number {
    return this.weight
  }

  set changeWeight(val : number){
    this.weight = val;
  }
  

}

const vicky = new plater(100,233,45,true);
console.log("height" , vicky.getMyHeight());
console.log("weight" , vicky.weight);
console.log("power" , vicky.getMyPower());
console.log("id", vicky.id);
vicky.changeWeight = 1000;
console.log("weight" , vicky.MyWeight);

interface productType{
  name:string,
  price:number,
  stock:number,
  getId : () => string
  offer? :boolean,
}

class Product4 implements productType{
 
  private id : string = String(Math.random()*100);

   constructor( //directly accesed
    public name:string,
    public price : number,
    public stock: number
   ){}

   getId = () => this.id;
   
}

const monu = new Product4("gfrekfn", 34000,20);
monu.getId();


