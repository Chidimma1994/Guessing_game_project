const mainGame = document.getElementById("guessing_game_div");
const guessResult = document.getElementById("result");
const guessButton = document.getElementById("guessing_game_btn");
const guessNumbers = document.getElementById("guess");
const minNumber = Math.ceil(1);
const maxNumber = Math.floor(100);
const randomNumber = Math.floor(
   Math.random() * (maxNumber - minNumber) + minNumber
);


let userAttempts;

guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log('click');

    // let guessNumbersValue = guessNumbers.value;
    // if (guessNumbersValue === randomNumber) {
    //     guessResult.innerText = `Your guess is correct. The number was ${randomNumber}`;
    // } else if (guessNumbersValue > randomNumber){
    //     guessResult.innerText = `Your guess is high. The number was ${randomNumber}`;
    // } else if (guessNumbersValue < randomNumber) {
    //     guessResult.innerText = `Your guess is low. The number was ${randomNumber}`;
    // }
    let guessNumbersValue = guessNumbers.value;
    if (guessNumbersValue === randomNumber) {
        setSuccess(guessResult, `Your guess is correct. The number was ${randomNumber}`); 
    } else if (guessNumbersValue > randomNumber){
        setError(guessResult, `Your guess is high. The number was ${randomNumber}`); 
        
    } else if (guessNumbersValue < randomNumber) {
        setError(guessResult, `Your guess is low. The number was ${randomNumber}`); 
    }
       console.log('guessNumbersValue');

    // if(passwordVal === '') {
    //     setError(password, 'Password cannot be empty');
    //     iconErrorThree.style.visibility = "visible";
    //     eyeIcon.style.visibility = "hidden";
    // } else if (passwordVal.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.');
    //     iconErrorThree.style.visibility = "visible";
    //     eyeIcon.style.visibility = "hidden";
    // } else {
    //     setSuccess(password);
    //     iconErrorThree.style.visibility = "hidden";
    //     eyeIcon.style.visibility = "visible";
    // }

    // console.log(emailVal)
         
});




const setError = (element, message) => {
    const guessingGameDiv = element.parentElement;
    const errorDisplay = guessingGameDiv.querySelector('.error');

    errorDisplay.innerText = message;
    guessingGameDiv.classList.add('error');
    guessingGameDiv.classList.remove('success')
};

const setSuccess = element => {
    const guessingGameDiv = element.parentElement;
    const errorDisplay = guessingGameDiv.querySelector('.error');

    errorDisplay.innerText = '';
    guessingGameDiv.classList.add('success');
    guessingGameDiv.classList.remove('error');
};



