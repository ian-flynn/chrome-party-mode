const keyframes = `@keyframes rave {
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
}`;
const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(keyframes));
document.head.appendChild(style);

function makeMask(onOff, action){
  if(onOff === 'on'){
    const color =  action === "sepia" ? '#7F462C' : 'black';
    const mask = document.createElement("div")
    mask.setAttribute('id', `${action}-mask`)
    mask.style['z-index'] = '1000';
    mask.style.width = '100%';
    mask.style['min-height'] = '100%'; 
    mask.style['background-color'] = `${color}`;
    mask.style.position = 'fixed'; 
    mask.style.top = '0'; 
    mask.style.left = '0'; 
    mask.style.opacity = '0.2';
    mask.style['pointer-events'] = 'none';
    if(action === "rave"){
      mask.style.animation = 'rave 1s infinite';
    }
    document.querySelector('body').appendChild(mask)
  } else if(onOff === 'off') {
    document.querySelector(`#${action}-mask`).remove()
  }
}


chrome.runtime.onMessage.addListener(function(request) {
  if (request.action === "sepia") {
    makeMask(request.onOff, request.action)
  } else if (request.action === "dark") {
    makeMask(request.onOff, request.action)
  } else if (request.action === "rave") {
    makeMask(request.onOff, request.action)
  }
});

 
