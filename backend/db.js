const mongoose = require("mongoose");

//Connect to the database:
mongoose.connect(
    //INSERT the connection string here
    { useNewUrlParses: true, useUnifiedTopology: true }
);