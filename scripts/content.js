console.log('hello one')

// const article = document.querySelector("article");


// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   document.body.style.backgroundColor = 'red'
// })
// //,

console.log("Chrome extension is running!");

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// A message is received
function receiver(request, sender, sendResponse) {

  // Grab every single DOM element
  var elts = document.getElementsByTagName('*');

  // Change the background color and font-size
  // according to the message
  for (var i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = request.color;
    elts[i].style['font-size'] = request.size + '%';
  }

}

function turnRed(){
  const giant = document.createElement("div")
  giant.setAttribute('style', 'z-index: 1000; width: 100%; min-height: 100%; background-color: red; position: fixed; top: 0; left: 0; opacity: 0.5;')
  // giant.setAttribute('z-index', '1000')
  // giant.setAttribute('width', '100vw')
  // giant.setAttribute('height', '100vh')
  giant.setAttribute('id', 'hello-all')

  // giant.setAttribute('background-color', 'red')

  let body = document.querySelector('body')
  body.style.backgroundColor = "black"
  body.appendChild(giant)
}
// turnRed()




// function changeColor (){
//     console.log('hello')
//     chrome.tabs.executeScript( {
//         code: 'document.body.classList("background")'
//     })
// }

// // chrome.browserAction.onClicked.addListener(changeColor)

// const buttons =  document.querySelector('#sepia-button')

// console.log('button: ', buttons)

// buttons.addEventListener('click', function() {
//     console.log('hey it works')
//     changeColor ()
// })

 
