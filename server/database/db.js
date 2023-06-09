import mongoose from "mongoose";

// mongoose.connect('mongodb+srv://user:user@cluster0.gaqmv3e.mongodb.net/curd_app?retryWrites=true&w=majority')
mongoose.connect('mongodb://127.0.0.1:27017/crud_app')

const db = mongoose.connection

db.once('open',() => {
    console.log("DB Connected Successfully!")
})

export default db


