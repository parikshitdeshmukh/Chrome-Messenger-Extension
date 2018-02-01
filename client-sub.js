var mqtt = require('mqtt');
var settings = {
	encoding:'utf8',
    clientId: 'subscriber'
   // username: appData.mqttUser,
   // password: appData.mqttPassword,
    // clean: false
    //reconnectPeriod: 1000 * 1
}
var client = mqtt.connect('ws://10.103.226.26:3000',settings);
client.on('connect', function(){
    client.subscribe('rohit@gmail.comjayants',{qos:0});
   
});
client.on('message', function(topic, msg, client){
    console.log('Received Message:'+msg);
    
});