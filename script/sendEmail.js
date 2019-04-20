
function sendEmail() {
    let mymail = 'm.mortara01@gmail.com';
    let senderEmail = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    var mailto_link = 'mailto:' + mymail + '?subject=' + 'Hi - '+ senderEmail + '&body=' + message;

    win = window.open(mailto_link, 'emailWindow');
    
}