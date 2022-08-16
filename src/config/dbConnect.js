import mongoose from "mongoose";

mongoose.connect('mongodb+srv://jvpazotti:jv2203br@cluster0.nmkhxes.mongodb.net/alura-node');

let db=mongoose.connection;

export default db;