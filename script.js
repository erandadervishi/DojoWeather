function showAlert() {
    alert("Loading weather report...");
}

function removeCookie() {
    document.querySelector(".cookie_box").remove();
}

function tempFromCtoF() {
    let selectedValue = document.getElementById('temp').value;
    let temps = document.querySelectorAll('.red, .blue');

    for (let i = 0; i < temps.length; i++) {
        let currentTemp = parseInt(temps[i].innerText);

        if (selectedValue === 'celsius') {
            temps[i].innerText = Math.round((currentTemp - 32) * 5/9) + '°';
        } else {
            temps[i].innerText = Math.round(currentTemp * 9/5 + 32) + '°';
        }
    }
}