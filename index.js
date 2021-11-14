const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	let fileUrl = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url
	);

	const ext = path.extname(fileUrl);

	if (!ext) {
		fileUrl += '.html';
	}

	fs.readFile(fileUrl, (err, data) => {
		if (err) {
			fs.readFile(
				path.join(__dirname, 'public', 'error.html'),
				(error, content) => {
					if (error) {
						res.writeHead(500);
						res.end('Error');
					} else {
						res.writeHead(200, {
							'Content-type': 'text/html',
						});
						res.end(content);
					}
				}
			);
		} else {
			res.writeHead(200, {
				'Content-type': 'text/html',
			});
			res.end(data);
		}
	});
});

server.listen(3000, () => {
	console.log('server start');
});
