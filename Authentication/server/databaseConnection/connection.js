const mongoose = require("mongoose");

const connect =(url)=>{
    return mongoose.connect(url);
}

export default connect;