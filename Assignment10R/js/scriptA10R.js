$(function(){
let username = document.getElementById('username');
let submit = document.getElementById('submit');
let password = document.getElementById('password');
let confpassword = document.getElementById('conf-password');
let tos = document.getElementById('tos');
let countrySelect = document.getElementById('countrySelect');
let options = document.getElementById('options');

submit.disabled = true;

username.addEventListener('input', function(e){
  //  let target = e.target;
    usernameSubmitDisabled = false;
    checkAllThings();
});

password.addEventListener('input', function(e){
    let target = e.target;
    passwordSubmitDisabled = !(target.value.length >= 2);
    checkAllThings();
});

confpassword.addEventListener('input', function(e){
    let target = e.target;
    confPasswordSubmitDisabled = confpassword.value != password.value;
    checkAllThings();
});

   $.get('countries.js', function(data){
       for (let i=0; i<countries.length; i++){
         options+=`<option value= "${countries[i].code}">${countries[i].name}</option>`;
       }
       $('#countrySelect').append(options);
   })

        countrySelect.addEventListener('change', function(e){
            if (countrySelect.value == 'default'){
                countrySelectSubmitDisabled = true;
            } else {
                countrySelectSubmitDisabled = false;
            }
            console.log("country selected: "+countrySelect.value);

            checkAllThings();
        })

    tos.addEventListener('change', function(e){
        let target = e.target;
        if (!tos.checked){
            tosSubmitDisabled = true;
        } else{
            tosSubmitDisabled = false;
        }
        checkAllThings();
    });

    let usernameSubmitDisabled;
    let passwordSubmitDisabled;
    let confPasswordSubmitDisabled;
    let tosSubmitDisabled;
    let countrySelectSubmitDisabled;

    function checkAllThings(){
        if(!usernameSubmitDisabled && !passwordSubmitDisabled
        && !confPasswordSubmitDisabled && !countrySelectSubmitDisabled && !tosSubmitDisabled){
            submit.disabled = false;
        }
    }
});

let form = document.getElementById('login');
addEvent(form, 'submit', function(e){
    e.preventDefault();
    //     let elements = this.elements;
    //     let username = elements.username.value;
    let msg = `<p>Welcome ${username.value}!. The country code your selected is '${countrySelect.value}'.<br>
                Click her to view some beautiful Autumn pictures  <a href="autumPics.html">Autumn Pictures</a>`;
    $('#message').append(msg);
});












/*
const username = document.getElementById('username');
const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const form = document.getElementById('login');
//const message = document.getElementsByClassName('required');
const errorUsername = document.getElementById('errorUsername');
const passMatch = document.getElementById('passMatch');
*/
/*
form.addEventListener('submit', (e) => {
    let errorName = [];
    if (username.value.length <= 3){
        errorName.push("Name is required to be more than 3 characters");
    }

    let errorPass = [];
    if (password.value.length <= 8){
        errorPass.push("Password is required to be more than 8 characters");
    }

    if (errorName.length >= 0){
        e.preventDefault();
        errorUsername.textContent = errorName;
        errorPassword.textContent = errorPass;
    }
    if (errorPass.length >= 0){
        e.preventDefault();
        errorPassword.textContent = errorPass;
    }

    let matchPass = [];
    if (password.value !== confPassword.value){
        console.log(password.value);
        matchPass.push("Passwords dont match, please try again");
    }
    if (matchPass.length >= 0){
        e.preventDefault();
        passMatch.textContent = matchPass;
    }
})
*/
/*
(function(){
    //   document.forms.register.noValidate = true;
       var form = document.getElementById('login');
       addEvent(form, 'submit', function(e){
           e.preventDefault();
           var elements = this.elements;
           var username = elements.username.value;
           var msg = 'Welcome ' + username;
           document.getElementById('main').textContent = msg;
       })
 }());
 */
