exports.connect = () => {
    try {
        const mongoose = require('mongoose');
        const URI ='mongodb+srv://Monti:Monti123@cluster0.s8bd8.mongodb.net/ecommerce?retryWrites=true&w=majority';
        mongoose.connect(URI, {useNewUrlParser : true, useUnifiedTopology: true})
    } catch(err) {
        console.log(err);
        process.exit()
    }
}
