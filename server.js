import app from "./app.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT  , (err)=>{
    if(err) throw err;
    console.log(`Server running on port ${PORT}`);
})