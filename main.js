// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartChange = {
  '♡': '♥',
  '♥': '♡'
}

const colorChange = {
  "red": "",
  "": "red"
}

document.addEventListener("DOMContentLoaded", () => {
  const error = document.querySelector("#modal");
  error.className = "hidden";
})

const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(heart => {
  heart.addEventListener("click", changeHeart);
})

function changeHeart(e) {
  const heart = e.target;
  mimicServerCall()
  .then(function (serverMessage) {
    heart.innerText = heartChange[heart.innerText];
    heart.className = ".activated-heart";
    heart.style.color = colorChange[heart.style.color];
  })
  .catch(function(errMessage) {
    const modal = document.querySelector("#modal");
    modal.className = " ";
    modal.textContent = errMessage;
    setTimeout(() => modal.className = "hidden", 5000);
  })

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
