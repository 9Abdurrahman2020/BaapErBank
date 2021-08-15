document.getElementById('submit-btn').addEventListener('click', function(){
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
const passField = document.getElementById('user-password');
const userPassword = passField.value;
if(userEmail == '9abdurrahman2020@gmail.com' && userPassword == 'rahmankhan1'){
    window.location.href='banking.html';
}
else{
    const p = document.getElementById('demo');
    p.innerText='incorrect password';
}
})