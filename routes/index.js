const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const path = require('path');

router.get('/', (req, res)=>{
    return res.render('home');
});

router.post('/', async(req,res)=>{
    console.log(req.file);
    const fileName = path.parse(req.file.filename).name;
    const compImage = `compressed - ${fileName}.jpg`;
    await sharp(req?.file?.path).jpeg({quality : 70}).toFile(path.join('compressed', compImage));
    return res.render('success', {image : `${compImage}`})
})


module.exports = router;