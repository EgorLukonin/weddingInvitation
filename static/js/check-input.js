const necessarilyInput = document.querySelector('.necessarily-input')
const input = document.querySelector('#necessarily')
const submitButton = document.querySelector('button')
const form  = document.querySelector('form')



form.addEventListener('submit', function(event){
    event.preventDefault();
    let valueInput = input.value
    if ((valueInput.trim()).length == 0){
        necessarilyInput.classList.add('active')
        input.classList.add('active')
        return;
    }
    this.submit();
})