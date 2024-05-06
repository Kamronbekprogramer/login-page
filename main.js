const form = document.getElementById("form");
const inputName = document.querySelector(".name-input");
const inputEmail = document.querySelector(".email-input");
const inputLink = document.querySelector(".link-input");
const inputMessage = document.querySelector(".message-input");
const cards = document.querySelector(".cards-group");
const DATA = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputName.value && inputEmail.value && inputLink.value && inputMessage.value) { 
        let newUser = {
            name: inputName.value,
            email: inputEmail.value,
            link: inputLink.value,
            message: inputMessage.value
        };
        DATA.push(newUser);
        createTable(DATA);

        e.target.reset();
        // inputName.value = "";
        // inputEmail.value = "";
        // inputLink.value = "";
        // inputMessage.value = "";
    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!"); 
    }
});

function createTable(data) {
    cards.innerHTML = "";

    data.forEach((user, index) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", "images/photo_2024-03-16_03-07-28.jpg");
        div.classList.add("card");
        div.appendChild(img);
        div.innerHTML += `
            <h2>${user.name}</h2>
            <h4>${user.email}</h4>
            <h4>${user.message}</h4>
            <h6>${user.link}</h6>
            <button class="btn-danger" onclick="deleteUser(${index})">Delete</button>
        `;
        cards.appendChild(div);
    });
}

function deleteUser(index) {
    DATA.splice(index, 1);
    createTable(DATA);
}

createTable(DATA);

