// KeyCode Generator

// These criteria must be met:> A welcome message should be displayed (in any form)> The generator should wait for a key to be pressed> Once the key has been pressed, the generator should report the:   .code, .key & .charCode values> Appropriate styling should be applied



document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    const key = event.key;
    const code = event.code;

    console.log(event)

    document.querySelector('.keyCode').innerHTML = "KeyCode: " + keyCode;
    document.querySelector('.key').innerHTML = "Key:  " + key;
    document.querySelector('.charCode').innerHTML = "CharCode:  " + code;
})