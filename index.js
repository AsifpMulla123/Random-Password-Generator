// active
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const copybtn = document.getElementById('copybtn');
const alertContainerEl = document.querySelector('.alert-container');

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-*/:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 15;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
    }
    input.value = password;
}
function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
    alertContainerEl.innerText = "password Copied!"
}
copybtn.addEventListener('click', () => {
    if (input.value) {
        copyPassword();
        alertContainerEl.classList.remove('active');
        setTimeout(() => {
            alertContainerEl.classList.add('active');
        }, 2000)
    }
})
btn.addEventListener('click', () => {
    createPassword();
});