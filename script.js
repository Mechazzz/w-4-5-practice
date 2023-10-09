/* const arr = ["egy", "ketto", "harom", "negy"]

/* console.log(arr.includes("ketto")) */

/* console.log(["one", "two", "three", "four"].includes("four")) */

/* const obj = {
    key1: "value",
    key2: 10,
    key3: function (){
    console.log("hello")
}
}

console.log(obj.key3()) */

/* const str = "hello world today" */

/* console.log(str.substring(3, 8))  //itt a 3 as index benne van de  a nyolcas már nem kell benne legyen
console.log(str.substring(3)) // itt a 3 as indextol minden benne van végig

console.log(str.charAt(4))  // visszaad egy adott ondeknel levo-t 
console.log(str.charAt(4), str[4] ) // az str[4] ugyanez */


/* console.log(str.indexOf("world")) */ // megmondja hogy az adott szó hányadik indexnél keződik, case sensitive így a kis és nagybetű számít (itt ha a szovegben a word kisbetű akkor nekünk is a kisbetűsre kell keresni)
/* 
console.log(str.split(" "))  */  // feldaraboljuk a mondatot és visszaad a feldarabolt szavakbol eredmenyt. Itt most szoközt adtam be a "" jelek közé ezért feldarabolja a szöveget és tömböt fogok kapni eredményként

/* console.log(str.toUpperCase())  // minden betűt nagybetűre ír át
console.log(str.toLocaleLowerCase())  // minden betűt kisbetűre ír át */

/* console.log(Math.random() *100)  //random számot ad vissza
console.log(Math.round(Math.random() *100))
console.log(Math.floor(Math.random()*20)) */
 

//-----------------------------------

/* const arr =  ["alma", "körte", "uborka"]
arr.push("szilva", "birs", "szölő")  // a tömbünk végére beilleszti ezeket
arr.push ({
    key:"value"
}) */

/* const arrElement = arr.pop() */ // a pop csak a legutolso elemmel ter vissza, ez megvaltoztatja az eredeti tömbünket , kiveszi az utolsó elemet !

/* const arrElement = arr.shiftp() // kiveszi a legelső elemet !!

console.log(arrElement, arr)   */
/* 
let arrr = ["alma", "körte", "uborka"]

console.log(arrr.reverse())  // megforditja a sorrendet 

console.log(arrr.join(""))  //join-al összefüzve kapom meg a dolgokat
 */

// vannak object metódusok is

/* const obj = {
    name: "Gipsz Jakab",
    age: 27,
    pets: [
        "Mirci,",
        "Lajcsi",
        "Géza"
    ],
    children: [
        {
            name: "Gipsz Jancsi",
            age: 5
        },
        {
            name: "Gipsz Juli",
            age: 11
        }
    ]
} */

/* console.log(Object.keys(obj))  // kiírja az object kulcsait */

/* for (const key of Object.keys(obj)) {
    console.log(key, obj[key])           // ezzel most megtudom adni hogy milyen kulcsaim vannak es azoknak mit az értékeik
} */

/* console.log(Object.entries(obj))  // nagy tömbön belül kisebb tömbök */

const users = [
    {
        name: "John Doe",
        age: 33
    },
    {
        name: "Kis Pista",
        age: 26
    },
    {
        name: "Kovács János",
        age: 54
    },
    {
        name: "Márta Richárd",
        age: 28
    }
]

/* users.forEach(function(user) {
    console.log(user.name)
}) */

// a for each fuggveny lefut az array minden indexedik elemere
// most mindegyik useren lefuttatom es kiiratom a user.name erteket
// a for eachnek nincs visszateresi fuggvenye, callback fuggvenyt hajt vegre ? , neki kell kulso tomb ha tombot akarok letrehozni

/* users.forEach((user) =>console.log(user.name))  // Arrow functionna alakitottuk */

/* const userNames = [] */
/* users.forEach((user) =>userNames.push(user.name)) 
console.log(users)  */

// a forEach nagyon fontos és sokat kell gyakorolni !!!!
// a user.forEach nem tér vissza adattal önmagáabn

/* const userNames = users.map((user) => user.name)  */ // a map visszaad egy másik tömböt amennyiben ugyanannyi elem van mint annak a tömbnek amin lefuttattam
// a map nagyon erős tool amit jól meg kell tanulni, egy ujtombot hoz letre

/* const userNames = users.map((user, index ) => console.log(index, user.name)) */
//itt az első az aktuális elem és az index
/* 
const userNames = users.map((user, index ) => {
    return {
    name: user.name,
    age: user.age,
    id: index + 1 }
})
 */
/* const userNames = users.map((user, index ) => {
    return `The users name is : ${user.name}, he/she  is ${user.age}. He/she is at the ${index + 1} place. `
})

console.log(userNames) */

const userNames = users.map((user, index ) => {
    if (user.age > 30) {
        return `The users name is : ${user.name}, he/she  is ${user.age}. He/she is at the ${index + 1} place. `
    } else {
        return `The user ${user.name} is too young.`
    }
})

console.log(userNames)

