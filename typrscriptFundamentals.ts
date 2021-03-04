// Common JS datatypes: String, Boolean, Number, Array, Function, Object
/*Additional datatypes provided by TS: 
1. Any: essentially disables any type checking
2. Tuple: They are fixed length arrays of predefined datatypes e.g: RGB values of colors [number, number, number]
          Array cannot contain any less or any more elements than defined
3. Enum: Allows you to define friendly names to a set of values. e.g: enum arrowKeys = {Up, Down, Right, Left}
 */

 export{}
/*Defining type to a variable*/
    let stagename: string = "A Beautiful Vue"
    let roomsize: number = 100
    let isComplete: boolean = true

/* Defining array: determine what type should exist in the array */
let shoppingList: string[] = ['apples', 'bananas', 'cherries' ]

/* Defining a function: Parameters and what you return from function are main points to remember */
let generateFullName = (firstName: string, lastName: string): string => {
    return firstName + '' + lastName;
} 

/* Defining an object */
let person: {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
} = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense']
}

/* Defining custom types */
/* Below code wont work as we cannot assign buttonType to any other type except for primary type.
    type buttonType = 'primary'
    let buttonStyles: buttonType = 'secondary' 
*/

/* Union operator (OR operator in JS) is used for multiple assignment */
type buttonType = 'primary' | 'secondary' | 'success' | 'danger';
let buttonStyles: buttonType = 'secondary'

/* Defining an interface */
// type comicUniverse = 'Marvel' | 'DC'
// interface Hero = {
//     name: string;
//     age: number;
//     activeAvenger: boolean;
//     powers: string[];
//     universe: comicUniverse;
// }

// let person1: Hero = {
//     name: 'Peter Parker',
//     age: 20,
//     activeAvenger: true,
//     powers: ['wall-crawl', 'spider-sense'],
//     universe: 'Marvel'
// }

/* Function with generics. 
Generics allow you to define a dynamic type to use in a function
Generics are followed by function name in <> */
/* function createList <T> (item: T): T[] {
    const newList: T[] = []
    newList.push(item)
    return newList
} 
    const numberList = createList<number>(123)
    const stringList = createList<string>("Hello!")
*/ 

/* Points to remember when applying Custom types with Methods:
1. Whether our parameters need Custom Types
2. Whether or not to apply custom types to return value of method  
*/
