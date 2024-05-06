const isHide = () => {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (password.length === 0) {
        result.innerText = "Parol kiritilmagan!";
        result.className = "red";
    } else if (password.length < 4) {
        result.innerText = "Ishonchsiz parol! Parol 4 ta belgidan kam bo'lishi mumkin emas.";
        result.className = "red";
    } else if (password.length <= 8) {
        result.innerText = "Ishonchliligingizni tekshiring!";
        result.className = "orange";
    } else {
        result.innerText = "Mukammal parol!";
        result.className = "green";
    }
}


