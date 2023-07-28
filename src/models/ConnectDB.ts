import mongoose from "mongoose";

export class ConnectDB {
    async connect() {
        // await mongoose.connect('mongodb://127.0.0.1:27017/shopping_project');
        await mongoose.connect('mongodb+srv://trankhiem99999:bncvznczvzz1411@cluster0.7tvwpiv.mongodb.net/?retryWrites=true&w=majority/test');
    }
}