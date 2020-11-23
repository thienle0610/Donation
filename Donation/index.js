function store(){

    var fname = document.getElementById('fn');
    var lname = document.getElementById('ln');
    var phoneno= document.getElementById('pn');
    var email = document.getElementById('email');

    if(fname.value.length == 0){
        alert('Please fill in first name');

    }else if(lname.value.length == 0){
        alert('Please fill in last name');

    }else if(phoneno.value.length == 0){
        alert('Please fill in phone number');

    }else if(email.value.length == 0){
        alert('Please fill in email');

    }else if(fname.value.length == 0 && lname.value.length == 0 && phoneno.value.length == 0 && email.value.length == 0){
        alert('Please fill in first name, last name, phone number and email');

    }else{
        localStorage.setItem('fname', fname.value);
        localStorage.setItem('lname', lname.value);
        localStorage.setItem('phoneno', phoneno.value);
        localStorage.setItem('email', email.value);
        alert('Your donation is successful! Thank you!');
        window.open("home.html");
    }
}




