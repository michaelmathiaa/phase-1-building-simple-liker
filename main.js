// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');

modal.classList.add('hidden');

const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach((likeGlyph) => {
  likeGlyph.addEventListener('click', () => {
    if(likeGlyph.textContent === EMPTY_HEART){
      mimicServerCall()
      .then(() => {
        likeGlyph.textContent = FULL_HEART;
        likeGlyph.classList.add('activated-heart');
      })
      .catch(() => {
        modal.classList.remove('hidden');

        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000)
      })
    } else {
      likeGlyph.classList.remove('activated-heart');
      likeGlyph.textContent = EMPTY_HEART;
    }
  })
})


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
