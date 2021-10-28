import { createServer } from "miragejs";

if (window.server) {
    server.shutdown()
}

window.server = createServer({
    routes() {
        this.get("/api/movies", () => {
            return {
                movies: [
                    { id: 1, name: "Inception", year: 2010 },
                    { id: 2, name: "Interstellar", year: 2014 },
                    { id: 3, name: "Dunkirk", year: 2017 },
                ],
            }
        })
    },
})