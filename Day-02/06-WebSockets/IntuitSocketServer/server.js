var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(con){
	console.log("A new connection is established");
	con.on("text", function(msg){
		var totalConnections = server.connections;
		for(var i=0;i<totalConnections.length;i++)
			totalConnections[i].sendText(msg);
	});
});
server.listen(9090);
console.log("Web Socket server listening on port 9090");