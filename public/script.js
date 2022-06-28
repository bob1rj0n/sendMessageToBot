
document.querySelector('button').onclick = function () {
    let name = document.querySelector('.name').value;
    let number = document.querySelector('.number').value;
    let message = document.querySelector('.message').value;
    let output = `You have a new message:
    Name: ${name},
    Number: ${number},
    Message: ${message}
    `
    const token = 'your bot token';
    const chatId = 'your bot chatId to number';
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${output}`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
}
