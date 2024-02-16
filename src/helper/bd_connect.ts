import mongoose from "mongoose";


export const dbConnect = async (dbURL: string) => {
    try {
        await mongoose.connect(dbURL);
        console.log("DB conneted");

    } catch (error) {
        mongoose.connection.on('error', () => {
            console.error("DB connection error :" + error);
        })
        console.log(error);

    }
}