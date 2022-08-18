const express=require("express");

const mongoose=require("mongoose");

const router=require("./routes/book-routes");

const cors=require("cors");

const app=express();

app.use(cors({
    origin: "http://localhost:3000",
}));
mongoose.connect(
    "mongodb+srv://Admin:Password1@cluster0.mlzqv2a.mongodb.net/?retryWrites=true&w=majority"
).then(()=> console.log("Connected to a Database"))
.then(()=>{
    app.listen(5000);
})

.catch((err) => console.log(err));
app.use(express.json());
app.use("/books",router);
