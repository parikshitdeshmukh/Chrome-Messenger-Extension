$(document).ready(function() {

  chrome.storage.sync.get('user' ,function(show){

      // console.log(show);
      hostUser = show.user.username
      if(show.user.username != null){
        if(show.user.password != null)
          window.location.href = 'chatWindow.html';
        else
          document.getElementById("myform").username.value = show.user.username


      }
  });
  $("#btn").click(function(e){
    e.preventDefault(); 
   var jsonData = {};
   
   var formData = $("#myform").serializeArray();
  // console.log(formData);
   
   $.each(formData, function() {
        if (jsonData[this.name]) {
           if (!jsonData[this.name].push) {
               jsonData[this.name] = [jsonData[this.name]];
           }
           jsonData[this.name].push(this.value || '');
       } else {
           jsonData[this.name] = this.value || '';
       }
         
     
   });
   // $('#result').text(JSON.stringify(formData));
   // console.log(jsonData);

   // var mqtt    = require('mqtt');
    //var pub  = mqtt.connect('tcp://0.0.0.0:61620',{encoding:'utf8', clientId: 'Publishers'});
    var client  = mqtt.connect('ws://10.103.226.26:3000',{encoding:'utf8', clientId: Math.random().toString(36).substr(2, 7)});
    // console.log(document.getElementById("myform").username.value)
    uniqueTopic = document.getElementById("myform").username.value + document.getElementById("myform").password.value
      // console.log(uniqueTopic)
    client.on('connect', function(){
    client.subscribe(uniqueTopic, {qos:0});
    console.log('subscribed')
       
    });
    client.on('message', function(topic, msg, Client){
        console.log('Received Message:'+msg)
        var msg = JSON.parse(msg);
        // var myJSON = JSON.stringify(msg);
        // alert(msg.status)
        if(msg.status==='Success'){
          chrome.storage.sync.set({'friends':msg.data}, function() {
            // Notify that we saved.
            console.log('Friend list saved');
          });
          var jsonS={
              username: document.getElementById("myform").username.value,
              password: document.getElementById("myform").password.value 
          };
          chrome.storage.sync.set({'user':jsonS}, function() {
            // Notify that we saved.
            console.log('User credentials saved');
          });
          $('#result').html("<h4 style='color:green'>Successfully logged in</h4>");
          window.location.href = 'chatWindow.html';
          
        }
        else if(msg.status==='Fail')
        {
          $('#result').html("<h4 style='color:red'>"+msg.info+"</h4>");
        }
        else if(msg.status==='Error')
        {
          $('#result').html("<h4 style='color:red'>"+msg.info+"</h4>");
        }
        
        
    });
    client.publish('connect', JSON.stringify(jsonData), {retain:false, qos: 0});
    
    
  });//btn press ends here
});//script ends here
