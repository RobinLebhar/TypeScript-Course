
// DECLARATION
// const a = 1, c = "salut"
// let b = 2, d = "Yo"
// /*
// a = 2;
// a = "sa"

// b = 2;
// b = "salut"
// d = "AEAz"
// */


// TYPE de base et tableaux
// const x: number = 1;
// const y: string = ""
// let az: any;
// let a: string[];
// let a2: [string, number];
// a2 = ["Salut", 234]
// a = ["aaze", "Robin"]
// let b: Array<string> = ["aezezaeaz", "eazzaaze"]
// let b2: Array<number> = [1, 3, 4]
// let c: any; // voir autocomplétion
// c = "Yo"
// c = true;
// let d: boolean = false
// console.log(`Je suis ${a[1]}`);
// d = undefined
// d = null
// d = 1;

//ENUM
// enum Langues {
//     FR,
//     EN,
//     ES
// }
// enum Couleurs {
//     rouge = 1,
//     bleu = 0,
//     vert = 2
// }
// console.log(Couleurs.rouge)
// console.log(Couleurs.bleu)

// Fonctions

// let a: any

// a = 1
// // function isEven(_a: number): boolean {
// //     return _a % 2 === 0
// // }

// function isEven(a: string | number): boolean {
//     if (typeof a === "string")
//         return Number.parseInt(a) % 2 === 0
//     return a % 2 === 0

// }
// console.log(isEven("2"))
// console.log(isEven(2))
// console.log(isEven("3"))
// console.log(isEven(3))

// function faitDesTruc(a: number, options: { o1: string, o2: number, o3: boolean }): void {
//     console.log("Doing shit")
// }

//ITERATORS
// let pets = new Array(["Cat", "Dog", "Hamster"]);

// for (let pet in pets) {
//     console.log(pet); // "species"
// }

// const options = { o1: "azeaze", o2: 1, o3: true };
// faitDesTruc(1, options)
// Class
// class Hero {
//     constructor() {
//         console.log("A new hero is born !")
//     }
// }

// class Warrior extends Hero {
//     private _name: string;
//     private _caracteristics: Caracteristics;
//     private _onAttackCallBack: (damage: number) => void;
//     constructor(catacteristics: Caracteristics) {
//         super()
//         this.sayHi()
//         this._caracteristics = catacteristics;
//     }
//     get name(): string { // require es5 donc a ajouter au config puis lancer un simple tsc --watch
//         return this._name;

//     }
//     set name(n: string) {
//         this._name = n;
//     }
//     private sayHi() {
//         console.log("AHOU")
//     }
//     sayName() {
//         console.log("Je suis " + this._name)
//     }
//     attack() {
//         this._onAttackCallBack(this._caracteristics.strength + 100)
//         console.log("Coup d'hache dans la yeul")
//     }
// }


// const caracteristic: Caracteristics = {
//     strength: 10,
//     intelligence: 2,
//     weapon: "Hache",
//     canFly: false,
//     onAttackCallBack: (damage: number) => console.log("Coup du guerrier inflige " + damage)
// }
// let war = new Warrior(caracteristic)
// war.name = "Conan"
// console.log(war.name)
// war.attack()




// interface Caracteristics {
//     strength: number,
//     intelligence: number,
//     weapon: string,
//     canFly: boolean
//     onAttackCallBack: (damage: number) => void

// }


// class Test implements Caracteristics {
//     strength: number;
//     intelligence: number;
//     weapon: string;
//     canFly: boolean;
//     onAttackCallBack: (damage: number) => void;


// }

//ETENDRE DES INTERFACES
// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// TYPE CONDITIONNE

// interface CremeGlacee {
//     boule1: "Vanille" | "Chocolat",
//     boule2: "Fraise",
//     boule3?: "Citron" | "Pistache"
// }

// const cg1: CremeGlacee = { boule1: "Chocolat", boule2: "Fraise" }
// const cg2: CremeGlacee = { boule1: "Vanille", boule2: "Fraise", boule3: "Vanille" }
// const cg3: CremeGlacee = { boule1: "Vanille", boule2: "Fraise", boule3: "Pistache" }


// CASTER UN TYPE
// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;

//TYPE GENERIC
// function getLengthOfArray<T>(array: Array<T>): number {
//     return array.length
// }

// NAME SPACE

// namespace Characters {
//     class Hero {

//     }
//     export class Warrior extends Hero {

//     }
//     export class Wizard extends Hero {

//     }
// }


// let warrior = new Characters.Warrior()

// MODULE ( voir index.ts)
// export default class Warrior {

// }


// COMPATIBILITES DES TYPES
/*interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();


let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y; // fonctionne car y doit au moins respecter le contrat de Name ou + ce qui est le cas



*/
//  FUNCTION COMPARISON
// on peut assigner x a y car y contient au nois ce qu'il ya dans x mais pas l'inverse
/*
let x = (a: number) => a;
let y = (b: number, s: string) => b;

y = x; // OK
console.log(y)
x = y; // Error
*/

// INTERSECTION DE TYPES
/*
interface Identity {
    firstName:string;
    lastName: string;
}

interface Size {
    height : number;
    weight : number;
}

function test(): Identity & Size {
    return {
        firstName :"ADSAS",
        lastName:"EQW",
        height :1,
        weight :2
    }
}
*/

// DECORATORS

// decorators can be used to annotate a class, property, method or parameter.

// "experimentalDecorators": true
/*
function classLogger(target:Function){
   //  console.log("classLogger()",target)
}
function methodLogger(showResult:boolean){
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        const method: Function = descriptor.value;

        descriptor.value = function(...args: any[]){
            const params = args.map(p => JSON.stringify(p)).join()
            const result = method.apply(this, args);
            console.log("Function called : "+propertyKey+"("+params+") ")
            if(showResult) console.log("Result is : "+JSON.stringify(result));
            return result;
        }
    }
}


function attributeLogger(target: Object, propertyKey: string ){
  //  console.log("attributeLogger()",target, propertyKey)
}


class Test {
    private _a : string;
    private _b: number;


    get a():string {
        return this._a
    }
    get b(): number {
        return this._b
    }
    set a(_a: string) {
        this._a = _a;
    }
   @methodLogger(true)
    public add(a:number,b:number){
        return a+b
    }
}
const t = new Test();
console.log(t.add(1,2));

*/


// LES TYPES UTILES
/*
https://www.typescriptlang.org/docs/handbook/utility-types.html
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}


const todo : Readonly<Todo> = {
    title:"Hello",
    description : "Une desc"
}


todo.description = "qwew"

interface Person {
    readonly id : string,
     age: number
}
 const p: Person = {id:"1000",age:50}
p.age = 10
p.id = "9000"
 */
