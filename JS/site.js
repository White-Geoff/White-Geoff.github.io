//Email Form
let email = document.getElementById('emailForm');
let mailTo = 'mailto:geoffwhite@keetonet.ca?'
let subject = '&subject=Hello';
let body = '&body= Greetings';

let SendEmail = () => {
    email.setAttribute('action', mailTo + subject + body);
} //SendEmail