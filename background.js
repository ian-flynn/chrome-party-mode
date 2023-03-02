// // chrome.browserAction.onClicked.addListener(changeColor)


// function changeColor (){
//     console.log('hello')
//     chrome.tabs.executeScript( {
//         code: 'document.body.classList("background")'
//     })
// }

document.getElementById("sepia-toggle").addEventListener("click", function() {
  const onOff = document.getElementById("sepia-toggle").value;
  if(onOff === 'on') document.getElementById("sepia-toggle").setAttribute('value', 'off');
  if(onOff === 'off') document.getElementById("sepia-toggle").setAttribute('value', 'on');

  chrome.tabs.query({ currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      chrome.tabs.sendMessage(tab.id, { action: "toggle_sephia", onOff: onOff});
  });
});
})

document.getElementById("dark-toggle").addEventListener("click", function() {
  const onOff = document.getElementById("dark-toggle").value;
  if(onOff === 'on') document.getElementById("dark-toggle").setAttribute('value', 'off');
  if(onOff === 'off') document.getElementById("dark-toggle").setAttribute('value', 'on');

  console.log('dark toggle works')
  chrome.tabs.query({ currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      chrome.tabs.sendMessage(tab.id, { action: "dark_toggle", onOff: onOff});
  });
});
})

document.getElementById("disco-toggle").addEventListener("click", function() {
  const onOff = document.getElementById("disco-toggle").value;
  if(onOff === 'on') document.getElementById("disco-toggle").setAttribute('value', 'off');
  if(onOff === 'off') document.getElementById("disco-toggle").setAttribute('value', 'on');
  
  chrome.tabs.query({ currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      chrome.tabs.sendMessage(tab.id, { action: "disco_toggle", onOff: onOff});
  });
});
})

