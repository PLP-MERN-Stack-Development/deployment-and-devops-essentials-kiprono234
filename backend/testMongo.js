const mongoose = require("mongoose");

const uri = "mongodb+srv://Kevin:SiidDNp6Ca6DjjQu@cluster0.p1el0ug.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Error:", err.message));
