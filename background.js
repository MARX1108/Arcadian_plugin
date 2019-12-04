chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    output2 = request.output2;
    // alert("From background.js: output2:"+output2);
    if (output2 == 'toPointer')
    {
        getResults(1904, 1599);
    }
    else
    {
        getResults(1909, 1910);
    }
});


document.addEventListener('DOMContentLoaded', function(event) {


    var resultsButton = document.getElementById('switch');
    resultsButton.onclick = getResults;
  });
  
  function getResults(tabId, windowId) {

    // alert('switch window \n' + 'tabId: ' + tabId + '\n' + 'windowId: ' + windowId);
  
    chrome.tabs.update(tabId, {
      highlighted: true,
      active: true
    });
    chrome.windows.update(windowId, {
      focused: true
    });
  }
  