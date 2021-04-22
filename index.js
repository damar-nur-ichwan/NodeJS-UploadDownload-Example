var express = require('express')
var multer  = require('multer')
var app = express()
app.listen(3001)
app.use(express.static('public'))
const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,'uploads');
  },
  filename: (req,file,cb)=>{
    const{originalname} = file;
    cb(null, originalname)
  }
})
var upload = multer({storage })
app.post('/profile/single', upload.single('avatar'), function (req, res, next) {
  console.log({file:req.file,body:req.body})
})
app.post('/profile/multiple', upload.array('avatar'), function (req, res, next) {
  console.log({file:req.files,body:req.body})
})
