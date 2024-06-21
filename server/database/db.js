import mongoose from "mongoose";

export const Connnection = async () => {
    const URL = process.env.DB_URL;
    try {
        await mongoose.connect(URL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log('Error While Connecting With Database', error.message);
    }
}
export default Connnection;