console.log("Hello, World!");

import fastify from "fastify";
import { teams } from "./teams.js";

const server = fastify({ logger: true });

server.listen({ port: 3333 }, () => {
    console.log("Server is running on http://localhost:3333");
});

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    response.send(teams);
});
server.get("/teams/:id", async (request, response) => {
    const { id } = request.params as { id: string };
    const team = teams.find(t => t.id === parseInt(id));
    if (!team) {
        response.status(404).send({ error: "Team not found" });
        return;
    }
    response.type("application/json").code(200);
    response.send(team);
});
