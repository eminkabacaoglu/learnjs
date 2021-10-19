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
//euroDun = 11 // atama yapılamaz çünkü const

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


let student = {id:1,name:"Emin"} //obje
console.log(student)
console.log(student.id+" "+student.name)


save()
saveOgrenci(student.name)

function save(){
    console.log("Saved")
}

function saveOgrenci(ogrenci){
    console.log(ogrenci+" Saved")
}

function saveOgrenciPuan(ogrenci,puan=10){
    console.log(ogrenci+" Puanı: "+puan)
}

saveOgrenciPuan(student.name)
saveOgrenciPuan(student.name,80)


function fonkParamDeneme(puan=10, ogrenci){
    console.log(ogrenci+" Puanı: "+puan)
}
fonkParamDeneme(undefined,student.name) // default parametreyi kullanmak için undefined demek lazım ya da default parametresi olanı sona taşımak lazım, birden fazla default varsa yine undefined kullanılabilir


let student2 = [student,{id:2, name:"Can"}, "Ankara", {city:"İstanbul"}]

console.log(student2)
console.log(student2[1])
console.log(student2[1].id+" "+student2[1].name)
console.log(student2[3].city)