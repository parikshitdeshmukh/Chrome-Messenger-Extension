$(document).ready(function() {

  var client  = mqtt.connect('ws://10.103.226.26:3000',{encoding:'utf8', clientId: Math.random().toString(36).substr(2, 7)});
  var jsonData = {};
  var activeUser = ""
  var activeTopic = ""
  var hostUser = ""
  var chatHistory = {}//storing chat of all the users//group by topic name
  chrome.storage.sync.get('friends' ,function(show){

        console.log(show.friends.topic);
        activeTopic = show.friends.topic
        console.log(activeTopic);
        activeUser = show.friends.email 
  });
  chrome.storage.sync.get('user' ,function(show){

        console.log(show);
        hostUser = show.user.username
    });
  $("#chats").append("<button id='btn' name='btn' class='btn' value = "+activeTopic+">Chat</>");
  // chrome.storage.sync.get('user' ,function(show){

  //       console.log(show);
  // });
  // var formData = $("#myform").serializeArray();
  // console.log(formData);
  // chrome.storage.sync.get('activeChat' ,function(activeChat){

  //     activeTopic = activeChat.topic
  //     activeUser = activeChat.user
  //     console.log('active chat is '+ activeChat)
  // });
  // chrome.storage.sync.get('activeChat' ,function(activeChat){

  //     activeTopic = activeChat.topic
  //     activeUser = activeChat.user
  //     console.log('active chat is '+ activeChat)
  // });

  // // $('#result').text(JSON.stringify(formData));
  // // console.log(jsonData);


  // // console.log(document.getElementById("myform").username.value)
  // // uniqueTopic = document.getElementById("myform").username.value + document.getElementById("myform").password.value
  //   // console.log(uniqueTopic)
  // client.on('connect', function(){
  //   client.subscribe(activeTopic, {qos:0});
  //   console.log('subscribed')
     
  // });
  // client.on('message', function(topic, msg, Client){
  //     console.log('Received Message:'+msg)
  //     var msg = JSON.parse(msg);
  //     // var myJSON = JSON.stringify(msg);
  //     // alert(msg.status)
  //     if(msg.status==='Success'){
  //       // chrome.storage.sync.set({'friends':msg.data}, function() {
  //       //   // Notify that we saved.
  //       //   console.log('Friend list saved');
  //       // });
  //       var text = "><b>"+msg.sender+": </b>"+msg.data+"</br>"
  //       $('#List').append(text);

  //       // var jsonS={
  //       //     username: document.getElementById("myform").username.value,
  //       //     password: document.getElementById("myform").password.value 
  //       // };
  //       // chrome.storage.sync.set({'user':jsonS}, function() {
  //       //   // Notify that we saved.
  //       //   console.log('User credentials saved');
  //       // });
  //       // $('#result').html("<h4 style='color:green'>Message sent</h4>");
  //     }
  //     // else if(msg.status==='Fail')
  //     // {
  //     //   $('#result').html("<h4 style='color:red'>"+msg.info+"</h4>");
  //     // }
  //     // else if(msg.status==='Error')
  //     // {
  //     //   $('#result').html("<h4 style='color:red'>"+msg.info+"</h4>");
  //     // }
      
      
  // });
  $("#btn").click(function(e){
    e.preventDefault(); 
    alert(3)
    // if($("#sendData").val() == null || $("#sendData").val() == '')
    //   ;
    // else
    // {    
    //   console.log($("#sendData").val())
    //   // var text = "><b>You: </b>"+$("#sendData").val()+"</br>"
    //   // $('#chatData').append(text);
    //   // $("#chatData").val('')
    //   chatLine =  $("#sendData").val()
    //   $("#sendData").val('')
    //   var jsonS={
    //       'status' : "Success",
    //       'sender' : hostUser,
    //       'data' : chatLine,
    //       'info' : "Message"
    //   }
    //   client.publish(activeTopic, JSON.stringify(jsonS), {retain:false, qos: 0});
    // }
   
    // 
    
    
  });//btn press ends here
  $("#logout").click(function(e){
    alert(333)
      e.preventDefault(); 
      var jsonS={
          username: hostUser,
          password: null
      };
      chrome.storage.sync.set({'user':jsonS}, function() {
        // Notify that we saved.
        console.log('User credentials saved');
      });
      
      window.location.href = 'signin.html';
        
    });
    
  // });//btn press ends here
  // function logout(){
  //   alert(2)
  // }
  
//
});//script ends here
//load local storage variables
