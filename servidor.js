const chalk = require('chalk');
const http = require('http');
const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: 'brayan', message: 'que tal' }));
  });


  server.listen(port, host, () => {
    console.log(chalk.green(`Servidor en ejecución en http://${host}:${port}`));
  });