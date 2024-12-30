import mongoose from "mongoose";


const connectToDb = async()=>{
    mongoose.connect('mongodb+srv://riddy:riddy123@nodejs.rdf8rqp.mongodb.net/Ridwat')
    .then(()=>console.log('DB connected succsesfully')).catch(e=>console.log(e))
}