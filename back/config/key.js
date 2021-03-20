require('dotenv').config();

switch(process.env.NODE_ENV){
    case 'production':
        module.exports = require('./prod');
        break;
    case 'develop':
        module.exports = require('./dev');
        break;
    default:
        console.log(process.env.NODE_ENV);
}