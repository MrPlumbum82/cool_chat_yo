const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {

	console.log("A user has connected!" + ws);

	ws.on('message', function incoming(data) {

		console.log("-------->>>>>>>> A user is sending a message;" + data);

		wss.clients.forEach(function each(client) {

			if (client !== ws && client.readyState === WebSocket.OPEN) {

				client.send(data);
			}
		});
	});
});
