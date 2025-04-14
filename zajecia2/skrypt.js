// Asynchroniczność i API
// const capitalElements = document.getElementsByClassName("capital");
// if (capitalElements.length > 0) {
//   const p = capitalElements[0];
//   fetch("https://restcountries.com/v3.1/alpha/us")
//     .then(response => response.json())
//     .then(data => {
//       if (data && data[0] && data[0].capital && data[0].capital.length > 0) {
//         p.textContent = `Stolica: ${data[0].capital[0]}`;
//       } else {
//         p.textContent = "Stolica: Brak danych";
//       }
//     })
//     .catch(error => {
//       console.error("Błąd pobierania danych:", error);
//       if (capitalElements.length > 0) {
//         capitalElements[0].textContent = "Stolica: Błąd pobierania danych";
//       }
//     });
// }

// const userList = document.getElementById("users-container");
// const loadingMessage = document.createElement("p");
// loadingMessage.textContent = "Pobieranie danych...";
// userList.appendChild(loadingMessage);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     userList.removeChild(loadingMessage);

//     data.forEach(user => {
//       const card = document.createElement("div");
//       card.className = "user-card";
//       card.textContent = user.name;

//       card.onclick = () => {
//         //alert(`Email: ${user.email}\nMiasto: ${user.address.city}`);
//         // const li = document.createElement("li");
//         // li.textContent = `${user.email}`;

//       };

//       userList.appendChild(card);
//     });
//   })
//   .catch(error => {
//     console.error("Błąd pobierania danych:", error);

//     userList.removeChild(loadingMessage);

//     const errorMessage = document.createElement("p");
//     if (error.message.includes("404")) {
//       errorMessage.textContent = "Błąd 404: Error nie ma";
//     } else if (error.message.includes("500")) {
//       errorMessage.textContent = "Błąd 500: Błąd serwera";
//     } else {
//       errorMessage.textContent = "Błąd: Nieznany błąd";
//     }
//     userList.appendChild(errorMessage);
//   });

// wersja 2

// const loading = document.getElementById("loading");
// const userContainer = document.getElementById("users-container");
// const errorMessage = document.createElement("error-message");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((users) => {console.log(users)

//   loading.style.display="none";

//   users.forEach((user) => {
//   const userCard = document.createElement("div");
//   userCard.classList = "user-card";
//   userCard.textContent = user.name;
//   userContainer.appendChild(userCard);
// })
// })
// .catch(error => {
//   console.error("Błąd pobierania danych:", error);

//   userList.removeChild(loadingMessage);

//   if (error.message.includes("404")) {
//     errorMessage.textContent = "Błąd 404: Error nie ma";
//   } else if (error.message.includes("500")) {
//      errorMessage.textContent = "Błąd 500: Błąd serwera";
//   } else {
//     errorMessage.textContent = "Błąd: Nieznany błąd";
//    }
//   userList.appendChild(errorMessage);
//  });


// const posty = document.querySelector(".posts-container");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     console.log(posts);
//     posts.forEach((post) => {
//       const postCard = document.createElement("div");
//       postCard.classList.add("post-card");
//       postCard.textContent = post.title;
//       posty.appendChild(postCard);
//     });
//   })
//   .catch((error) => {
//     console.error("Błąd pobierania postów:", error);
//   });


// Wersja 3
// axios
// .get("https://jsonplaceholder.typicode.com/posts")
// .then( (response) => {
//   console.log(response.data.length);
//   response.data.forEach((post) => {
//     console.log(post.title);}
//   );
// })


//Zadanie 2
// axios
// .get("https://jsonplaceholder.typicode.com/posts?userId=1")
// .then( (response) => {
//   console.log(response.data.length);
//   response.data.forEach((post) => {
//     console.log(post.title);}
//   );
// })

// fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
// .then((response) => response.json())
// .then((posts) => {
//   console.log(posts.length);
//   posts.forEach((post) => {
//     console.log(post.title);
//   });
// })


//zadanie 3

const title = document.getElementById("title");
const body = document.getElementById("body");
const btnSubmit = document.getElementById("btnSubmit");
const message = document.getElementById("message");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: title.value,
      body: body.value,
      userId: 1,
    })
    .then((response) => {
      console.log("Post dodany", response.data);
      message.textContent = "Post dodany";

    })
    .catch((error) => {
      console.error("Błąd:", error);
    });
});
