function store(){

    var fname = document.getElementById('fn');
    var lname = document.getElementById('ln');
    var phoneno= document.getElementById('pn');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var dotype = document.getElementById('dotype');
    var message = document.getElementById('note');
    var typeOfCard;
    if(document.getElementById('visa').checked===true)
    {
        typeOfCard =document.getElementById('visa').value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }
    if(document.getElementById('mastercard').checked===true)
    {
        typeOfCard =document.getElementById('mastercard').value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
    if(document.getElementById('paypal').checked===true)
    {
        typeOfCard =document.getElementById('paypal').value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }

    var money;
        if(document.getElementById('optradio1').checked===true)
        {
            money = document.getElementById('optradio1').value;
        }
        if(document.getElementById('optradio2').checked===true)
        {
            money = document.getElementById('optradio2').value;
        }
        if(document.getElementById('optradio3').checked===true)
        {
            money = document.getElementById('optradio3').value;
        }
        if(document.getElementById('optradio4').checked===true)
        {
            money = document.getElementById('optradio4').value;
        }
        if(document.getElementById('optradio5').checked===true)
        {
            money = document.getElementById('optradio5').value;
        }
    var amount = document.getElementById('amount');
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
    localStorage.setItem('doopt', money);
    localStorage.setItem('typeOfCard', typeOfCard);
    localStorage.setItem('amount', amount.value);
    localStorage.setItem('message', message.value);
    localStorage.setItem('card', card.value);
    localStorage.setItem('datepicker', exdate.value);
    localStorage.setItem('cvc', cvc.value);    
}




