console.log("Merhaba Kodlama.io")

//---------------------------
// var dolarDun = 9.20
// var dolarBugun = 9.30
// artık var key wordu değil let keywordu değişken tanımlama için kullanılır 
//---------------------------


//JS type safe değildir.

let dolarDun = 9.20
let dolarBugun = 9.30

//dolarDun = "Ankara" // yazılabilir

{
    let dolarDun = 9.10
}

console.log(dolarDun) // 9.20 yazar çünkü let dolarDun = 9.10 farklı bir scopeta


//---------------------------
// var dolarDun = 9.20
// var dolarBugun = 9.30

// {
//     var dolarDun = 9.10
// }

// console.log(dolarDun) //9.10 yazardı var daki sıkıntı. 
//---------------------------


const euroDun = 11.2
//euroDun = 11 // atama

console.log(euroDun) // consoleda hata verir çünkü const olarak tanımladığımız için başka değer atayamayız

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log(konutKredileri)

for (let index = 0; index < konutKredileri.length; index++) {
    console.log(konutKredileri[index])
    
}

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")