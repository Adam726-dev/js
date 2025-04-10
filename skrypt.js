// console.log("hello");

// a = 10;
// b = 10;

// console.log (a==b);
// console.log (a===b);


// b%2 == 0 && b > 10 ? console.log("przysta") : console.log("nieprzysta");

// if (a>0) {console.log("dodatnia")} else {console.log("ujemna")}



// let BMI = null;
// let waga = 70;
// let wzrost = 1.75;
// console.log(BMI = waga/(wzrost**2));
// if (BMI<18.5) {console.log("niedowaga")} 
// else if (BMI >= 25) {console.log("nadwaga")} 
// else {console.log("BMI w normie")}

// const User = {
//     name: "Adam",
//     isActive: true,
//     role: "client",
//     blocked: false,
//     balance: 180,
// };

// const product = {
//     name: "product1",
//     price: 100,
//     quantity: 5,
// }

// const cart = [];


// if (User.isActive && User.role === "client" && !User.blocked)  {
//     if(product.quantity > 0 && product.price <= User.balance) {
//         console.log("zakup możliwy");
//         cart.push(product.name);
//     } else {
//         if (product.quantity === 0) {
//             console.log("produkt niedostępny");
//         } else {
//             console.log("niewystarczająca ilość środków");
//         }
//     }
// } else {
//     console.log("zakup niedostępny");
// }

// console.log("zawartość koszyka: " + cart);


// const liczby = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < liczby.length; i++) {
//     if (liczby[i] % 2 === 0) {
//         console.log(liczby[i]+"parzysta");
//         } else {
//             console.log(liczby[i]+"nieparzysta");
            
//     }
// };



// const dodaj = (a, b) => {
//     console.log(a+b);
// }


// dodaj(2,5);
// dodaj(6,1); 



// const liczby = [2,5,7,2];
// let suma = 0;
// let suma2 = 0;

// for (let i=0; i<liczby.length; i++) {suma += liczby[i];}

// let j = 0;
// while(j < liczby.length) {
//     suma2 += liczby[j];
//     j++;
// }
// console.log(suma);
// console.log(suma2);


// const fruits = ["apple", "berry", "orange"];
// fruits.forEach(function(fruit) {console.log(fruit);});


// const podzielna = (n) => {
//     if(n%3==0) {console.log("podzielna przez 3")}
//     else {console.log("nie podzielna przez 3")};
// }
// podzielna(4);
// podzielna(9);

// const convert = (st, unit) => {
//     if (unit === 'C') {
//         console.log(st + " stopni Celsjusza to: " + ((st * 9/5) + 32) + " Farenhajta");
//     } else if (unit === 'F') {
//         console.log(st + " stopni F to: " + ((st - 32) * 5/9) + " C");
//     } else {
//         console.log('błąd');
//     }
// }

// convert(22, 'F');
// convert(22, 'C'); 



// const User = {
//     name: 'Adam',
//     email: 'adam@gmail.com'
// }

// const User2 = {
//     name: 'Piotr',
//     email: 'piotrgmail.com'
// }

// const validateUser = (user) => {
//     if (user.name && user.name.length >= 2 && user.email && user.email.includes('@')) {
//         console.log(`${user.name} wszystko git`);
//     } else {
//         if (!user.name || user.name.length < 2) {
//             console.log(`${user.name} lipa - imię jest za krótkie`);
//         }
//         if (!user.email || !user.email.includes('@')) {
//             console.log(`${user.name} lipa - email jest niepoprawny`);
//         }
//     }
// }

// validateUser(User);
// validateUser(User2);




// const calculateTotalPrice = (cart) => {
//     let totalPrice = 0;
//     for (let i = 0; i < cart.length; i++) {totalPrice += cart[i].price;}
//     if (totalPrice >= 500) {
//         console.log(`Cena: ${totalPrice}`);
//         totalPrice = totalPrice*0.9;
//         console.log(`Cena po rabacie: ${totalPrice}`);
//     } else {
//         console.log(`Cena: ${totalPrice}`);
//     }
// }

// const cart = [
//     {name: 'telefon', price: 400},
//     {name: 'laptop', price: 20},
//     {name: 'słuchawki', price: 30},
// ]

// calculateTotalPrice(cart);

// const button = document.querySelector('input[type="submit"]');

// button.addEventListener("click", click = (e) => {
//     e.preventDefault();
//     alert("klik");
// })

const buttonDark = document.getElementById("dark");
buttonDark.addEventListener("click", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
})

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
})


const changeBtn = document.getElementById("changeBtn");
const div = document.getElementById("message");
changeBtn.addEventListener( "click", function(){
    div.textContent = "Hello";
    div.style.color = "red";
})


const inputLista = document.getElementById("itemInput");
const liLista = document.getElementById("itemList");
const buttonLista = document.getElementById("addBtn");

buttonLista.addEventListener("click", dodajListe = () =>{
    const item = inputLista.value;
    const li = document.createElement("li");
    li.textContent = item;
    liLista.appendChild(li);
    inputLista.value = "";
})


const buttonCount = document.getElementById("countOne");
const pe = document.getElementById("count");
const divLicznik = document.getElementById("divLicznik");
let licznik = 0;
buttonCount.addEventListener("click", () => {
    licznik++;
    pe.textContent = `kliknięto: ${licznik} razy`;

})
