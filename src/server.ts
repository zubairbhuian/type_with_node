import app from "./app";
import { dbConnect } from "./helper/bd_connect";
import { dbURL, serverPort } from "./utils/secret";


app.listen(serverPort, () => {
    console.log(`Server is running  on port ${serverPort}`);
    dbConnect(`${dbURL}`)
});