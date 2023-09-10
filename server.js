const http= require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/task" && req.method === "GET"){
        const task = [
        {
            id: 1,
            description: "Estudiar node",
            completed: false,
        },
        {
            id: 2,
            description: "Practicar Node",
            completed: true,
        },
        ];

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(task));
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end("Ruta no encontrada");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor en ejecucion en el puerto ${PORT}`);
});