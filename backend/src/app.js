const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use("/api", require("./routes/api"));

app.listen(3000, function(){
      console.log("Server running!")
})