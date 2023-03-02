const sepias = document.getElementsByClassName('sepia-change')
for(let i = 0; i < sepias.length; i++){
  sepias[i].addEventListener('click', function(e){
    const onOff = e.target.value;
    chrome.tabs.query({ currentWindow: true}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, { action: "sepia", onOff: onOff});
      });
    });
  })
}
const darks = document.getElementsByClassName('dark-change')
for(let i = 0; i < darks.length; i++){
  darks[i].addEventListener('click', function(e){
    const onOff = e.target.value;
    chrome.tabs.query({ currentWindow: true}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, { action: "dark", onOff: onOff});
      });
    });
  })
}
const raves = document.getElementsByClassName('rave-change')
for(let i = 0; i < sepias.length; i++){
  raves[i].addEventListener('click', function(e){
    const onOff = e.target.value;
    chrome.tabs.query({ currentWindow: true}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, { action: "rave", onOff: onOff});
      });
    });
  })
}