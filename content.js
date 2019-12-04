document.addEventListener('DOMContentLoaded', function (event) {

  console.log("auto post");
  $(document).on("DOMSubtreeModified","body", function(){
    var element =   $( ".shot-overlay" ).find( ".justify-between" );
    if (typeof element === "undefined") {
      console.log("didn't find");
    }
    else
    {
      $( "#shot-overlay" ).find( ".justify-between" ).append( "<div id = 'wqq'>test</div>");
      console.log(element);
    }
    
    
    // alert(element);
  });
  
    $(document).on("keypress", function (e) {
      if (e.which == 13) {
        // alert("enter pressed");
        controller();
      }
      

      $(document).on("click","#confidenceBtn", function(){
        console.log("From content.js confidenceBtnconfidenceBtnconfidenceBtn");
        number = parseInt($('input[name=confidence]:checked').val());
        if (!isNaN(number)) {
          sendResults('toPointer');
        }
      });

      if(e.which ==  49)
       {
            sendResults('toPointer');
       } 
});


  


  function controller() {

    var step = parseInt($('#step').text());
    var trial = parseInt($('#trial').text());
    var observer_step = parseInt($('#observer_step').text());
    var pointer_step = parseInt($('#pointer_step').text());

      if (step == 1) {
        sendResults('toObserver');
      }
      if(pointer_step == 1)
      {
//         alert("p");
        sendResults('toPointer');
      }
  }

    function confidenceBt()
    {
      console.log("#confidenceBt called");
      number = parseInt($('input[name=confidence]:checked').val());
        if (!isNaN(number)) {
          sendResults('toPointer');
        }
    }

});




function sendResults(message) {
  chrome.runtime.sendMessage({
    output2: message
  });
}

