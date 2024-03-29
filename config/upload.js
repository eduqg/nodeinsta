const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', 'uploads'),
        filename: function(req, file, callback) {
            // Operação de erro caso tivesse, nome que quero
            callback(null, file.originalname);
        }
    })
};