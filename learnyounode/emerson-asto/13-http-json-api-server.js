const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://localhost:${port}`);
  if (myUrl.pathname === '/api/parsetime') {

    const time = myUrl.searchParams.get('iso');
    const date = new Date(time);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ hour, minute, second }));

  } else if (myUrl.pathname === '/api/unixtime') {
    const time = myUrl.searchParams.get('iso');
    const date = new Date(time);
    const unixtime = date.getTime();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ unixtime }));

  } else {
    res.writeHead(404);
    res.end();
  }

});

server.listen(port);

