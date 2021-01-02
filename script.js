const faqs = document.querySelectorAll('.faq');
const buttons = document.querySelectorAll('.btn');
const no = document.querySelectorAll('.fa-times');

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        button.parentNode.classList.toggle('active')
    })
})