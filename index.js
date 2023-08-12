const http = required ("http");


const PORT = 8080
const server = http.createServer((req, resp) => {
    if(req.method=== "GET" && req.url==="/users"){
        console.log("");
        resp.end("")
    }

})

server.listen(PORT, ()console.log())