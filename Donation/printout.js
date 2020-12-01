if (typeof(Storage) !== "undefined") {
    document.getElementById('result').innerHTML =" First Name: "+localStorage.getItem('fname')+
    "<br>"+" Last Name: "+localStorage.getItem('lname')+"<br> Phone Number: "+localStorage.getItem('phoneno')+
    "<br> Email: "+localStorage.getItem('email')+"<br> Address: "+localStorage.getItem('address')+
    "<br>Country (1:Canada, 2:USA): "+localStorage.getItem('city')+ "<br> State: "+localStorage.getItem('state')+
    "<br> Message: "+localStorage.getItem('message')+
    "<br> Donate Type (1:One-time, 2:Monthly): "+localStorage.getItem('dotype')+"<br> Donate Option: "+localStorage.getItem('doopt')+"<br> Other Amount: $"+localStorage.getItem('amount')+
    "<br> Type of Card: "+localStorage.getItem('typeOfCard')+
    "<br> Card Number: "+localStorage.getItem('card')+
    "<br> Expire Date: "+localStorage.getItem('datepicker')+"<br> CVC Number: "+localStorage.getItem('cvc');
    } else {
    document.getElementById('result').innerHTML = "Sorry, your browser does not support Web Storage...";
}