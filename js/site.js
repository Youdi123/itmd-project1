// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() { 
        var firetname = document.forms["Regform"]["first_name_field"]; 
        var lastname = document.forms["Regform"]["last-name-field"]; 
        var phone = document.forms["Regform"]["phone_field"]; 
        var email = document.forms["Regform"]["email-field"];
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
