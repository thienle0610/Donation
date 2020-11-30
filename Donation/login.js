var userName = document.getElementById('userName')
var passWord = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

if(form)
{
form.addEventListener('submit', (e) => {
    let message = []
    
    if(userName.value === '' || userName.value===null)
    {
        message.push('Usernam is required')
    }

    if(passWord.value.length <=6)
    {
        message.push('Password must be longer than 6 characters')
    }

    if(passWord.value.length >=20)
    {
        message.push('Password must be less than 20 characters')
    }

    if(message.length>0)
    {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
    
})
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('password', passWord.value);
}