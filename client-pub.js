var mqtt    = require('mqtt');
//var pub  = mqtt.connect('tcp://0.0.0.0:61620',{encoding:'utf8', clientId: 'Publishers'});
var settings = {
	encoding:'utf8',
    clientId: 'jayantjnp@gmail.com'
   // username: appData.mqttUser,
   // password: appData.mqttPassword,
    //clean: false
    //reconnectPeriod: 1000 * 1
}
var pub  = mqtt.connect('ws://10.103.226.26:3000',settings);
 
//pub.on();
//pub.publish('esp/12-31-13-AA-FD-43', '12-31-13-AA-FD-433005', {retain:false, qos: 0});
// pub.publish('register', 'jayants123', {retain:true, qos: 0});
var jsonS={
    status:"Success",
    sender : 'Moon',
    info: "Message",
    data:"Houston, the Eagle has landed!"
};
// var jsonS={
// 	"username":'parik@gmail.com',//host
// 	"email":'rohit@gmail.com',//for friend
// };
pub.publish("h46vnhy", JSON.stringify(jsonS), {qos: 0});
pub.end();
