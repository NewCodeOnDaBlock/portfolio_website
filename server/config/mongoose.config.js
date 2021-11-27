const mongoose = require("mongoose");
const db_name = "portfolio_database";

mongoose.connect(`mongodb://localhost:/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Successfully connected to the: ${db_name} database`))
    .catch(err => console.log(`Something went wrong when connecting to ${db_name}`, err))

