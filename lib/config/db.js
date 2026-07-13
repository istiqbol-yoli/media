import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://istiqbol-yoli:007007007@cluster0.qmhenkb.mongodb.net/istiqbol-yoli')
    console.log(("DB Connected"))
}