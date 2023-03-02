// // chrome.browserAction.onClicked.addListener(changeColor)


// function changeColor (){
//     console.log('hello')
//     chrome.tabs.executeScript( {
//         code: 'document.body.classList("background")'
//     })
// }

document.getElementById("sepia-toggle").addEventListener("click", function() {
  chrome.tabs.query({ currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      chrome.tabs.sendMessage(tab.id, { action: "toggle_sephia"});
  });
});
})


