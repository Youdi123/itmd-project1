// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() { 
        var firstname = document.forms["Regform"]["first_name_field"]; 
        var lastname = document.forms["Regform"]["last_name_field"]; 
        var phone = document.forms["Regform"]["phone_field"]; 
        var email = document.forms["Regform"]["email_field"];
        var date = document.forms["Regform"]["date_of_birth_field"]; 
  
        if (firstname.value == "") { 
            window.alert("Please enter your first name."); 
        } 
        if (lastname.value == "") { 
            window.alert("Please enter your last name."); 
        }
        if (phone.value == "") { 
            window.alert("Please enter your telephone number."); 

        } 
        if (email.value == "") { 
            window.alert("Please enter a valid e-mail address."); 
        }   
        if (date.value == "") { 
            window.alert("Please enter your date of birth");
        } 
}

setTimeout(myFunction, 1000);

function myFunction() {
  document.getElementById("reg").innerHTML = "Start your first registration！";
}
