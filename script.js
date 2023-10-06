console.log("hello world")

function domManipulation () {

  // eseményfigyelőnek legalább két paramétert meg kell adni, ez az eseményfigyelő azt csinálja hogy a függvény akkor fusson le ha betölött a weblap

const rootElement = document.querySelector ('#root')
console.log(rootElement)
rootElement.innerHTML= "this is done by dom manipulation" }

function logClick () {
    console.log('clicked')
}

let tickCount = 0

function logTick () {
    console.log(`tick ${tickCount}`)
    tickCount++
}

window.addEventListener('load', domManipulation)

window.addEventListener('click', logClick)

window.setInterval(logTick, 1000)   // a setInterval olyan függvény ami bizonyos időnként lefuttat egy callback függvényt ,
// ez azt mondja most hogy a logticket 1000 millisekundumonkent futtassa le, azaz másodpercenként