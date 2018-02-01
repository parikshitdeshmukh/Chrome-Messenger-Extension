  $(document).ready(function() {
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
   console.log(jsonData);

   // var mqtt    = require('mqtt');
    //var pub  = mqtt.connect('tcp://0.0.0.0:61620',{encoding:'utf8', clientId: 'Publishers'});
    var pub  = mqtt.connect('ws://10.103.226.26:3000',{encoding:'utf8', clientId: document.getElementById("myform").username.value});
    console.log(document.getElementById("myform").username.value)

    pub.publish('register', JSON.stringify(jsonData), {retain:false, qos: 0});
    pub.end();
    
});
});