document.addEventListener('DOMContentLoaded', function(event) {
  
  var base_url = 'http://ec2-52-55-10-130.compute-1.amazonaws.com/Arcadian'; 
  
  var username = 'none';
  var userid = 'none';

  $(document).on('click', '#btn-signin', function(
  ){
    var un = $('#un').val();
    var pw = $('#pw').val();
    // alert(un+" " +pw);
    $.ajax({
      url: base_url+'/login_on_plugin',
      data: {
          un: un,
          pw: pw
      },
      method: 'post',
      dataType: 'json',
      success: function(output){
        alert(output.content);
        if(output.username != 'none')
        {
          username = output.username;
          userid = output.userid;
          $("#signin").attr("hidden",true);
          $("#middle_container").attr("hidden",false);
        }
        
          // $("#event_home").replaceWith(output.event);

      },
      error: function (xhr, status, error) {
          alert("error"+xhr.responseText);
      }
  });
  }
  );


  $(document).on('click', '#upload', function(
    ){
      var title = $('#title').val();
      var url = $('#url').val();
      var tags = $('#tags').val();
      var img_url = $('#img_url').val();
      var description = $('#description').val();
      // alert("userid: " +userid);
      $.ajax({
        url: base_url+'/post_on_plugin',
        data: {
            title: title,
            url: url,
            tags: tags,
            img_url: img_url,
            description: userid,
            description_2: description,
            username: username
        },
        method: 'post',
        dataType: 'json',
        success: function(output){
          // alert(output.content);
          // alert(output.url);

          $("#middle_container").attr("hidden",true);
          $("#confirm").attr("hidden",false);

          $("#link").attr("href", output.url);
          
            // $("#event_home").replaceWith(output.event);
  
        },
        error: function (xhr, status, error) {
            alert("error: "+xhr.responseText);
        }
    });
    }
    );


    $(document).on('click', '#auto', function(){

      chrome.tabs.executeScript({
        code: '$( ".shot-header" ).find( ".shot-title" ).text()'
      }, function(results) {
        if (chrome.runtime.lastError) {
          // Couldn't execute the script at all
        } else if (typeof results[0] === "undefined") {
          // Couldn't find what we wanted
        } else {
          // Everything is fine
          $('#title').val(results[0]);
          // alert(results[0]);
          // document.getElementById('input_87').value = results[0];
        }
      });

      chrome.tabs.executeScript({
        code: '$( ".shot-media-container " ).find("source").attr("srcset")'
      }, function(results) {
        if (chrome.runtime.lastError) {
          // Couldn't execute the script at all
        } else if (typeof results[0] === "undefined") {
          // Couldn't find what we wanted
        } else {
          var str = results[0];
          // alert(str);

          var ret = str.split(" ");
          // alert(ret[0]);

          $('#img_url').val(ret[0]);
          $('#url').val(ret[0]);
          // alert(ret[0]);
        }
      });

      chrome.tabs.executeScript({
        code: '$( ".shot-desc" ).find("p").text()'
      }, function(results) {
        if (chrome.runtime.lastError) {
          // Couldn't execute the script at all
        } else if (typeof results[0] === "undefined") {
          // Couldn't find what we wanted
        } else {
          // Everything is fine
          $('#description').val(results[0]);
          // alert(results[0]);
          // document.getElementById('input_87').value = results[0];
        }
      });

      chrome.tabs.executeScript({
        code: '$( ".shot-tags" ).find("li").text()'
      }, function(results) {
        if (chrome.runtime.lastError) {
          // Couldn't execute the script at all
        } else if (typeof results[0] === "undefined") {
          // Couldn't find what we wanted
        } else {
          // Everything is fine
          $('#tags').val(results[0]);
          // alert(results[0]);
          // document.getElementById('input_87').value = results[0];
        }
      });



      }
      );


});

