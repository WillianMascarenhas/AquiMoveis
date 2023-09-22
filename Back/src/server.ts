import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
          console.log("Server is running on port 3001");
          console.log("'baseUrl': 'http://127.0.0.1:3001'");
        });
    })
    .catch((error) =>{console.log(error)})