const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname,"../myuploads"));
    },
    filename: function (req, file, callback) {
        const uniquePrefix = Date.now();
        callback(null, uniquePrefix + "-" + file.originalname);
              //error
    },
});
const fileFilter = (req, file, callback) => {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
        // console.log({file});
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // To accept the file pass `true`, like so:
        callback(null, true)
    } else {
        // To reject this file pass `false`, like so:
        callback(null, false);
    }
}


const options = {
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        filesize: 1024 * 1024 * 5,
    },
}
const uploads = multer(options); //upload bceomes middleware 

module.exports = uploads;