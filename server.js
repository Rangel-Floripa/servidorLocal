const http = require ('http');
const port = 3000;

const rotas = {
    '/': 'Servidor Local Telmo - Rota Principal',
    '/rota1': 'Servidor local Rota1',
    '/rota2': 'Servidor local Rota2'

}

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () =>{
    console.log(`Servidor local escutando em http://localhost:${port}`)
})