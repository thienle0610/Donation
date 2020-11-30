function store(){

    var fname = document.getElementById('fn');
    var lname = document.getElementById('ln');
    var phoneno= document.getElementById('pn');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var dotype = document.getElementById('dotype');
    var doopt = document.getElementById('doopt');
    var card = document.getElementById('card');
    var exdate = document.getElementById('datepicker');
    var cvc = document.getElementById('cvc');

    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('phoneno', phoneno.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('state', state.value);
    localStorage.setItem('dotype', dotype.value);
    localStorage.setItem('doopt', doopt.value);
    localStorage.setItem('card', card.value);
    localStorage.setItem('datepicker', exdate.value);
    localStorage.setItem('cvc', cvc.value);    
}


