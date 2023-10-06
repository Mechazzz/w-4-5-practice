const arr = [1, 2, 3, 4, 5]

function returnDouble(number) {
    return number * 2
}

// arrow function es hagyomanyos function kozott a kinezet a kulonbseg ( ha egy parameterem van csak, elhagyhatom a zarojelet, illetve ha egy sorban van az egesz elhagyhatom a return szot es a kapcsos zarojelet)
/*  const returnDouble2 = (number) => {
    return number * 2 
}  */

 const returnDouble2 = number => number * 2

 console.log(returnDouble(25))

for (let i=0; i < arr.length; i++) {
   console.log(returnDouble(arr[i]))  // meghivom a fuggvenyt es atadom az array i edik elemét
} 


/*  function logDouble(number) {
    console.log(number * 2)
} */

// olyan fuggveny ami az arrayen van, ezt az arrayen kell lefuttatni: (a metodus az az olyan fuggveny ami mast adatokon el)
/* arr.forEach(function(element){
    console.log(element*2)
}) */


/* arr.forEach(logDouble) */

//inline fuggveny amikor nincs kiszervezve hanem helyben irom meg az egeszet:
//a kovetkezo fuggveny az element-el kezdve egy call back fuggveny ami nincs eléore gyartva hanem inline lett megadva. Akkor fut le amikor a forEach mondja nekii
arr.forEach(element => console.log(element * 2))