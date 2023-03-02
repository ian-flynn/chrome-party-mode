
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggle_sephia") {
    console.log('action sepia works')
    const giant = document.createElement("div")
  giant.setAttribute('style', 'z-index: 1000; width: 100%; min-height: 100%; background-color: red; position: fixed; top: 0; left: 0; opacity: 0.5;')
  let body = document.querySelector('body')
  body.appendChild(giant)

  } else if (request.action === "dark_toggle") {
    console.log('action dark works')
    const anotherGiant = document.createElement("div")
    anotherGiant.setAttribute('style', 'z-index: 1000; width: 100%; min-height: 100%; background-color: yellow; position: fixed; top: 0; left: 0; opacity: 0.5;')
    let body = document.querySelector('body')
    body.appendChild(anotherGiant)

  } else if (request.action === "disco_toggle") {
    console.log('action disco works')
    const oneMoreGiant = document.createElement("div")
    oneMoreGiant.setAttribute('style', 'z-index: 1000; width: 100%; min-height: 100%; background-color: black; position: fixed; top: 0; left: 0; opacity: 0.5;animation: rave 1s infinite;')
    let body = document.querySelector('body')
    body.appendChild(oneMoreGiant)
    const keyframes = `
    @keyframes rave {
      0% {background-color: red;}
      10% {background-color: orange;}
      20% {background-color: yellow;}
      30% {background-color: green;}
      40% {background-color: blue;}
      50% {background-color: indigo;}
      60% {background-color: violet;}
      70% {background-color: black;}
      80% {background-color: white;}
      90% {background-color: pink;}
      100% {background-color: red;}
    }
  `;

  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(keyframes));
  document.head.appendChild(style);

  }
});

 
