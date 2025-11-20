const os = require('os');
const path = require('path');
const http = require('http');

http.createServer((req,res) => {
    const osinfo = `
        <h1>OS Info</h1>
        <p>Platform: ${os.platform()}</p>
        <p>arch: ${os.arch()}</p>
        <p>CPU: ${JSON.stringify(os.cpus()[0])}</p>
        <p>total mem: ${os.totalmem()}</p>
        <p>free mem: ${os.freemem()}</p>`;
    const p = path.parse(path.join(__dirname, 'files','example.txt'));
    res.writeHead(200, {'Content-Type':'text/html'})
    .end(`<html><body>${osinfo}<h2>path info</h2>${JSON.stringify(p)}</body></html>`);
}).listen(3000);