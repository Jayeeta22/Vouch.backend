const mongooes=require("mongoose")
// const dotenv=require("dotenv")
// connect mongdb Atlus in nodejs
// dotenv.config({path:"./config.env"})
const DB=process.env.DATABASE || "mongodb+srv://jayeeta97:mernform@cluster0.obqpkzd.mongodb.net/?retryWrites=true&w=majority"
mongooes.connect(DB).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})