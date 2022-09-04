import * as utils from "./utils.js";
const passwordCriteria = utils.passwordStrengthMeter;
const form = document.querySelector('form');
const password = document.getElementById('password');
// if form exists then set the progress bar to default value

const fields = Object.freeze({
    containsUpperCase : 'contains_upper',
    containsLowerCase : 'contains_lower',
    containsNumber : 'contains_number',
    containsSpecialChars: 'contains_special_chars',
    is8Chars : 'min_length',

})

if (form){
    utils.getProgressBar(0);
    for (const [k, v] of Object.entries(fields)) decrease(v)
}

// check password
if (password) password.addEventListener('keyup', (e) => checkPassword(e.target.value))

function increase(selector){
    const content = document.getElementById(selector);

    if (content) {
        content.innerHTML = '';
        content.innerHTML = utils.increaseBar;
    }

}

function decrease(...selectors){
    if (selectors.length) {
        for(const selector of selectors){
            const content = document.getElementById(selector);
            if (content) {
                content.innerHTML = '';
                content.innerHTML = utils.decreaseBar;
                
            }

        }
        
    }
   

}

function checkPassword(password) {
    let strength = 0;

    if (passwordCriteria.containsUpperCase(password)) strength++
    if (passwordCriteria.containsLowerCase(password)) strength++;
    if (passwordCriteria.containsNumber(password)) strength++;
    if (passwordCriteria.containsSpecialChars(password)) strength++;
    if (passwordCriteria.is8Chars(password)) strength++;

    utils.getProgressBar(strength);

    passwordCriteria.containsUpperCase(password) ? increase(fields.containsUpperCase) : decrease(fields.containsUpperCase)
    passwordCriteria.containsLowerCase(password) ? increase(fields.containsLowerCase) : decrease(fields.containsLowerCase)
    passwordCriteria.containsNumber(password) ? increase(fields.containsNumber) : decrease(fields.containsNumber)
    passwordCriteria.containsSpecialChars(password) ? increase(fields.containsSpecialChars) : decrease(fields.containsSpecialChars)
    passwordCriteria.is8Chars(password) ? increase(fields.is8Chars) : decrease(fields.is8Chars)
    
    
}