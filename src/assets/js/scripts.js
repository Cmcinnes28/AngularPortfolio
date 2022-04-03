function sendMail() {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "b4563749540568",
        Password : "5a71a44b92b096",
        To : 'cameronmcinnes28@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('name').value,
        Body : document.getElementById('detail').value
    }).then(
      message => alert(message)
    );
    }