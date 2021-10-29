import { createServer, Model, Response } from "miragejs";
import { API_PATHS } from "./src/common/constants";

if (window.server) {
    server.shutdown()
}

window.server = createServer({
    models: {
        debitCardDetails: Model
    },

    seeds(server) {
        server.schema.debitCardDetails.create({
            balance: 3000,
            currencyCode: "SGD",
            name: "mark henry",
            cardNumber: "5647341124132020",
            expiryDate: "12/20",
            cvv: 456,
            weeklyExpenditure: 345,
            weeklySpendingLimit: 5000,
            active: true
        });
    },

    routes() {
        this.get(API_PATHS.BASE + API_PATHS.GET_DETAILS, () => {
            return new Response(200, {}, this.schema.debitCardDetails.find(1));
        });
        this.post(API_PATHS.BASE + API_PATHS.SET_LIMIT, (schema, request) => {
            let attrs = JSON.parse(request.requestBody)

            let post = this.schema.debitCardDetails.find(1);
            post.update('weeklySpendingLimit', attrs.weeklySpendingLimit);

            return new Response(200, {}, { message: "success" });
        })
    },
})