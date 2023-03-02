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

// function turnRed(){
//   const giant = document.createElement("div")
//   giant.setAttribute('style', 'z-index: 1000; width: 100%; min-height: 100%; background-color: red; position: fixed; top: 0; left: 0; opacity: 0.5;')
//   // giant.setAttribute('z-index', '1000')
//   // giant.setAttribute('width', '100vw')
//   // giant.setAttribute('height', '100vh')
//   giant.setAttribute('id', 'hello-all')

//   // giant.setAttribute('background-color', 'red')

//   let body = document.querySelector('body')
//   body.style.backgroundColor = "black"
//   body.appendChild(giant)
// }
// turnRed()


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggle_sephia") {
    // Turn the page into sepia theme
    // document.body.style.backgroundColor = "#f4ecd8";
    // document.body.style.color = "#7b5741";
    // You can apply other CSS styles to turn the page into sepia theme
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
});

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

 
