import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/db.connect.js";

dotenv.config({
    path: './.env'
})

connectDB().then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT||5000, () => {
        console.log("Server started on port 5000");
    });
}).catch((err) => {
    console.log(err);
});
