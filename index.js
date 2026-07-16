const express = require('express');
const path = require('path')
const app = express();
const pathRoute = require('./routes');

const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null, './uploads');
    },
    filename : function(req, file, cb){
        return cb(
            null, 
            `${Date.now()} - ${file.originalname}`
        )
    }
})
const upload = multer({
    storage, 
    fileFilter : function(req, file, cb){
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
            cb(null, true);
        } else {
            cb(
                "File format must be JPG or PNG",
                false
            );
        }
    }
})
app.use('/compressed', express.static(path.join(__dirname, 'compressed')));
app.use('/upload', upload.single("imgUpload"), pathRoute);
app.use(express.urlencoded({extended : false}));
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
