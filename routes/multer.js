// Disk Storage code for multer obtained from https://www.npmjs.com/package/multer - DISK STORAGE section

const multer = require('multer')
const {v4: uuidv4} = require('uuid'); // use this to generate a unique id for the file name
const path = require('path'); // use this to get the file extension

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    const unique = uuidv4(); // generate a unique id for the file name
    cb(null, unique + path.extname(file.originalname)); // use the unique id + the file extension as the file name 
  }
})

const upload = multer({ storage: storage })

module.exports = upload;