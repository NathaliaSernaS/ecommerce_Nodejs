const app = require('./app');
const sequelize = require('./utils/connection');
require('./models')
const PORT = process.env.PORT || 8080;

const main = async() => {
    try{
        // si tengo un error dentro de sync coloco ({alter:true}) o ({force:true})
        await sequelize.sync();
        console.log("DB connected");
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch(error){
        console.log(error);
    }
}

main();