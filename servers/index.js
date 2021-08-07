import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

import dotenv from "dotenv";

import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Mutation } from "./resolvers/Mutation.js";
import { Location } from "./resolvers/Location.js";
import { Apartment } from "./resolvers/Apartment.js"; 
import apartmentDB from "./models/apartmentsDB.js";
import locationDB from "./models/locationDB.js";




dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log("DB CONNECTED"));

mongoose.set("useFindAndModify", false);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    const app = express();
    app.get("/", (req, res,next) => {
        res.send("Welcome to Sucasa API")
        next();
    })

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers: {
            Query,
            Location,
            Apartment,
            Mutation
        },
        context: {
            apartmentDB,
            locationDB
        },
        introspection: true,
        playground:true

    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app });
    app.listen(PORT,()=>console.log("Server up & running on PORT: 4000"))
};
startServer();